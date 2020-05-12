const express = require('express');
const next = require('next');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const apolloServer = require('./graphql').createApolloServer();

//! DB
require('./database').connectDB();

app.prepare().then(() => {
  //! Pass this "server" to "apolloServer.applyMiddleware(...)"
  const server = express();

  //! Apply middleware to ApolloServer
  apolloServer.applyMiddleware({ app: server });
  // server.use(
  //   '/graphql',
  //   graphqlHTTP({
  //     schema,
  //     rootValue: root,
  //     graphiql: true,
  //   })
  // );

  server.all('*', (req, res) => {
    // debugger;
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
