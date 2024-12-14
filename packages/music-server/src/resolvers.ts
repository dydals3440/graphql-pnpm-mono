import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    genres: async () => prisma.genre.findMany(),
    artists: async () =>
      prisma.artist.findMany({
        include: { albums: true },
      }),
  },
  Mutation: {
    // 첫번째 파라미터는 root에 관한 부분
    // 두번째 파라미터는 typdDef에서 정의한 파라미터 [name: String!]!
    // name이라는 필드명으로 그대로 전달
    addGenre: async (_: any, { name }: { name: string }) => {
      const genre = await prisma.genre.create({
        data: {
          name,
        },
      });
      return genre;
    },
  },
};

// id -> INT로 프리즈마에 지정했지만, graphql 에서는, id에 대한 타입을 string으로 serialize해서 보내줌
