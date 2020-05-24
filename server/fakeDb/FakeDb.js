const {
  projects,
  users,
  tech_util,
  particularsCategories,
  courses,
} = require('./data');
const Project = require('../database/models/project');
const User = require('../database/models/user');
const Tech = require('../database/models/tech');
const ParticularsCategory = require('../database/models/particularsCategory');
const Course = require('../database/models/course');

class FakeDb {
  async clean() {
    await User.deleteMany({});
    await Project.deleteMany({});
    await Tech.deleteMany({});
    await ParticularsCategory.deleteMany({});
    await Course.deleteMany({});
  }
  async exportData() {
    await User.create(users);
    await Project.create(projects);
    await Tech.create(tech_util);
    await ParticularsCategory.create(particularsCategories);
    await Course.create(courses);
  }
  async populate() {
    await this.clean();
    await this.exportData();
  }
}
module.exports = new FakeDb();
