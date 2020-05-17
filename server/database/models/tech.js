const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const techSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      maxlength: 64,
    },
    description: {
      type: String,
      required: true,
    },
    theme: String,
  },
  { timestamps: true, collection: 'tech' }
);

module.exports = mongoose.model('Tech', techSchema);
