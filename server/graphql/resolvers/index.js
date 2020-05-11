const crypto = require('crypto');

const data = {
  portfolios: [
    {
      _id: crypto.randomBytes(10).toString('hex'),
      title: 'E-commerce',
      techStack: 'MERN, Braintree, SendGrid',
      repoAPI: 'https://github.com/ChanManChan/E-commerce-API',
      repoClient: 'https://github.com/ChanManChan/E-commerce-Client',
      deployed: 'https://xyz.com',
      theme: '#DA4D1D',
      description:
        'Online book store made using ReactJS, Braintree payment system & MATERIAL-UI',
    },
    {
      _id: crypto.randomBytes(10).toString('hex'),
      title: 'Social Network',
      techStack: 'MERN',
      repoAPI: 'https://github.com/ChanManChan/API-Social',
      repoClient: 'https://github.com/ChanManChan/Client-Social',
      deployed: 'https://xyz.com',
      theme: '#2b26c3',
      description:
        'Platform where users can follow, like, comment & share files',
    },
    {
      _id: crypto.randomBytes(10).toString('hex'),
      title: 'Authentication-Boilerplate',
      techStack: 'MERN, Google oAUth, SendGrid',
      repoAPI:
        'https://github.com/ChanManChan/authentication-MERN-boilerplate-/tree/master/server',
      repoClient:
        'https://github.com/ChanManChan/authentication-MERN-boilerplate-/tree/master/client',
      deployed: 'https://xyz.com',
      theme: '#00897b',
      description:
        'Basic authentication boilerplate with facebook and google login with forgot and reset password functionality',
    },
  ],
};
//! With ApolloServer, we need to separate our Mutations from our Queries
//! ApolloServer is calling these methods differently and the parameters are like "methodName: (root, { params })" <- with "root" we can access the root mutation.
exports.portfolioQueries = {
  portfolio: (root, { id }) => {
    return data.portfolios.find((p) => p._id === id);
  },
  portfolios: () => {
    return data.portfolios;
  },
};
exports.portfolioMutations = {
  createPortfolio: (root, { input }) => {
    const newPortfolio = { ...input };
    newPortfolio._id = crypto.randomBytes(10).toString('hex');
    data.portfolios.push(newPortfolio);
    return newPortfolio;
  },
  updatePortfolio: (root, { id, input }) => {
    const i = data.portfolios.findIndex((p) => p._id === id);
    const updatedPortfolio = { ...data.portfolios[i], ...input };
    data.portfolios[i] = updatedPortfolio;
    return updatedPortfolio;
  },
  deletePortfolio: (root, { id }) => {
    const i = data.portfolios.findIndex((p) => p._id === id);
    data.portfolios.splice(i, 1);
    return id;
  },
};
