class User {
  constructor(model) {
    this.Model = model;
  }
  fetchAuthUser(ctx) {
    if (ctx.isAuthenticated()) return ctx.fetchUser();
    else return null;
  }

  async signIn(log_Data, ctx) {
    try {
      const user = await ctx.authenticate(log_Data);
      return user;
    } catch (err) {
      return err;
    }
  }

  async signUp(reg_Data) {
    const { createReadStream } = await reg_Data.avatar;
    let resultSecure_URL = '';
    const c_Upload = async ({ createReadStream }) => {
      try {
        await new Promise((resolve, reject) => {
          const streamLoad = require('../../middlewares').cloudinary.v2.uploader.upload_stream(
            function (error, result) {
              if (result) {
                resultSecure_URL = result.secure_url;
                resolve(resultSecure_URL);
              } else {
                reject(error);
              }
            }
          );
          createReadStream().pipe(streamLoad);
        });
      } catch (err) {
        throw new Error(
          `Failed to upload profile picture, Err: ${err.message}`
        );
      }
    };
    try {
      await c_Upload({ createReadStream });
      const mutated_Data = {
        email: reg_Data.email,
        username: reg_Data.username,
        password: reg_Data.password,
        avatar: resultSecure_URL,
      };
      return await this.Model.create(mutated_Data);
    } catch (e) {
      if (e.code && e.code === 11000)
        throw new Error('User with provided email already exists.');
      throw e;
    }
  }

  signOut(ctx) {
    try {
      // console.log('BEFORE LOGOUT (is authenticated):- ', ctx.isAuthenticated());
      // console.log('USER FROM REQ.USER: ', ctx.fetchUser());
      ctx.logout();
      // console.log('AFTER LOGOUT (is authenticated):- ', ctx.isAuthenticated());
      // console.log('USER FROM REQ.USER: ', ctx.fetchUser());
      return true;
    } catch (e) {
      return false;
    }
  }
}
module.exports = User;
