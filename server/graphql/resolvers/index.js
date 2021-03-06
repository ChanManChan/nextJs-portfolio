//! With ApolloServer, we need to separate our Mutations from our Queries
//! ApolloServer is calling these methods differently and the parameters are like "methodName: (root, { params })" <- with "root" we can access the root mutation.
exports.mixedQueries = {
  highlight: async (_, { limit = 2 }, ctx) => {
    const projects = await ctx.models.Project.fetchRandoms(limit);
    const topics = await ctx.models.Topic.fetchRandoms(limit);
    return {
      projects,
      topics,
    };
  },
};

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

exports.particularsQueries = {
  particularsCategories: (_, _a, ctx) => {
    return ctx.models.ParticularsCategory.fetchAll();
  },
  briefsByCategory: async (_, { c_slug }, ctx) => {
    const particularsCategory = await ctx.models.ParticularsCategory.fetchBySlug(
      c_slug
    );
    if (!particularsCategory) throw new Error('Category could not be found');
    else return ctx.models.Brief.fetchAllByCategory(particularsCategory._id);
  },
};

exports.particularsMutations = {
  createBrief: async (_, { input }, ctx) => {
    input.particularsCategory = (
      await ctx.models.ParticularsCategory.fetchBySlug(
        input.particularsCategory
      )
    )._id;
    return await ctx.models.Brief.create(input);
  },
};

exports.topicQueries = {
  topics: (_, _a, ctx) => {
    return ctx.models.Topic.fetchAll();
  },
  topicBySlug: (_, { t_slug }, ctx) => {
    return ctx.models.Topic.fetchBySlug(t_slug);
  },
  postsByTopic: async (_, { t_slug, ...pagination }, ctx) => {
    const topic = await ctx.models.Topic.fetchBySlug(t_slug);
    return ctx.models.Post.fetchAllByTopic({
      topicID: topic._id,
      ...pagination,
    });
  },
};

exports.topicMutations = {
  createTopic: async (_, { input }, ctx) => {
    return await ctx.models.Topic.create(input);
  },
  createPost: async (_, { input }, ctx) => {
    return await ctx.models.Post.create(input);
  },
};
