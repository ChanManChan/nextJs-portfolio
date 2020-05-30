const BaseModel = require('./BaseModel');
const slugify = require('slugify');
const uniqueSlug = require('unique-slug');

class Brief extends BaseModel {
  fetchAllByCategory(c_ID) {
    return this.Model.find({ particularsCategory: c_ID })
      .populate('user')
      .populate('particularsCategory');
  }
  async _create(data) {
    return this.Model.findById((await this.Model.create(data))._id)
      .populate('user')
      .populate('particularsCategory');
  }
  async create(t_data) {
    if (!this.user) throw new Error('Not Authorized');
    else {
      t_data.user = this.user;
      t_data.certificate_img = await require('../../middlewares/cloudinary').upload_cloudinary(
        t_data.certificate_img
      );
      t_data.content = t_data.content.split(', ');
      t_data.slug = slugify(t_data.title, {
        replacement: '-',
        remove: undefined,
        lower: true,
        strict: false,
      });
      try {
        return await this._create(t_data);
      } catch (e) {
        if (e.code === 11000 && e.keyPattern && e.keyPattern.slug) {
          t_data.slug += `-${uniqueSlug()}`;
          return await this._create(t_data);
        }
        throw e;
      }
    }
  }
}

module.exports = Brief;
