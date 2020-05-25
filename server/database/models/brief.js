const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const briefSchema = new Schema(
  {
    title: String,
    slug: { type: String, unique: true, index: true },
    content: [String],
    particularsCategory: {
      type: Schema.Types.ObjectId,
      ref: 'ParticularsCategory',
    },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    certificate_img: String,
  },
  { timestamps: true, collection: 'briefs' }
);

module.exports = mongoose.model('Brief', briefSchema);
