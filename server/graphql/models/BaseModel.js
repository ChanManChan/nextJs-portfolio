class BaseModel {
  constructor(model, user = null) {
    this.Model = model;
    this.user = user;
  }
  async fetchRandoms(asked) {
    const count = await this.Model.countDocuments();
    let randomIndex;
    if (asked > count) randomIndex = 0;
    else randomIndex = count - asked;
    const random = Math.round(Math.random() * randomIndex);
    return () => this.Model.find({}).skip(random).limit(asked);
  }
}

module.exports = BaseModel;
