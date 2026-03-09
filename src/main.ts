import { Plugin } from 'obsidian';

interface ObsidianVaultConfig {
    config?: {
        cssTheme?: string;
    }
}

export default class AnyTaskPlugin extends Plugin {
    static ATTRIBUTE_CSS_THEME = "data-any-task-theme";

    onload() {
        this.app.workspace.onLayoutReady(() => {
            this.setCSSTheme();
        });

        this.registerEvent(this.app.workspace.on("css-change", () => {
            this.setCSSTheme();
        }));
    }

    onunload() {
        this.unsetCSSTheme();
    }

    setCSSTheme() {
        const vault = this.app.vault as unknown as ObsidianVaultConfig;
        const cssTheme = vault.config?.cssTheme || 'Default';
        const currentAttr = document.body.getAttribute(AnyTaskPlugin.ATTRIBUTE_CSS_THEME);

        if (currentAttr !== cssTheme) {
            document.body.setAttribute(AnyTaskPlugin.ATTRIBUTE_CSS_THEME, cssTheme);
        }
    }

    unsetCSSTheme() {
        document.body.removeAttribute(AnyTaskPlugin.ATTRIBUTE_CSS_THEME);
    }
}
