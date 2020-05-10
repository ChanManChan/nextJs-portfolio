const express = require('express');
const next = require('next');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const { v4: uuidv4 } = require('uuid');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const data = {
  portfolios: [
    {
      _id: uuidv4(),
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
      _id: uuidv4(),
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
      _id: uuidv4(),
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

app.prepare().then(() => {
  const server = express();

  //! Construct a schema using GRAPHQL schema language
  const schema = buildSchema(`
    type Portfolio {
      _id: ID,
      title: String,
      techStack: String,
      repoAPI: String,
      repoClient: String,
      deployed: String,
      theme: String,
      description: String,
      }
      type Query {
        hello: String
        portfolio(id: ID): Portfolio
        portfolios: [Portfolio]
      }
    `);

  //! The root provides a resolver for each API endpoint
  const root = {
    hello: () => {
      return 'Testing GraphQl for the first time';
    },
    portfolio: ({ id }) => {
      return data.portfolios.find((p) => p._id === id);
    },
    portfolios: () => {
      return data.portfolios;
    },
  };
  server.use(
    '/graphql',
    graphqlHTTP({
      schema,
      rootValue: root,
      graphiql: true,
    })
  );
  server.all('*', (req, res) => {
    // debugger;
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
