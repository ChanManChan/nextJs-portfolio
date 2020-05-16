const { Strategy } = require('passport-strategy');

//! Strategy get options (email, password) needed to authenticate user
//! Strategy has to have authenticate function
//! Strategy gets a callback function that will contain functionality to verify an user
//! Strategy has access to "error" "fail" and "success" functions

class GraphqlStrategy extends Strategy {
  constructor(verify) {
    super();
    if (!verify) throw new Error('Graphql strategy requires a verify callback');
    this.verify = verify;
    this.name = 'graphql';
  }
  /**
   *   Authenticate `user`, with optional `info`.
   * strategy.success = function(user, info) {...}
   * Strategies should call this function to successfully authenticate a
   * user.  `user` should be an object supplied by the application after it
   * has been given an opportunity to verify credentials.  `info` is an
   * optional argument containing additional user information.  This is
   * useful for third-party authentication strategies to pass profile
   * details.
   */
  //! strategy.authenticate(req, options);
  authenticate(_, options) {
    this.verify(options, (err, user, info) => {
      //? in this callback ("done" function) we will receive "error", "user", "info" from "server/middlewares/passport/index.js" init() function.
      //! if "user" call "success" otherwise call "fail" or "error"
      if (err) return this.error(err);
      if (!user) return this.fail(401);
      return this.success(user, info);
    });
  }
}

module.exports = GraphqlStrategy;
