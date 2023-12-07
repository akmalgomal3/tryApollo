import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const resolvers = {
    Query: {
        games: async () => prisma.game.findMany(),
        authors: async () => prisma.author.findMany(),
        reviews: async () => prisma.review.findMany(),
      },
      Mutation: {
        createGame: async (_, { title, platform }) => prisma.game.create({ data: { title, platform } }),
        createAuthor: async (_, { name, verified }) => prisma.author.create({ data: { name, verified } }),
        createReview: async (_, { rating, content, authorId, gameId }) => prisma.review.create({ data: { rating, content, authorId, gameId } }),

        updateGame: async (_, { id, title, platform }) => prisma.game.update({ where: { id }, data: { title, platform } }),
        updateAuthor: async (_, { id, name, verified }) => prisma.author.update({ where: { id }, data: { name, verified } }),
        updateReview: async (_, { id, rating, content, authorId, gameId }) => prisma.review.update({ where: { id }, data: { rating, content, authorId, gameId } }),

        deleteGame: async (_, { id }) => prisma.game.delete({ where: { id } }),
        deleteAuthor: async (_, { id }) => prisma.author.delete({ where: { id } }),
        deleteReview: async (_, { id }) => prisma.review.delete({ where: { id } }),
      },
      Game: {
        reviews: async (parent) => prisma.game.findUnique({ where: { id: parent.id } }).reviews(),
      },
      Author: {
        reviews: async (parent) => prisma.author.findUnique({ where: { id: parent.id } }).reviews(),
      },
      Review: {
        author: async (parent) => prisma.review.findUnique({ where: { id: parent.id } }).author(),
        game: async (parent) => prisma.review.findUnique({ where: { id: parent.id } }).game(),
      },
  }