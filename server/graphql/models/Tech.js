class Tech {
  constructor(model) {
    this.Model = model;
  }
  fetchAll() {
    return this.Model.find({});
  }
}

module.exports = Tech;
