//! With ApolloServer, we need to separate our Mutations from our Queries
//! ApolloServer is calling these methods differently and the parameters are like "methodName: (root, { params })" <- with "root" we can access the root mutation.
exports.projectQueries = {
  projects: (_, _a, ctx) => {
    return ctx.models.Project.fetchAll();
  },
  project: (_, { id }, ctx) => {
    return ctx.models.Project.fetchById(id);
  },
  userProjects: (_, _a, ctx) => {
    return ctx.models.Project.fetchAllByUser();
  },
};

exports.projectMutations = {
  createProject: async (_, { input }, ctx) => {
    return await ctx.models.Project.create(input);
  },
  updateProject: async (_, { id, input }, ctx) => {
    return await ctx.models.Project.findAndUpdate(id, input);
  },
  deleteProject: async (_, { id }, ctx) => {
    const deletedProject = await ctx.models.Project.findAndDelete(id);
    return deletedProject._id;
  },
};

exports.techQueries = {
  techStack: (_, _a, ctx) => {
    return ctx.models.Tech.fetchAll();
  },
};

//! Provide "User" model to the resolvers (go to "graphql/index.js" and "User" model to the context)

exports.authenticationQueries = {
  user: (_, _a, ctx) => {
    return ctx.models.User.fetchAuthUser(ctx);
  },
};

exports.authenticationMutations = {
  signIn: (_, { input }, ctx) => {
    return ctx.models.User.signIn(input, ctx);
  },
  signUp: async (_, { input }, ctx) => {
    const r_User = await ctx.models.User.signUp(input);
    return r_User._id;
  },
  signOut: (_, _a, ctx) => {
    return ctx.models.User.signOut(ctx);
  },
};
