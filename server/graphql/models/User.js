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
  signIn() {
    return 'Signing In';
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

    await c_Upload({ createReadStream });

    let newUser = new this.Model({
      email: reg_Data.email,
      username: reg_Data.username,
      password: reg_Data.password,
      avatar: resultSecure_URL,
    });

    newUser.save((err, user) => {
      if (err) throw new Error('An error occured while saving user to DB');
      user.salt = undefined;
      user.hashed_password = undefined;
      return user;
    });
  }
  signOut() {
    return 'Signing Out';
  }
}
module.exports = User;
// throw new Error('Passwords do not match');
// return this.Model.create(signUpData);
