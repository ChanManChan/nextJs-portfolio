const uniqueSlug = require('unique-slug');
const moment = require('moment');

class Post {
  constructor(model, user) {
    this.Model = model;
    this.user = user;
  }
  fetchAllByTopic(t_ID) {
    return this.Model.find({ topic: t_ID })
      .sort('createdAt')
      .populate('user')
      .populate('topic')
      .populate({ path: 'parent', populate: 'user' });
  }
  async create(p_data) {
    if (!this.user) throw new Error('Not Authorized');
    else {
      p_data.user = this.user;
      const createdAt = moment().toISOString();
      const slugPart = uniqueSlug();
      const fullSlugPart = createdAt + ':' + slugPart;
      if (p_data.parent) {
        const parent = await this.Model.findById(p_data.parent);
        p_data.slug = parent.slug + '/' + slugPart;
        p_data.fullSlug = parent.fullSlug + '/' + fullSlugPart;
      } else {
        p_data.slug = slugPart;
        p_data.fullSlug = fullSlugPart;
      }
      return this.Model.findById((await this.Model.create(p_data))._id)
        .populate('topic')
        .populate('user')
        .populate({ path: 'parent', populate: 'user' });
    }
  }
}

module.exports = Post;
