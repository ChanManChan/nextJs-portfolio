class ParticularsCategory {
  constructor(model) {
    this.Model = model;
  }
  fetchAll() {
    return this.Model.find({});
  }
  fetchBySlug(c_slug) {
    return this.Model.findOne({ slug: c_slug }).populate('user');
  }
}

module.exports = ParticularsCategory;
