const config = require('../config/dev');
const session = require('express-session');
const passport = require('passport');

exports.init = (server, db) => {
  require('./passport').init(passport);

  //! Sessions of users that logs in to my application
  const sess = {
    name: 'portfolio-session',
    secret: config.SESSION_SECRET,
    cookie: { maxAge: 2 * 60 * 60 * 1000 },
    resave: false,
    saveUninitialized: false,
    store: db.initSessionStore(),
  };
  server.use(session(sess));
};
