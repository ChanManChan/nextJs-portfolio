const GraphqlStrategy = require('./strategies');
const User = require('../../database/models/user');

exports.init = (passport) => {
  //! In this "passport.serializeUser" function we'll receive a user from  req.login(user, (err) => {...} "graphql > context"
  passport.serializeUser((user, done) => {
    // This will serialize this userId into a session
    // This user will be authenticated in this application for 2hrs. So every incoming request this user makes to my server will be verified with the session in my DB and will ensure   that the session is still valid.
    // After the session expires, it will be automatically removed from my DB.
    //! In GraphQL playground change the settings  "request.credentials": "omit" otherwise the application makes new session everytime a user logs in.
    //! "request.credentials": "omit" <- always providing different request credentials and its creating different session ID and thats why its always storing a new session into DB.
    //! "request.credentials": "same-origin" <- fixes it.
    done(null, user.id);
  });

  //! "Failed to deserialize user out of session" fix
  //! When the user sends a request to login, the client gets a "Set-Cookie" response back from the server <- informs the browser that the user has been logged in, therefore in the response back from the server, i'll get a cookie and this cookie will be stored in the browser.
  //! Any additional request from client to server will have this cookie attached to its Request-Headers. This way my passport middleware will inspect the request object on the server, it will check the cookie and will become aware of the portfolio-session, so it will try to deserialize the "cookie-id" and will try to get a user from it (from the session) <- reference to the actual session stored in the DB.
  //?"schema.polling.interval": 20000, <- request interval to server
  passport.deserializeUser((id, done) => {
    // from userId get the user object back
    //! userId will be used from the session stored in DB to fetch the complete data of the user and attach it to the "req" object. Now I'll have access to "req.user"
    User.findById({ _id: id }, (err, user) => {
      done(err, user);
    });
  });

  //! Before Logging out
  /**
   * BEFORE LOGOUT (is authenticated):- true
   * USER FROM REQ.USER:  {
        role: 'admin',
        _id: 5ebe8c3c964d9a104322e80b,
        avatar: 'https://res.cloudinary.com/ddsk7jazd/image/upload/v1589544899/vuqmkxnmgkpns6anrqbk.jpg',
        email: 'ngopal253@gmail.com',
        name: 'NandaGopal',
        username: 'chanChanMan',
        info: "I'm a Full Stack Developer",
        salt: '15ac0eabbe6b67cd72a7',
        hashed_password: 'c109053b05ee59f7390c49d03a4a404f0d6619fe',
        createdAt: 2020-05-15T12:34:06.274Z,
        updatedAt: 2020-05-15T12:34:06.274Z,
        __v: 0
    }
   */
  //! After Logging out
  // AFTER LOGOUT (is authenticated):- false
  // USER FROM REQ.USER:  null

  passport.use(
    'graphql',
    new GraphqlStrategy((options, done) => {
      //! This callback is the "verify" function of "GraphqlStrategy > this.verify", passing it into the constructor of GraphqlStrategy.
      //! 1. Find user in DB and if user exists verify user password.
      User.findOne({ email: options.email }, (err, user) => {
        //This "done" is the callback function in  authenticate(_, options) {... this.verify(options, ()=> {...this is the done function...} }
        //! First param of "done" is reserved for "error" and second one for "user"
        if (err) return done(err);
        if (!user) return done(null, false);
        //TODO: Check user password.
        //! 2. If user is verified call "done"
        // return done(null, user);
        user.validatePassword(options.password, (match_S, msg) => {
          if (match_S) return done(null, user);
          return done(msg, false);
        });
      });
    })
  );
};
