# API Reference

The URL for Ontario Parks' API:
```
https://ontario-park.herokuapp.com/api
```

## Categories

### Get categories 
 - URL `/categories`
 - Method: `GET`
 - Sample Response:
 ```
 [
    {
        "_id": "5fc1547cc578324530ca1bc9",
        "name": "general"
    },
    {
        "_id": "5fc1547cc578324530ca1bca",
        "name": "natural"
    },
    {...},
    {...}
 ]
 ```

### Heroku commands
 - git subtree push --prefix deliverable-3/Backend heroku master

### Coordinates 
 - Latitude is negative for South and positive for North
 - Longitude is positive for East and negative for West
