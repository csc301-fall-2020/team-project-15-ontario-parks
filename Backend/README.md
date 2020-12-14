# API Reference

The URL for Ontario Parks' API:
```
https://immense-headland-89124.herokuapp.com/api
```

## Categories

### Get all categories 
 - URL `/categories`
 - Method: `GET`
 - Sample Response:
 ```
 {
    "status": "success",
    "length": 3,
    "data": [
        {
            "_id": "5fc1547cc578324530ca1bc9",
            "name": "general"
        },
        {...},
        {...},
    ]
 }
 ```
 
## Parks

### Get all parks
 - URL `/parks`
 - Method: `GET`
 - Sample Response:
 ```
 {
    "status": "success",
    "length": 3,
    "data": [
        {
            "_id": "5fc404cbd9963732324d0136",
            "name": "high park",
            "latitude": "43.6465",
            "longitude": "-79.4637"
        },
        {...},
        {...}
    ]
 }
 ```
 
### Get nearest park
 - URL `/parks/nearest`
 - Method: `GET`
 - Query Strings:
   - `latitude`: positive for north and negative for south
   - `longitude`: positive for east and negative for west
 - Sample Request:
 ```
 https://damp-cliffs-49792.herokuapp.com/api/parks/nearest?latitude=43.6627&longitude=-79.3815
 ```
 - Sample Response:
 ```
 {
    "status": "success",
    "data": {
        "_id": "5fc404cbd9963732324d0136",
        "name": "high park",
        "latitude": "43.6465",
        "longitude": "-79.4637"
    }
 }
 ```
 
## Attractions

### Get attractions by park and category
 - URL `/attractions`
 - Method: `GET`
 - Query Strings:
   - `park`: the name of the park
   - `category` (optional): the category of user's preference (if there are multiple categories, separate them with `,` e.g. `category=general,natural`)
 - Sample Request:
 ```
 https://damp-cliffs-49792.herokuapp.com/api/attractions?park=high+park&category=general,natural
 ```
 - Sample Response:
 ```
 {
    "status": "success",
    "length": 3,
    "data": [
        {
            "_id": "5fb84b5b91a6dfbe71700c37",
            "name": "Colborne Lodge",
            "latitude": "43.6404",
            "longitude": "-79.4600",
            "description": "Built in 1836 by City Surveyor John George Howard...",
            "audio": "http://138.197.141.138/colborne_lodge.mp3",
            "image": "http://138.197.141.138/colborne_lodge.jpg",
            "category": "general",
            "park": "high park"
        },
        {...},
        {...},
    ]
 }
 ```
 


### Heroku commands
 - git subtree push --prefix deliverable-3/Backend heroku master

### Coordinates 
 - Latitude is negative for South and positive for North
 - Longitude is positive for East and negative for West
