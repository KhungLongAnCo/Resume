const path = require("path");
const nodeSass = require("node-sass");

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site",
  },
  plugins: [    
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-typescript",
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
  ],
};
