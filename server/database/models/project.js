const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema(
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
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    screenshots: {
      type: [Schema.Types.Mixed],
      maxlength: 5,
      required: true,
    },
  },
  { timestamps: true, collection: 'projects' }
);

module.exports = mongoose.model('Project', projectSchema);
