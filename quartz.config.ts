import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Rings of Thought",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "santoshmohanram.github.io",
    ignorePatterns: ["private", "_templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        title: "Merriweather",
        header: "Merriweather",
        body: "Open Sans",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#fdfbf7",           // Warm cream white
          lightgray: "#e8dcc8",       // Soft golden beige
          gray: "#5b6b7a",            // Muted slate
          darkgray: "#1e3a5f",        // Deep navy blue
          dark: "#0f2744",            // Darker navy for text
          secondary: "#2563a8",       // Royal blue
          tertiary: "#c9941d",        // Rich golden
          highlight: "rgba(201, 148, 29, 0.15)",  // Golden highlight
          textHighlight: "#fff9e6",   // Soft yellow highlight
        },
        darkMode: {
          light: "#1a1e2e",           // Deep midnight blue
          lightgray: "#2d3748",       // Charcoal blue
          gray: "#7a8ea4",            // Soft blue-gray
          darkgray: "#cbd5e0",        // Light blue-gray
          dark: "#e8eef5",            // Almost white
          secondary: "#5b9bd5",       // Lighter royal blue
          tertiary: "#f4c542",        // Bright golden yellow
          highlight: "rgba(91, 155, 213, 0.18)", // Blue highlight
          textHighlight: "rgba(244, 197, 66, 0.25)", // Golden highlight
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "mathjax" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
