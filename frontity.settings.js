const settings = {
  "name": "sga-app",
  "state": {
    "frontity": {
      "url": "http://sga-gymfeminine.fr/bo/",
      "title": "Test Frontity SGA",
      "description": "WordPress installation for Frontity SGA development"
    }
  },
  "packages": [
    {
      "name": "@frontity/sga-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Nature",
              "/category/nature/"
            ],
            [
              "Travel",
              "/category/travel/"
            ],
            [
              "Japan",
              "/tag/japan/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://sga-gymfeminine.fr/bo/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
