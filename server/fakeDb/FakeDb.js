const { portfolios, users } = require('./data');
const Portfolio = require('../database/models/portfolio');
const User = require('../database/models/user');

class FakeDb {
  async clean() {
    await User.deleteMany({});
    await Portfolio.deleteMany({});
  }
  async exportData() {
    await User.create(users);
    await Portfolio.create(portfolios);
  }
  async populate() {
    await this.clean();
    await this.exportData();
  }
}
module.exports = new FakeDb();
