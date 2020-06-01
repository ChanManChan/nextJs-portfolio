//! CONNECT TO DB AND EXECUTE SOME FUNCTIONS WHILE WE ARE CONNECTED TO DB

const mongoose = require('mongoose');
const config = require('../config');
const fakeDb = require('./FakeDb');

mongoose.connect(
  config.DB_URI,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  async () => {
    console.log('> STARTED POPULATING DB...');
    await fakeDb.populate();
    await mongoose.connection.close();
    console.log('> DB HAS BEEN POPULATED');
  }
);
