const {
  projects,
  users,
  tech_util,
  particularsCategories,
  briefs,
  topics,
  posts,
} = require('./data');
const Project = require('../database/models/project');
const User = require('../database/models/user');
const Tech = require('../database/models/tech');
const ParticularsCategory = require('../database/models/particularsCategory');
const Brief = require('../database/models/brief');
const Topic = require('../database/models/topic');
const Post = require('../database/models/post');

class FakeDb {
  async clean() {
    await User.deleteMany({});
    await Project.deleteMany({});
    await Tech.deleteMany({});
    await ParticularsCategory.deleteMany({});
    await Brief.deleteMany({});
    await Topic.deleteMany({});
    await Post.deleteMany({});
  }
  async exportData() {
    await User.create(users);
    await Project.create(projects);
    await Tech.create(tech_util);
    await ParticularsCategory.create(particularsCategories);
    await Brief.create(briefs);
    await Topic.create(topics);
    await Post.create(posts);
  }
  async populate() {
    await this.clean();
    await this.exportData();
  }
}
module.exports = new FakeDb();
