function newLinkSubscribe(root, args, context, info) {
  return context.prisma.$subscribe.link({ mutation_in: ["CREATED"] }).node();
}
function newVoteSubscribe(root, args, context, info) {
  return context.prisma.$subscribe.vote({ mutation_in: ["CREATED"] }).node();
}
const newVote = {
  subscribe: newVoteSubscribe,
  resolve: payload => payload
};
const newLink = {
  subscribe: newLinkSubscribe,
  resolve: payload => {
    return payload;
  }
};
module.exports = { newLink, newVote };
