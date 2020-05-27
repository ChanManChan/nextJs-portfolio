const uniqueSlug = require('unique-slug');

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
}

module.exports = Post;
