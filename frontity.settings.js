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
              "Actualités",
              "/"
            ],
            [
              "Agenda",
              "/category/nature/"
            ],
            [
              "Médiathèque",
              "/category/travel/"
            ],
            [
              "Résultats",
              "/resultats/"
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
