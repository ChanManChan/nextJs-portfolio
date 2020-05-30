const BaseModel = require('./BaseModel');
const slugify = require('slugify');
const uniqueSlug = require('unique-slug');

class Topic extends BaseModel {
  async fetchRandoms(asked) {
    const query = await super.fetchRandoms(asked);
    return query().populate('user');
  }
  fetchAll() {
    return this.Model.find({}).populate('user');
  }
  fetchBySlug(slug) {
    return this.Model.findOne({ slug }).populate('user');
  }
  async _create(data) {
    return this.Model.findById((await this.Model.create(data))._id).populate(
      'user'
    );
  }
  async create(t_data) {
    if (!this.user) throw new Error('Not Authorized');
    else {
      t_data.user = this.user;
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

module.exports = Topic;
