import { Plugin } from 'obsidian';

export default class AnyTaskPlugin extends Plugin {
    static ATTRIBUTE_CSS_THEME = "data-x10-css-theme";

    async onload() {
        console.log("Any Task Plugin loaded");

        this.registerEvent(this.app.workspace.on("css-change", () => {
            this.setCSSTheme();
        }));

        this.setCSSTheme();
    }

    async onunload() {
        this.unsetCSSTheme();
    }

    setCSSTheme() {
        // Accessing internal config to get the current theme name
        const cssTheme = (this.app.vault as any).config?.cssTheme || 'Default';
        document.body.setAttribute(AnyTaskPlugin.ATTRIBUTE_CSS_THEME, cssTheme);
    }

    unsetCSSTheme() {
        document.body.removeAttribute(AnyTaskPlugin.ATTRIBUTE_CSS_THEME);
    }
}
