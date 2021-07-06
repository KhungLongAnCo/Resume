const path = require("path")
const nodeSass = require("node-sass")

module.exports = {
  siteMetadata: {
    title: `Luân Luân`,
    description: `Luân Luân, Nguyên Văn Luân resume`,
    siteUrl: "https://nifty-aryabhata-faa1ed.netlify.app/",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-typescript",
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-inline-svg`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        components: path.join(__dirname, "src/components"),
        layouts: path.join(__dirname, "src/layouts"),
        templates: path.join(__dirname, "src/templates"),
        scss: path.join(__dirname, "src/scss"),
        types: path.join(__dirname, "src/types"),
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
        theme: path.join(__dirname, "src/theme"),
        assets: path.join(__dirname, "src/assets"),
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: nodeSass,
        cssLoaderOptions: {
          generateScopedName: "[name]__[local]___[hash:base64:5]",
          camelCase: true,
          sourceMap: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets\/.*\.svg/,
          options: {
            classIdPrefix: true,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
  ],
}
