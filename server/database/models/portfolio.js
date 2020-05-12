const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxlength: 128,
  },
  techStack: {
    type: String,
    required: true,
    maxlength: 128,
  },
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
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
