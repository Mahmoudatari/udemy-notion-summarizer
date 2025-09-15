const $ = (s) => document.querySelector(s);

// Cache duration: 5 minutes
const CACHE_DURATION = 5 * 60 * 1000;

(async () => {
  const {
    openaiApiKey = "",
    notionApiKey = "",
    selectedParentPageId = "",
  } = await chrome.storage.sync.get([
    "openaiApiKey",
    "notionApiKey",
    "selectedParentPageId",
  ]);
  $("#openaiApiKey").value = openaiApiKey;
  $("#notionApiKey").value = notionApiKey;

  // Load pages on popup open
  await loadNotionPages();

  // Set selected parent page if exists
  if (selectedParentPageId) {
    $("#parentPageSelect").value = selectedParentPageId;
  }
})();

$("#openaiApiKey").addEventListener("change", (e) =>
  chrome.storage.sync.set({ openaiApiKey: e.target.value })
);
$("#notionApiKey").addEventListener("change", (e) =>
  chrome.storage.sync.set({ notionApiKey: e.target.value })
);
$("#parentPageSelect").addEventListener("change", (e) =>
  chrome.storage.sync.set({ selectedParentPageId: e.target.value })
);

// Function to load Notion pages directly from Notion API
async function loadNotionPages() {
  const select = $("#parentPageSelect");
  const { notionApiKey } = await chrome.storage.sync.get(["notionApiKey"]);

  if (!notionApiKey) {
    select.innerHTML = '<option value="">Set Notion API Key first</option>';
    return;
  }

  try {
    // Check cache first
    const cached = await chrome.storage.session.get([
      "notionPages",
      "lastFetched",
    ]);
    const isExpired =
      !cached.lastFetched || Date.now() - cached.lastFetched > CACHE_DURATION;

    let pages;
    if (cached.notionPages && !isExpired) {
      pages = cached.notionPages;
      console.log("Using cached pages");
    } else {
      console.log("Fetching fresh pages from Notion API");
      select.innerHTML = '<option value="">Loading pages...</option>';

      const headers = {
        Authorization: `Bearer ${notionApiKey}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      };

      // Search for all pages accessible to the integration
      const response = await fetch("https://api.notion.com/v1/search", {
        method: "POST",
        headers,
        body: JSON.stringify({
          filter: {
            value: "page",
            property: "object",
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      // Filter for workspace-level pages only
      const workspacePages = data.results.filter((page) => {
        return page.parent && page.parent.type === "workspace";
      });

      // Format the response with clean data
      pages = workspacePages.map((page) => ({
        id: page.id,
        title: page.properties?.title?.title?.[0]?.text?.content || "Untitled",
        url: page.url,
        created_time: page.created_time,
      }));

      // Cache the results
      await chrome.storage.session.set({
        notionPages: pages,
        lastFetched: Date.now(),
      });
    }

    // Populate dropdown
    select.innerHTML = '<option value="">Select a parent page...</option>';
    pages.forEach((page) => {
      const option = document.createElement("option");
      option.value = page.id;
      option.textContent = page.title;
      select.appendChild(option);
    });

    console.log(`Loaded ${pages.length} workspace pages`);
  } catch (error) {
    console.error("Failed to load pages:", error);
    select.innerHTML = '<option value="">Failed to load pages</option>';
    $("#log").textContent = `Failed to load pages: ${error.message}`;
  }
}

// Event listeners for refresh functionality
$("#refreshPages").addEventListener("click", async () => {
  // Clear cache and reload
  await chrome.storage.session.remove(["notionPages", "lastFetched"]);
  await loadNotionPages();
});

async function getCurrentTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
}

async function extract() {
  const tab = await getCurrentTab();
  return chrome.tabs.sendMessage(tab.id, { type: "GET_TRANSCRIPT" });
}

$("#send").addEventListener("click", async () => {
  $("#log").textContent = "Extracting transcript…";
  try {
    const res = await extract();
    if (res?.error) throw new Error(res.error);
    $("#log").textContent = "Sending " + (res.text?.length || 0) + " chars…";

    // Get custom title from input field
    const customTitle = $("#pageTitle").value.trim();

    const sendRes = await chrome.runtime.sendMessage({
      type: "SEND_TO_API",
      text: res.text,
      customTitle: customTitle || null, // Send null if empty
    });
    if (sendRes?.error) throw new Error(sendRes.error);
    $("#log").textContent = "Done ✅";
  } catch (e) {
    $("#log").textContent = "Failed: " + e.message;
  }
});

$("#copy").addEventListener("click", async () => {
  $("#log").textContent = "Extracting transcript…";
  try {
    const res = await extract();
    if (res?.error) throw new Error(res.error);
    await navigator.clipboard.writeText(res.text);
    $("#log").textContent =
      "Copied " + res.text.length + " chars to clipboard ✅";
  } catch (e) {
    $("#log").textContent = "Failed: " + e.message;
  }
});
