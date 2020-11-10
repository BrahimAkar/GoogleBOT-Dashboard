export default [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: "cil-speedometer",
  },
  // {
  //   _tag: "CSidebarNavTitle",
  //   _children: ["Theme"],
  // },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Colors",
  //   to: "/theme/colors",
  //   icon: "cil-drop",
  // },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Typography",
  //   to: "/theme/typography",
  //   icon: "cil-pencil",
  // },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Run Scraping"],
  },
  // {
  //   _tag: "CSidebarNavDropdown",
  //   name: "Run Scraping",
  //   route: "/base",
  //   icon: "cil-puzzle",
  //   _children: [
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Cards",
  //       to: "/base/cards",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Carousel",
  //       to: "/base/carousels",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Collapse",
  //       to: "/base/collapses",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Forms",
  //       to: "/base/forms",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Jumbotron",
  //       to: "/base/jumbotrons",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "List group",
  //       to: "/base/list-groups",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Navs",
  //       to: "/base/navs",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Navbars",
  //       to: "/base/navbars",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Pagination",
  //       to: "/base/paginations",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Popovers",
  //       to: "/base/popovers",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Progress",
  //       to: "/base/progress-bar",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Switches",
  //       to: "/base/switches",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Tables",
  //       to: "/base/tables",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Tabs",
  //       to: "/base/tabs",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Tooltips",
  //       to: "/base/tooltips",
  //     },
  //   ],
  // },
  // {
  //   _tag: "CSidebarNavDropdown",
  //   name: "Buttons",
  //   route: "/buttons",
  //   icon: "cil-cursor",
  //   _children: [
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Buttons",
  //       to: "/buttons/buttons",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Brand buttons",
  //       to: "/buttons/brand-buttons",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Buttons groups",
  //       to: "/buttons/button-groups",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Dropdowns",
  //       to: "/buttons/button-dropdowns",
  //     },
  //   ],
  // },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Charts",
  //   to: "/charts",
  //   icon: "cil-chart-pie",
  // },
  {
    _tag: "CSidebarNavItem",
    name: "Custom Proxies",
    to: "/scrapwithcustomproxies",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Free Proxies",
    to: "/scrapwithfreeproxies",
    icon: "cil-puzzle",
    badge: {
      color: "success",
      text: "[Auto]",
    },
  },
  {
    _tag: "CSidebarNavItem",
    name: "Premium Proxies",
    to: "/scrapwithpremium",
    icon: "cil-puzzle",
    badge: {
      color: "success",
      text: "[Auto]",
    },
  },
  {
    _tag: "CSidebarNavItem",
    name: "Server IP",
    to: "/scrapwithServerip",
    icon: "cil-puzzle",
    // badge: {
    //   color: "danger",
    //   text: "BETA",
    // },
  },
  {
    _tag: "CSidebarNavItem",
    name: "LIVE",
    to: "/live",
    icon: "cil-puzzle",
    badge: {
      color: "danger",
      text: "NEW",
    },
  },
];
