# Any Task Plugin

An Obsidian plugin that enhances the appearance of checkboxes (tasks) based on their content (the character between the brackets, e.g., `[x]`, `[/]`, `[>]`) and the current active theme.

## Features

- **Theme-Specific Adjustments**: Automatically detects the current theme and applies custom CSS fixes to ensure consistent task markers across different themes (Minimal, Blue Topaz, Things, AnuPpuccin, ITS Theme, Primary).
- **Custom Task Symbols**: Supports a wide variety of task markers beyond just "completed" (e.g., in progress `/`, scheduled `>`, etc.).

## Installation

### Manual Installation
1. Download the latest release (`main.js`, `manifest.json`, `styles.css`).
2. Create a folder named `obsidian-any-task` in your vault's `.obsidian/plugins/` directory.
3. Move the downloaded files into that folder.
4. Reload Obsidian and enable the plugin in the community plugins settings.

### Development
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the compilation in watch mode.
4. Run `npm run build` for a production build.

## How it works
The plugin monitors the `css-change` event in Obsidian and updates a `data-x10-css-theme` attribute on the `document.body`. The provided `styles.css` then uses this attribute to apply theme-specific styles to the checkboxes.

## Credits
Based on the X10 Task sample.
