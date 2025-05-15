self.__BUILD_MANIFEST = {
  "polyfillFiles": [
    "static/chunks/polyfills.js"
  ],
  "devFiles": [
    "static/chunks/react-refresh.js"
  ],
  "ampDevFiles": [],
  "lowPriorityFiles": [],
  "rootMainFiles": [],
  "pages": {
    "/_app": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_app.js"
    ],
    "/_error": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_error.js"
    ],
    "/about-us": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/about-us.js"
    ],
    "/blog": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/blog.js"
    ],
    "/contact": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/contact.js"
    ],
    "/product-details": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/product-details.js"
    ],
    "/products": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/products.js"
    ],
    "/why-us": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/why-us.js"
    ]
  },
  "ampFirstPages": []
};
self.__BUILD_MANIFEST.lowPriorityFiles = [
"/static/" + process.env.__NEXT_BUILD_ID + "/_buildManifest.js",
,"/static/" + process.env.__NEXT_BUILD_ID + "/_ssgManifest.js",

];