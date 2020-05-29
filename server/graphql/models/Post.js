const uniqueSlug = require('unique-slug');
const moment = require('moment');

class Post {
  constructor(model, user) {
    this.Model = model;
    this.user = user;
  }
  async fetchAllByTopic({ topicID, pageNum = 1, pageSize = 5 }) {
    const skips = pageSize * (pageNum - 1);
    const count = await this.Model.countDocuments({ topic: topicID });
    const posts = await this.Model.find({ topic: topicID })
      .sort('createdAt')
      .skip(skips)
      .limit(pageSize)
      .populate('user')
      .populate('topic')
      .populate({ path: 'parent', populate: 'user' });

    return { posts, count };
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
