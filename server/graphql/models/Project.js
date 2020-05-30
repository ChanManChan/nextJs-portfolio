const BaseModel = require('./BaseModel');
const promisesAll = require('promises-all');

//! Pass Model from outside so that we can make this component reusable
class Project extends BaseModel {
  //! Receive here an actual mongoose model not a graphql model
  constructor(model, user) {
    //! Eg:- this.Model === Project
    super(model, user);
    this.write_rights = ['admin', 'instructor'];
  }
  async fetchRandoms(asked) {
    const query = await super.fetchRandoms(asked);
    return query().populate('techStack');
  }
  fetchAll() {
    return this.Model.find({}).populate(
      'techStack',
      '_id name description theme'
    );
  }
  fetchAllByUser() {
    return this.Model.find({ user: this.user._id })
      .populate('techStack', '_id name description theme')
      .sort({ createdAt: 'desc' });
  }
  fetchById(id) {
    return this.Model.findById(id).populate(
      'techStack',
      'name description theme'
    );
  }
  async create(port_data) {
    if (!this.user || !this.write_rights.includes(this.user.role))
      throw new Error('Not Authorized');
    else {
      port_data.user = this.user;
      const { resolve, reject } = await promisesAll.all(
        port_data.screenshots.map(
          require('../../middlewares/cloudinary').upload_cloudinary
        )
      );
      if (reject.length)
        reject.forEach(({ name, message }) => {
          console.log(`${name}: ${message}`);
        });
      return await this.Model.create({ ...port_data, screenshots: resolve });
    }
  }

  async findAndUpdate(id, udt_data) {
    if (!this.user || !this.write_rights.includes(this.user.role))
      throw new Error('Not Authorized');
    else {
      require('../../middlewares/cloudinary').destroy_cloud(
        this.Model,
        id,
        true
      );
      udt_data.user = this.user;
      const { resolve, reject } = await promisesAll.all(
        udt_data.screenshots.map(
          require('../../middlewares/cloudinary').upload_cloudinary
        )
      );
      if (reject.length)
        reject.forEach(({ name, message }) => {
          console.log(`${name}: ${message}`);
        });
      return this.Model.findOneAndUpdate(
        { _id: id },
        { ...udt_data, screenshots: resolve },
        { new: true, runValidators: true }
      );
    }
  }
  findAndDelete(id) {
    if (!this.user || !this.write_rights.includes(this.user.role))
      throw new Error('Not Authorized');
    else {
      require('../../middlewares/cloudinary').destroy_cloud(
        this.Model,
        id,
        true
      );
      return this.Model.findOneAndRemove({ _id: id });
    }
  }
}
module.exports = Project;
