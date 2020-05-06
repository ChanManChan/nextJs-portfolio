const path = require('path');

//@ <- full path to my project
//! Below solution is to done to avoid nesting our paths within our files.
//! tell webpack that if it finds the '@' sign, this should reference our root folder of our project
module.exports = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};
