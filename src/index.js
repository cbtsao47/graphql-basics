const { GraphQLServer } = require("graphql-yoga");
// dummy data
let links = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL"
  }
];
let idCount = links.length;
const resolvers = {
  Query: {
    info: () => `This is the API of hackernews Clone`,
    feed: () => links,
    link: (parent, args) => {
      const selection = links.find(link => link.id === args.id);
      console.log(links);
      return selection;
    }
  },
  Mutation: {
    post: (parent, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url
      };
      links.push(link);
      return link;
    },
    updateLink: (parent, args) => {
      console.log("test", parent);
      const update = {
        id: args.id,
        description: args.description,
        url: args.url
      };
      links = links.map(link => {
        if (link.id === update.id) {
          return update;
        }
        return link;
      });
      return update;
    },
    deleteLink: (parent, args) => {
      links = links.filter(link => link.id !== args.id);
      return null;
    }
  }
};
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
});

server.start(() => console.log(`Server is running on port 4000`));
