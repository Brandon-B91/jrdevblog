/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Jr Devs Blog`,
    description: `My journey as a developer`,
    twitterUsername: ``,
    image: `src/images/code-icon.svg`,
    siteUrl: `https://www.jrdevsblog.com`,
  },
  plugins: [
    // "gatsby-plugin-google-gtag",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Jr Dev Blog",
        short_name: "JrDevs",
        start_url: "/",
        background_color: "#121212",
        theme_color: "#121212",
        display: `standalone`,
        // icon: "src/images/code-icon.svg",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
