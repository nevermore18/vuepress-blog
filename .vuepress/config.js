module.exports = {
  "title": "Coder",
  "description": "java",
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
            "link": "https://github.com/NeverMore378",
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
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "nevermore",
    "authorAvatar": "/avatar.png",
    "record": "blog",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  }
}
