const promisesAll = require('promises-all');

//! Pass Model from outside so that we can make this component reusable
class Portfolio {
  //! Receive here an actual mongoose model not a graphql model
  constructor(model) {
    //! Eg:- this.Model === Portfolio
    this.Model = model;
  }
  fetchAll() {
    return this.Model.find({}).populate('techStack', 'name description theme');
  }
  fetchById(id) {
    return this.Model.findById(id).populate(
      'techStack',
      'name description theme'
    );
  }
  async create(port_data) {
    const processUpload = async (file) => {
      const { createReadStream } = await file;
      let resultSecure_URL = '';
      const cloudinaryUpload = async ({ createReadStream }) => {
        try {
          await new Promise((res, rej) => {
            const streamLoad = require('../../middlewares').cloudinary.v2.uploader.upload_stream(
              function (err, result) {
                if (result) {
                  resultSecure_URL = result.secure_url;
                  res(resultSecure_URL);
                } else {
                  rej(err);
                }
              }
            );
            createReadStream().pipe(streamLoad);
          });
        } catch (err) {
          throw new Error(
            `Failed to upload profile picture ! Err:${err.message}`
          );
        }
      };
      await cloudinaryUpload({ createReadStream });
      return resultSecure_URL;
    };
    const { resolve, reject } = await promisesAll.all(
      port_data.screenshots.map(processUpload)
    );
    if (reject.length)
      reject.forEach(({ name, message }) => {
        console.log(`${name}: ${message}`);
      });
    return await this.Model.create({ ...port_data, screenshots: resolve });
  }
  findAndUpdate(id, data) {
    return this.Model.findOneAndUpdate({ _id: id }, data, { new: true });
  }
  findAndDelete(id) {
    return this.Model.findOneAndRemove({ _id: id });
  }
}
module.exports = Portfolio;
