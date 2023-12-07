# tryApollo with Node.JS - Akmal

Endpoint: 

## Game
![image](https://github.com/akmalgomal3/tryApollo/assets/70932821/c56b9356-6a5a-478c-a1a9-736ba84bc564)

### Create
Operation
```json
mutation AddGame($title: String!, $platform: [String]!) {
  createGame(title: $title, platform: $platform) {
    id,
    title,
    platform,
    reviews {
      id
    }
  }
}
```
Data
```json
{
  "title": "Pokemon Scarlet",
  "platform": ["PS5", "Xbox", "PC"]
}
```
Response
```json
{
  "data": {
    "createGame": {
      "id": 8,
      "title": "Pokemon Scarlet",
      "platform": [
        "PS5",
        "Xbox",
        "PC"
      ],
      "reviews": []
    }
  }
}
```

### Read
Operation
```json
query Games {
  games {
    id,
    title,
    platform,
    reviews {
      content,
      author {
        name
      }
    }
  }
}
```
Response
```json
{
  "data": {
    "games": [
      {
        "id": 1,
        "title": "Zelda, Tears of the Kingdom",
        "platform": [
          "Switch"
        ],
        "reviews": [
          {
            "content": "Lorem Ipsum",
            "author": {
              "name": "Yoshi"
            }
          },
          {
            "content": "Lorem Ipsum",
            "author": {
              "name": "Peach"
            }
          }
        ]
      },
    ]
  }
}
```

### Update
Operation
```json
mutation UpdateGame($id: Int!, $title: String!, $platform: [String]!){
  updateGame(id: $id, title: $title, platform: $platform) {
    id,
    title,
    platform
  }
}
```
Data
```json
{
  "id": 8,
  "title": "Monster Hunter: World",
  "platform": ["PS5", "PC"]
}
```
Response
```json
{
  "data": {
    "updateGame": {
      "id": 8,
      "title": "Monster Hunter: World",
      "platform": [
        "PS5",
        "PC"
      ]
    }
  }
}
```

### Delete
Operation
```json
mutation DeleteGame($id: Int!){
  deleteGame(id: $id) {
    id,
    title,
    platform
  }
}
```
Data
```json
{
  "id": 7
}
```
Response
```json
{
  "data": {
    "deleteGame": {
      "id": 7,
      "title": "Pokemon Scarlet",
      "platform": [
        "PS5",
        "Xbox",
        "PC"
      ]
    }
  }
}
```

## Author
![image](https://github.com/akmalgomal3/tryApollo/assets/70932821/82db37d4-69a7-4638-b765-ed67d7a1960e)


### Create
Operation
```json
mutation AddAuthor($name: String!, $verified: Boolean!) {
  createAuthor(name: $name, verified: $verified){
    id,
    name,
    verified,
    reviews {
      id
    }
  }
}
```
Data
```json
{
  "name": "Peach",
  "verified": true
}
```
Response
```json
{
  "data": {
    "createAuthor": {
      "id": 5,
      "name": "Peach",
      "verified": true,
      "reviews": []
    }
  }
}
```

### Read
Operation
```json
query Authors {
  authors{
    id,
    name,
    reviews {
      id
    }
  }
}
```
Response
```json
{
  "data": {
    "authors": [
      {
        "id": 1,
        "name": "Mario",
        "reviews": [
          {
            "id": 1
          },
          {
            "id": 6
          }
        ]
      },
    ]
  }
}
```

### Update
Operation
```json
mutation UpdateAuthor($id: Int!, $name: String!, $verified: Boolean!){
  updateAuthor(id: $id, name: $name, verified: $verified) {
    id,
    name,
    reviews {
      id
    }
  }
}
```
Data
```json
{
  "id": 5,
  "name": "Luigi",
  "verified": true
}
```
Response
```json
{
  "data": {
    "updateAuthor": {
      "id": 5,
      "name": "Luigi",
      "reviews": []
    }
  }
}
```

### Delete
Operation
```json
mutation DeleteAuthor($id: Int!){
  deleteAuthor(id: $id) {
    id,
    name
  }
}
```
Data
```json
{
  "id": 3
}
```
Response
```json
{
  "data": {
    "deleteAuthor": {
      "id": 3,
      "name": "Peach"
    }
  }
}
```

## Review
![image](https://github.com/akmalgomal3/tryApollo/assets/70932821/d19013ea-745e-45ee-9320-7e7d937db3af)

### Create
Operation
```json
mutation AddReview($rating: Int!, $content: String!, $authorId: Int!, $gameId: Int!) {
  createReview(rating: $rating, content: $content, authorId: $authorId, gameId: $gameId){
    id,
    rating,
    content,
    author {
      name
    }
    game {
      title
    }
  }
}
```
Data
```json
{
  "rating": 7,
  "content": "Lorem Ipsum",
  "authorId": 4,
  "gameId": 3
}
```
Response
```json
{
  "data": {
    "createReview": {
      "id": 13,
      "rating": 7,
      "content": "Lorem Ipsum",
      "author": {
        "name": "Peach"
      },
      "game": {
        "title": "Elden Ring"
      }
    }
  }
}
```

### Read
Operation
```json
query Review {
  reviews {
    id,
    rating,
    content,
    author {
      name
    },
    game {
      title
    }

  }
}
```
Response
```json
{
  "data": {
    "reviews": [
      {
        "id": 1,
        "rating": 9,
        "content": "Lorem Ipsum",
        "author": {
          "name": "Mario"
        },
        "game": {
          "title": "Final Fantasy 7 Remake"
        }
      },
    ]
  }
}
```

### Update
Operation
```json
mutation UpdateReview($id: Int!, $rating: Int, $content: String, $authorId: Int, $gameId: Int){
  updateReview(id: $id, rating: $rating, content: $content, authorId: $authorId, gameId: $gameId) {
    id,
    rating,
    content,
    author {
      name
    },
    game {
      title
    }
  }
}
```
Data
```json
{
  "id": 13,
  "rating": 9,
  "content": "GEGEGEGEGE",
  "authorId": 4,
  "gameId": 3
}
```
Response
```json
{
  "data": {
    "updateReview": {
      "id": 13,
      "rating": 9,
      "content": "GEGEGEGEGE",
      "author": {
        "name": "Peach"
      },
      "game": {
        "title": "Elden Ring"
      }
    }
  }
}
```

### Delete
Operation
```json
mutation DeleteReview($id: Int!){
  deleteReview(id: $id) {
    id,
    content,
    rating,
    author {
      name
    },
    game {
      title
    }
  }
}
```
Data
```json
{
  "id": 7
}
```
Response
```json
{
  "data": {
    "deleteReview": {
      "id": 7,
      "content": "Lorem Ipsum",
      "rating": 10,
      "author": null,
      "game": null
    }
  }
}
```





