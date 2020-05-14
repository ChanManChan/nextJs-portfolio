//! With ApolloServer, we need to separate our Mutations from our Queries
//! ApolloServer is calling these methods differently and the parameters are like "methodName: (root, { params })" <- with "root" we can access the root mutation.
exports.portfolioQueries = {
  portfolio: (_, { id }, ctx) => {
    return ctx.models.Portfolio.fetchById(id);
  },
  portfolios: (_, _a, ctx) => {
    return ctx.models.Portfolio.fetchAll();
  },
};
exports.portfolioMutations = {
  createPortfolio: async (_, { input }, ctx) => {
    const createdPortfolio = await ctx.models.Portfolio.create(input);
    return createdPortfolio;
  },
  updatePortfolio: async (_, { id, input }, ctx) => {
    const updatedPortfolio = await ctx.models.Portfolio.findAndUpdate(
      id,
      input
    );
    return updatedPortfolio;
  },
  deletePortfolio: async (_, { id }, ctx) => {
    const deletedPortfolio = await ctx.models.Portfolio.findAndDelete(id);
    return deletedPortfolio._id;
  },
};

//! Provide "User" model to the resolvers (go to "graphql/index.js" and "User" model to the context)
exports.authenticationMutations = {
  signIn: (_, _a, ctx) => {
    return ctx.models.User.signIn();
  },
  signUp: (_, { input }, ctx) => {
    const registeredUser = ctx.models.User.signUp(input);
    return registeredUser._id;
  },
  signOut: (_, _a, ctx) => {
    return ctx.models.User.signOut();
  },
};
