import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/santoshmohanram",
      LinkedIn: "https://linkedin.com/in/santoshmohanram",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.DesktopOnly(Component.Explorer({
      title: "Navigate",
      folderClickBehavior: "collapse",
      folderDefaultState: "collapsed",
      useSavedState: true,
      sortFn: (a, b) => {
        // Folders first, then files
        if ((!a.file && !b.file) || (a.file && b.file)) {
          return a.displayName.localeCompare(b.displayName)
        }
        return a.file ? 1 : -1
      },
    })),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.DesktopOnly(Component.Backlinks()),
  ],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(), 
    Component.ArticleTitle(), 
    Component.ContentMeta()
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.DesktopOnly(Component.Explorer({
      title: "Navigate",
      folderClickBehavior: "collapse",
      folderDefaultState: "collapsed",
      useSavedState: true,
    })),
  ],
  right: [
    Component.DesktopOnly(Component.RecentNotes({
      title: "Recent Notes",
      limit: 5,
      showTags: true,
    })),
  ],
}
