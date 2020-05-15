const passport = require('passport');

//! options = {email, password}
const authenticateUser = (options) => {
  console.log('Calling authenticateUser');
  //! [[ ENTRY POINT ]] <- for authentication (Refer here the name of the authentication function i registered before which is "graphql")
  //! callback function will be called after authentication is successful.
  const authFn = passport.authenticate('graphql', options, () => {
    //! This function is executed when we call "success" function in my strategy (GraphqlStrategy > authenticate >  this.success())
    //! Here i'll get user if user is authenticated.
    //! if user is received here, save session to DB.
    console.log('Calling done of authenticateUser');
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
  return true;
};

exports.buildAuthContext = () => {
  const auth = {
    authenticate: (options) => authenticateUser(options),
  };
  return auth;
};
