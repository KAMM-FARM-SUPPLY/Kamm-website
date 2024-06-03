// sitemap-generator.js
require("@babel/register")({
    presets: ["@babel/preset-env", "@babel/preset-react"]
  });
  
  const Sitemap = require('react-router-sitemap').default;
  const router = require('./src/App').default;
  
  function generateSitemap() {
    return (
      new Sitemap(router)
        .build('https://www.kamm-farm-supply.com/')
        .save('./public/sitemap.xml')
    );
  }
  
  generateSitemap();
  