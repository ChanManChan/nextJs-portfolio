const mongoose = require('mongoose');

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();

//! INITIAL DATA IN DB
const data = {
  users: [
    {
      _id: user1Id,
      avatar:
        'https://res.cloudinary.com/ddsk7jazd/image/upload/v1589544899/vuqmkxnmgkpns6anrqbk.jpg',
      email: 'ngopal253@gmail.com',
      name: 'NandaGopal',
      username: 'chanChanMan',
      info: "I'm a Full Stack Developer",
      role: 'admin',
      password: 'Ac4$blackflag',
    },
    {
      _id: user2Id,
      avatar:
        'https://res.cloudinary.com/ddsk7jazd/image/upload/v1589544023/wwlclgefp5j3xb4ogg6a.jpg',
      email: 'nandagopalgllallu@gmail.com',
      name: 'Nandu_Dev',
      username: 'uberChan',
      info: "I'm and Computer science engineer",
      password: 'Ac4$blackflag',
    },
  ],
  portfolios: [
    {
      title: 'E-commerce',
      techStack: 'MERN, Braintree, SendGrid',
      repoAPI: 'https://github.com/ChanManChan/E-commerce-API',
      repoClient: 'https://github.com/ChanManChan/E-commerce-Client',
      deployed: 'https://xyz.com',
      theme: '#DA4D1D',
      description:
        'Online book store made using ReactJS, Braintree payment system & MATERIAL-UI',
      user: user1Id,
    },
    {
      title: 'Social Network',
      techStack: 'MERN',
      repoAPI: 'https://github.com/ChanManChan/API-Social',
      repoClient: 'https://github.com/ChanManChan/Client-Social',
      deployed: 'https://xyz.com',
      theme: '#2b26c3',
      description:
        'Platform where users can follow, like, comment & share files',
      user: user1Id,
    },
    {
      title: 'Authentication-Boilerplate',
      techStack: 'MERN, Google oAUth, SendGrid',
      repoAPI:
        'https://github.com/ChanManChan/authentication-MERN-boilerplate-/tree/master/server',
      repoClient:
        'https://github.com/ChanManChan/authentication-MERN-boilerplate-/tree/master/client',
      deployed: 'https://xyz.com',
      theme: '#00897b',
      description:
        'Basic authentication boilerplate with facebook and google login with forgot and reset password functionality',
      user: user1Id,
    },
  ],
};

module.exports = data;
