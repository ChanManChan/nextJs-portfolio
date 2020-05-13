const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');

//!  each email is unique, so we need to provide index in combination with unique in order to compare emails of other users.
const userSchema = new Schema(
  {
    avatar: {
      type: Buffer,
      contentType: String,
    },
    email: {
      type: String,
      required: 'Email is required',
      lowercase: true,
      index: true,
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
    },
    name: {
      type: String,
      minlength: [6, 'Minimum name length is six characters'],
    },
    username: {
      type: String,
      required: true,
      minlength: [6, 'Minimum username length is six characters'],
    },
    hashed_password: {
      type: String,
      required: true,
    },
    salt: String,
    role: {
      enum: ['admin', 'guest'],
      type: String,
      required: true,
      default: 'guest',
    },
    info: String,
  },
  { timestamps: true }
);

userSchema
  .virtual('password')
  .set(function (password) {
    this._password = password;
    this.salt = crypto.randomBytes(10).toString('hex');
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },
  encryptPassword: function (password) {
    if (!password) return '';
    try {
      return crypto
        .createHmac('sha1', this.salt)
        .update(password)
        .digest('hex');
    } catch (err) {
      return '';
    }
  },
};

//! [OR] <- for hashing passwords
// userSchema.pre('save', function (next) {
//   const user = this;
//   bcrypt.genSalt(10, function (err, salt) {
//     if (err) return next(err);
//     bcrypt.hash(user.password, salt, function (err, hash) {
//       if (err) return next(err);
//       user.password = hash;
//       next();
//     });
//   });
// });

module.exports = mongoose.model('User', userSchema);
