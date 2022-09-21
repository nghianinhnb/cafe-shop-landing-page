module.exports = {
  siteMetadata: {
    title: `The Holy Cross Brewing Society`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass", 

    "gatsby-plugin-sitemap", 

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "static/icon.jpeg",
      }
    },
  ]
};