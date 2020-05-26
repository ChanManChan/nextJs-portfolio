const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const topicSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    slug: { type: String, unique: true, index: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true, collection: 'topics' }
);

module.exports = mongoose.model('Topic', topicSchema);
