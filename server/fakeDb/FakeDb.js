const { portfolios, users, tech_util } = require('./data');
const Portfolio = require('../database/models/portfolio');
const User = require('../database/models/user');
const Tech = require('../database/models/tech');

class FakeDb {
  async clean() {
    await User.deleteMany({});
    await Portfolio.deleteMany({});
    await Tech.deleteMany({});
  }
  async exportData() {
    await User.create(users);
    await Portfolio.create(portfolios);
    await Tech.create(tech_util);
  }
  async populate() {
    await this.clean();
    await this.exportData();
  }
}
module.exports = new FakeDb();
