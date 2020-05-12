const { portfolios } = require('./data');
const Portfolio = require('../database/models/portfolio');

class FakeDb {
  async clean() {
    await Portfolio.deleteMany({});
  }
  async exportData() {
    await Portfolio.create(portfolios);
  }
  async populate() {
    await this.clean();
    await this.exportData();
  }
}
module.exports = new FakeDb();
