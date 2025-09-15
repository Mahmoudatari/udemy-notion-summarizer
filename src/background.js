import { markdownToBlocks } from "@tryfabric/martian";

// Function to summarize transcript using OpenAI
async function summarizeWithOpenAI(transcript, apiKey) {
  const systemPrompt = `You are an expert Udemy lectures summarizer. You help students prepare extremely well crafted notes for studying. You will receive a transcript of a Udemy lecture, your job is to look it throughly understand it, and start preapring notes in markdown format. The notes you prepare will be used to create a new notion page. In your notes, try to use tables, lists, and bullet points, just anything to facilitate studying the notes later. Act as a learning partner, add context when you deem appropriate dont just stick to context in transcript.`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4.1-mini",
      temperature: 0.3,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Transcript:\n\n${transcript}` },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(
      `OpenAI API error: ${response.status} ${response.statusText}`
    );
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content?.trim() || "";
}

// Function to create Notion page
async function createNotionPage(markdown, title, parentPageId, notionApiKey) {
  // Convert markdown to Notion blocks using the real @tryfabric/martian library
  const notionBlocks = markdownToBlocks(markdown);
  console.log(`Converted markdown to ${notionBlocks.length} Notion blocks`);

  // Generate page title with AZ-900 prefix
  function generatePageTitle(customTitle) {
    const coursePrefix = "AZ - 900 Notes:";

    if (customTitle) {
      return `${coursePrefix} - ${customTitle}`;
    }

    // Fallback to random number
    const randomNum = Math.floor(Math.random() * 10000);
    return `${coursePrefix} - #${randomNum}`;
  }

  const finalPageTitle = generatePageTitle(title);

  const response = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${notionApiKey}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    },
    body: JSON.stringify({
      parent: {
        page_id: parentPageId,
      },
      properties: {
        title: {
          type: "title",
          title: [
            {
              type: "text",
              text: {
                content: finalPageTitle,
              },
            },
          ],
        },
      },
      children: notionBlocks,
    }),
  });

  if (!response.ok) {
    throw new Error(
      `Notion API error: ${response.status} ${response.statusText}`
    );
  }

  const data = await response.json();
  return data.url;
}

// Main function to process transcript
async function processTranscript(text, customTitle) {
  const { openaiApiKey, notionApiKey, selectedParentPageId } =
    await chrome.storage.sync.get([
      "openaiApiKey",
      "notionApiKey",
      "selectedParentPageId",
    ]);

  if (!openaiApiKey) {
    throw new Error("OpenAI API key not configured");
  }

  if (!notionApiKey) {
    throw new Error("Notion API key not configured");
  }

  if (!selectedParentPageId) {
    throw new Error("No parent page selected");
  }

  const length = text.length;
  const lines = text.split("\n").length;
  const receivedAt = new Date().toISOString();

  let summary = "";
  let notionPageUrl = "";

  try {
    // Summarize with OpenAI
    console.log("Summarizing transcript with OpenAI...");
    summary = await summarizeWithOpenAI(text, openaiApiKey);
    console.log("Summary generated:", summary.length, "characters");

    // Create Notion page
    if (summary) {
      console.log("Creating Notion page...");
      notionPageUrl = await createNotionPage(
        summary,
        customTitle,
        selectedParentPageId,
        notionApiKey
      );
      console.log("Notion page created:", notionPageUrl);
    }
  } catch (err) {
    console.error("Processing failed:", err);
    throw err;
  }

  return {
    ok: true,
    receivedAt,
    source: "chrome-extension",
    url: "",
    length,
    lines,
    summaryPresent: Boolean(summary),
    summary,
    notionPageCreated: Boolean(notionPageUrl),
    notionPageUrl,
  };
}

// Message listener
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg?.type === "SEND_TO_API") {
    processTranscript(msg.text, msg.customTitle).then(
      (data) => sendResponse({ ok: true, data }),
      (err) => sendResponse({ error: String(err.message || err) })
    );
    return true;
  }
});
