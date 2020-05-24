const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const particularsCategorySchema = new Schema(
  {
    title: String,
    subTitle: String,
    slug: { type: String, unique: true, index: true },
  },
  { timestamps: true, collection: 'particulars_categories' }
);

module.exports = mongoose.model(
  'ParticularsCategory',
  particularsCategorySchema
);
