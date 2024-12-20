import { ApolloServer } from '@apollo/server';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import express from 'express';
import http from 'http';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import cors from 'cors';
import { expressMiddleware } from '@apollo/server/express4';
import audioRouter from './router/audioRouter';

async function startServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  app.use('/audio', audioRouter);

  await server.start();
  app.use(
    cors({
      origin: 'http://localhost:5173',
    }),
    express.json(),
    expressMiddleware(server)
  );

  httpServer.listen(4000, () => {
    console.log(`Server is running on http://localhost:4000`);
  });
}

startServer();
