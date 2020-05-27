const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    content: { type: String, required: true },
    slug: { type: String, unique: true, index: true },
    fullSlug: { type: String, unique: true, index: true },
    topic: { type: Schema.Types.ObjectId, ref: 'Topic' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    parent: { type: Schema.Types.ObjectId, ref: 'Post' },
  },
  { timestamps: true, collection: 'posts' }
);

module.exports = mongoose.model('Post', postSchema);
