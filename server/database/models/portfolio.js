const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 128,
    },
    techStack: [{ type: Schema.Types.ObjectId, ref: 'Tech' }],
    repoAPI: {
      type: String,
      required: true,
    },
    repoClient: {
      type: String,
      required: true,
    },
    deployed: String,
    theme: String,
    description: {
      type: String,
      required: true,
      minlength: 10,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true, collection: 'portfolios' }
);

module.exports = mongoose.model('Portfolio', portfolioSchema);
