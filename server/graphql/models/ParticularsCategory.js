const BaseModel = require('./BaseModel');

class ParticularsCategory extends BaseModel {
  fetchAll() {
    return this.Model.find({});
  }
  fetchBySlug(c_slug) {
    return this.Model.findOne({ slug: c_slug }).populate('user');
  }
}

module.exports = ParticularsCategory;
