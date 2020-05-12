class User {
  constructor(model) {
    this.Model = model;
  }
  signIn() {
    return 'Signing In';
  }
  signUp(signUpData) {
    if (signUpData.password !== signUpData.passwordConfirmation)
      throw new Error('Passwords do not match');
    return this.Model.create(signUpData);
  }
  signOut() {
    return 'Signing Out';
  }
}
module.exports = User;
