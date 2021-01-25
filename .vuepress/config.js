module.exports = {
  "title": "Coder",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/hero.png"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,height=device-height,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/nevermore18",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      }
    },
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "x378042733@gmail.com",
    "authorAvatar": "/avatar.png",
    "record": "blog"
  },
  "markdown": {
    "lineNumbers": true
  }
}
