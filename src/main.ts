import { Plugin } from 'obsidian';

export default class AnyTaskPlugin extends Plugin {
    static ATTRIBUTE_CSS_THEME = "data-any-task-theme";

    async onload() {
        this.app.workspace.onLayoutReady(() => {
            this.setCSSTheme();
        });

        this.registerEvent(this.app.workspace.on("css-change", () => {
            this.setCSSTheme();
        }));
    }

    async onunload() {
        this.unsetCSSTheme();
    }

    setCSSTheme() {
        const cssTheme = (this.app.vault as any).config?.cssTheme || 'Default';
        const currentAttr = document.body.getAttribute(AnyTaskPlugin.ATTRIBUTE_CSS_THEME);
        
        if (currentAttr !== cssTheme) {
            document.body.setAttribute(AnyTaskPlugin.ATTRIBUTE_CSS_THEME, cssTheme);
        }
    }

    unsetCSSTheme() {
        document.body.removeAttribute(AnyTaskPlugin.ATTRIBUTE_CSS_THEME);
    }
}
