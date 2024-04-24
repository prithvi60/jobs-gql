const { ApolloServer } = require("apollo-server");

const port = process.env.PORT || 8000;

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({ port }, () => {
  console.log(`server ready to connect at http://localhost:${port}`);
});
