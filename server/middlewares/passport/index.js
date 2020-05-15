const GraphqlStrategy = require('./strategies');

exports.init = (passport) => {
  passport.use(
    'graphql',
    new GraphqlStrategy((options, done) => {
      //! This callback is the "verify" function of "GraphqlStrategy > this.verify", passing it into the constructor of GraphqlStrategy.
      console.log('Calling verify function of strategy');
      //! 1. Find user in DB and if user exists verify user password
      //! 2. If user is verified call "done"
      if (true) {
        //! First param of done is reserved for "error" and second one for "user"
        //This "done" is the callback function in  authenticate(_, options) {... this.verify(options, ()=> {...this is the done function...} }
        done();
      }
    })
  );
};
