async function getUdemyTranscript({ timeoutMs = 8000 } = {}) {
  const panel =
    document.querySelector('div[data-purpose="transcript-panel"]') ||
    document.querySelector('div[class^="transcript--transcript-panel"]');
  if (!panel) throw new Error("Udemy transcript panel not found.");

  const scroller =
    document.querySelector('#ct-sidebar-scroll-container') ||
    panel.closest('[data-purpose="sidebar-content"]') ||
    panel;

  const deadline = Date.now() + timeoutMs;
  let lastCount = 0;

  const countCues = () =>
    panel.querySelectorAll('div[class^="transcript--cue-container"] [data-purpose="cue-text"]').length;

  while (Date.now() < deadline) {
    scroller.scrollTop = scroller.scrollHeight;
    await new Promise(r => setTimeout(r, 150));
    const c = countCues();
    if (c === lastCount) break;
    lastCount = c;
  }

  const cues = Array.from(
    panel.querySelectorAll('div[class^="transcript--cue-container"] [data-purpose="cue-text"]')
  ).map(n => n.textContent.trim()).filter(Boolean);

  if (!cues.length) throw new Error("No cue texts found in Udemy transcript.");
  return cues.join("\n");
}

chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  if (msg?.type === "GET_TRANSCRIPT") {
    getUdemyTranscript().then(
      text => sendResponse({ text }),
      err  => sendResponse({ error: err.message })
    );
    return true;
  }
});
