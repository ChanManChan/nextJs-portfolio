const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const config = require('../config/dev');
require('./models/project');
require('./models/user');
require('./models/particularsCategory');
require('./models/brief');
require('./models/tech');
require('./models/topic');
require('./models/post');

exports.connectDB = () => {
  mongoose.connect(
    config.DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
    () => {
      console.log('> CONNECTED TO DB');
    }
  );
};

exports.initSessionStore = () => {
  const store = new MongoDBStore({
    uri: config.DB_URI,
    collection: 'portfolioSessions',
  });
  return store;
};
