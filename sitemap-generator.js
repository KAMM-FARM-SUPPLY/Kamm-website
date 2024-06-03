// sitemap-generator.js
require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
  "plugins": [
    "babel-plugin-macros",
    ["babel-plugin-styled-components", { "ssr": true }],
    ["module-resolver", {
      "root": ["./src"],
      "alias": {
        "components": "./src/components",
        "helpers": "./src/helpers",
        "pages": "./src/pages",
        "styles": "./src/styles",
        // Add other aliases as needed
      }
    }]
    
  ]
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
  