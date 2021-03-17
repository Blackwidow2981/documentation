const path = require("path");
// const {components} = require('./src/plugins/components');

module.exports = {
  title: "Yellow Messenger",
  tagline: "Conversational AI cloud for all",
  url: "https://docs.yellowmessenger.com",
  baseUrl: "/",
  favicon: "img/favicon.png",
  organizationName: "yellowmessenger",
  projectName: "documentation",
  // customFields: {
  //   components: {
  //     inputs: components("inputs"),
  //     processors: components("processors"),
  //     conditions: components("conditions"),
  //     outputs: components("outputs"),
  //     caches: components("caches"),
  //     rate_limits: components("rate_limits"),
  //     buffers: components("buffers"),
  //     metrics: components("metrics"),
  //     tracers: components("tracers"),
  //   },
  // },
  themeConfig: {
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("./src/plugins/prism_themes/monokai"),
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
    },

    image: "img/og_img.png",
    metadatas: [{ name: "twitter:card", content: "summary" }],
    navbar: {
      title: "",

      logo: {
        alt: "Yellow Messenger",
        src: "img/logo.png",
      },
      items: [
        {
          to: "documentation",
          activeBasePath: "docs/documentation",
          label: "Documentation",
          position: "left",
        },
        {
          to: "docs/howtos/basics/create-a-bot",
          label: "Developer",
          position: "left",
          activeBasePath: "docs/howtos",
        },
        {
          to: "cookbooks",
          label: "Cookbooks",
          position: "left",
        },
        {
          to: "docs/developer/overview",
          label: "How to's",
          position: "left",
          activeBasePath: "docs/developer",
        },
        {
          to: "https://community.yellowmessenger.com",
          label: "Community",
          position: "right",
        },
        {
          to: "https://cloud.yellowmessenger.com",
          label: "Sign up for free",
          position: "right",
        },
      ],
    },
    footer: { links: [] },
    googleAnalytics: {
      trackingID: "UA-135959729-1",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    path.resolve(__dirname, "./src/plugins/cookbooks"),
    path.resolve(__dirname, "./src/plugins/redirects"),
  ],
  onBrokenLinks: "log",
};
