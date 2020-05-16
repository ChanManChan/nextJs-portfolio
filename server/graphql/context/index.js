const passport = require('passport');

//! options = {email, password}
const authenticateUser = (req, options) => {
  //! [[ ENTRY POINT ]] <- for authentication (Refer here the name of the authentication function i registered before which is "graphql")
  //! callback function will be called after authentication is successful.
  return new Promise((resolve, reject) => {
    const authFn = passport.authenticate('graphql', options, (err, user) => {
      //! This function is executed when we call "success" function in my strategy (GraphqlStrategy > authenticate >  this.success())
      //! Here i'll get user if user is authenticated.
      if (err) return reject(new Error(err));
      if (user) {
        //! if user is received here, save session to DB. <- This will ensure persistent authentication state
        //! a function from passport called "login" is available in the "req" object because of the middleware in server > middlewares > index.js
        //? Error: Failed to serialize user into session <- because "req.login" function is depending on "serialize" middleware
        req.login(user, (err) => {
          if (err) return reject(new Error(err));
          return resolve(user);
        });
      } else {
        return reject(new Error('Invalid password or email'));
      }
      /**
       * strategy.success = function(user, info) {
          if (callback) {
            return callback(null, user, info);
          }
        * "callback" <- is this function
        * "strategy" <- is "GraphqlStrategy" class in "server > middlewares > passport > strategies.js"
       */
    });
    authFn();
  });
};

//! "req" object propagated from server > middlewares > index.js
//! "fetchUser: () => req.user" <- thanks to deserialization, when the user is sending request, passport is taking ID from the session, looks for the corresponding user in DB and if the user is found it will provide that user to the "req" object.
exports.buildAuthContext = (req) => {
  const auth = {
    authenticate: (options) => authenticateUser(req, options),
    logout: () => req.logout(),
    isAuthenticated: () => req.isAuthenticated(),
    fetchUser: () => req.user,
  };
  return auth;
};
