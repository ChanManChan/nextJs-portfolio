const BaseModel = require('./BaseModel');

class Tech extends BaseModel {
  fetchAll() {
    return this.Model.find({});
  }
}

module.exports = Tech;
