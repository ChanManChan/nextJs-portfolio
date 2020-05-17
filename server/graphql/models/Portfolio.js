//! Pass Model from outside so that we can make this component reusable
class Portfolio {
  //! Receive here an actual mongoose model not a graphql model
  constructor(model) {
    //! Eg:- this.Model === Portfolio
    this.Model = model;
  }
  fetchAll() {
    return this.Model.find({}).populate('techStack', 'name description theme');
  }
  fetchById(id) {
    return this.Model.findById(id).populate(
      'techStack',
      'name description theme'
    );
  }
  create(data) {
    return this.Model.create(data);
  }
  findAndUpdate(id, data) {
    return this.Model.findOneAndUpdate({ _id: id }, data, { new: true });
  }
  findAndDelete(id) {
    return this.Model.findOneAndRemove({ _id: id });
  }
}
module.exports = Portfolio;
