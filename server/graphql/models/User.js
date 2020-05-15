const config = require('../../config/dev');
const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: config.CLOUDINARY_CLOUD_NAME,
  upload_preset: config.CLOUDINARY_UPLOAD_PRESET,
  api_key: config.CLOUDINARY_API_KEY,
  api_secret: config.CLOUDINARY_API_SECRET,
});

class User {
  constructor(model) {
    this.Model = model;
  }
  signIn(log_Data, ctx) {
    const isAuthenticated = ctx.authenticate(log_Data);
    if (isAuthenticated) console.log('USER IS AUTHENTICATED');
    return `Signing In user data: ${log_Data.email} - ${log_Data.password}`;
  }
  async signUp(reg_Data) {
    const { createReadStream } = await reg_Data.avatar;
    let resultSecure_URL = '';
    const c_Upload = async ({ createReadStream }) => {
      try {
        await new Promise((resolve, reject) => {
          const streamLoad = cloudinary.v2.uploader.upload_stream(function (
            error,
            result
          ) {
            if (result) {
              resultSecure_URL = result.secure_url;
              resolve(resultSecure_URL);
            } else {
              reject(error);
            }
          });
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
  signOut() {
    return 'Signing Out';
  }
}
module.exports = User;
