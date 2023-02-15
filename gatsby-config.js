/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Jr Devs Blog`,
    description: `My journey as a developer`,
    twitterUsername: ``,
    image: `src/images/brandon.jpeg`,
    siteUrl: `https://www.jrdevsblog.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["GA-TRACKING_ID", process.env.GOOGLE_4 || "none"],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://gmail.us1.list-manage.com/subscribe/post?u=429c539bd60c4b16c9b79b902&amp;id=2228b02ef1",
        timeout: 3500,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Jr Devs Blog`,
        short_name: `JrDevs`,
        start_url: `/`,
        background_color: "#000000",
        theme_color: `#000000`,
        display: "standalone",
        icon: "src/images/code-icon.svg",
      },
    },
    "gatsby-plugin-offline",
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
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `https-www-jrdevsblog-com`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.jrdevsblog.com',
        sitemap: 'https://www.jrdevsblog.com/sitemap.xml',
      }
    }
  ],
};
