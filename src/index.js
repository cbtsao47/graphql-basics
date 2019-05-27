const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");
// resolvers
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const User = require("./resolvers/User");
const Link = require("./resolvers/Link");
const resolvers = {
  Query,
  Mutation,
  User,
  Link
  // Query: {
  //   info: () => `This is the API of hackernews Clone`,
  //   feed: (root, args, context, info) => {
  //     console.log(context);
  //     return context.prisma.links();
  //   }
  // },
  // Mutation: {
  //   post: (root, { url, description }, context, info) => {
  //     return context.prisma.createLink({
  //       url: url,
  //       description: description
  //     });
  //   },
  //   updateLink: (root, { id, url, description }, context, info) => {
  //     return context.prisma.updateLink({
  //       where: { id: id },
  //       data: {
  //         url: url,
  //         description: description
  //       }
  //     });
  //   },
  //   deleteLink: (root, { id }, context, info) => {
  //     return context.prisma.deleteLink({ id });
  //   }
  // }
};
async function main() {
  const newLink = await prisma.createLink({
    url: "www.prisma.io",
    description: "Prisma replaces traditional ORMs"
  });
  const allLinks = await prisma.links();
  console.log(allLinks);
}
main().catch(e => console.error(e));
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: request => {
    return {
      ...request,
      prisma
    };
  }
});

server.start(() => console.log(`Server is running on port 4000`));
