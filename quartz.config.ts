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
          light: "#fff8e7",           // Rich warm cream/golden white
          lightgray: "#ffd89b",       // Vibrant golden beige
          gray: "#5b6b7a",            // Muted slate
          darkgray: "#1e3a5f",        // Deep navy blue
          dark: "#0f2744",            // Darker navy for text
          secondary: "#2563a8",       // Royal blue
          tertiary: "#d4a017",        // Bright metallic gold
          highlight: "rgba(212, 160, 23, 0.20)",  // Strong golden highlight
          textHighlight: "#fff9e6",   // Soft yellow highlight
        },
        darkMode: {
          light: "#1a2332",           // Rich midnight blue with warmth
          lightgray: "#2d4059",       // Deep blue-gray
          gray: "#7a8ea4",            // Soft blue-gray
          darkgray: "#cbd5e0",        // Light blue-gray
          dark: "#e8eef5",            // Almost white
          secondary: "#4a90e2",       // Vibrant blue
          tertiary: "#f5c542",        // Bright golden yellow
          highlight: "rgba(74, 144, 226, 0.22)", // Strong blue highlight
          textHighlight: "rgba(245, 197, 66, 0.28)", // Strong golden highlight
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
