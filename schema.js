export const typeDefs = `#graphql
  type Game {
    id: Int
    title: String
    platform: [String]
    reviews: [Review]
  }

  type Author {
    id: Int
    name: String
    verified: Boolean
    reviews: [Review]
  }

  type Review {
    id: Int
    rating: Int
    content: String
    author: Author
    game: Game
  }

  type Query {
    games: [Game]
    game(id: Int!): Game
    authors: [Author]
    author(id: Int!): Author
    reviews: [Review]
    review(id: Int!): Review
  }

  type Mutation {
    createGame(title: String, platform: [String]): Game
    createAuthor(name: String, verified: Boolean): Author
    createReview(rating: Int, content: String, authorId: Int, gameId: Int): Review

    updateGame(id: Int, title: String, platform: [String]): Game
    updateAuthor(id: Int, name: String, verified: Boolean): Author
    updateReview(id: Int, rating: Int, content: String, authorId: Int, gameId: Int): Review

    deleteGame(id: Int): Game
    deleteAuthor(id: Int): Author
    deleteReview(id: Int): Review
  }
`