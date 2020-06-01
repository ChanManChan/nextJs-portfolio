const path = require('path');
const dev = process.env.NODE_ENV !== 'production';

//@ <- full path to my project
//! Below solution is to done to avoid nesting our paths within our files.
//! tell webpack that if it finds the '@' sign, this should reference our root folder of our project
module.exports = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
  env: {
    GRAPH_URL: dev
      ? 'http://localhost:3000/graphql'
      : 'https://nandagopal-portfolio.herokuapp.com/graphql',
  },
};
