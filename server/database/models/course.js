const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    title: String,
    slug: { type: String, unique: true, index: true },
    content: [String],
    particularsCategory: {
      type: Schema.Types.ObjectId,
      ref: 'ParticularsCategory',
    },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true, collection: 'courses' }
);

module.exports = mongoose.model('Course', courseSchema);
