const { GraphQLServer } = require("graphql-yoga");
// dummy data
let links = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL"
  }
];
const typeDefs = `
type Query {
    info: String!
    feed:[Link!]!
}

type Link{
    id: ID!
    description: String!
    url: String!
}

`;

const resolvers = {
  Query: {
    info: () => `This is the API of hackernews Clone`,
    users: () => ``
  }
};
const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => console.log(`Server is running on port 4000`));
