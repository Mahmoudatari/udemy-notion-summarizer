# Udemy Transcript Extension

A Chrome extension that extracts Udemy lecture transcripts, processes them with AI, and creates organized study notes in Notion.

## Features

- ✅ **Extract transcripts** from Udemy lectures automatically
- ✅ **AI-powered summarization** using OpenAI GPT-4.1-mini
- ✅ **Notion integration** with proper markdown-to-blocks conversion
- ✅ **Self-contained** - no external dependencies
- ✅ **Configurable** - set custom page titles and parent pages
- ✅ **Real-time processing** - direct API calls from extension

## Installation

1. **Clone or download** this repository
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Build the extension**:
   ```bash
   npm run build-extension
   ```
4. **Load in Chrome**:
   - Open `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `dist/` folder

## Configuration

### API Keys Required

1. **OpenAI API Key**

   - Get from: https://platform.openai.com/api-keys
   - Format: `sk-...`

2. **Notion API Key**
   - Create integration at: https://www.notion.so/my-integrations
   - Format: `secret_...`
   - Share your workspace pages with the integration

### Setup Steps

1. **Open the extension popup**
2. **Enter your API keys** in the configuration section
3. **Select a parent page** from the dropdown (workspace-level pages only)
4. **Optional**: Set a custom page title for each transcript

## Usage

1. **Navigate to a Udemy lecture** with transcript enabled
2. **Open the extension popup**
3. **Click "Grab & Send"** to:
   - Extract the transcript
   - Summarize with AI
   - Create a Notion page with organized notes
4. **Or click "Copy Only"** to just copy the transcript to clipboard

## Development

### Project Structure

```
├── src/                    # Source files
│   ├── background.js       # Main extension logic
│   ├── popup.js           # Popup interface
│   └── content.js         # Transcript extraction
├── dist/                  # Built extension (load this in Chrome)
├── icons/                 # Extension icons
├── package.json           # Dependencies and scripts
├── webpack.config.js      # Build configuration
└── README.md             # This file
```

### Build Scripts

- `npm run build` - Build extension to dist/
- `npm run build-extension` - Clean and build
- `npm run dev` - Watch mode for development
- `npm run clean` - Remove dist/ folder

### Making Changes

1. **Edit source files** in `src/`
2. **Run build command**: `npm run build-extension`
3. **Reload extension** in Chrome extensions page
4. **Test your changes**

## Technical Details

### Dependencies

- **@tryfabric/martian**: Converts markdown to Notion blocks
- **Webpack**: Bundles the extension with polyfills
- **Babel**: Transpiles modern JavaScript

### API Integration

- **OpenAI API**: GPT-4.1-mini for transcript summarization
- **Notion API**: Creates pages with rich formatting
- **Chrome Storage**: Securely stores API keys and settings

### Security

- API keys stored in Chrome's encrypted storage
- All processing happens client-side
- Direct API calls to OpenAI and Notion

## Troubleshooting

### Extension won't load

- Make sure you're loading from the `dist/` folder, not the root
- Check that all files are present in `dist/`

### API errors

- Verify your API keys are correct
- Ensure Notion integration has access to your workspace
- Check that the parent page is shared with your integration

### Build errors

- Run `npm install` to ensure all dependencies are installed
- Try `npm run clean && npm install && npm run build-extension`

## License

Private project for personal use.
