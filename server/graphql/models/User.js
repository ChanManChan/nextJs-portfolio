const BaseModel = require('./BaseModel');

class User extends BaseModel {
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
    try {
      const mutated_Data = {
        email: reg_Data.email,
        username: reg_Data.username,
        password: reg_Data.password,
        avatar: await require('../../middlewares/cloudinary').upload_cloudinary(
          reg_Data.avatar
        ),
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
