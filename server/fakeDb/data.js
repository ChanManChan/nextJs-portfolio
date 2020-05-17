const mongoose = require('mongoose');

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();

const tech1Id = mongoose.Types.ObjectId();
const tech2Id = mongoose.Types.ObjectId();
const tech3Id = mongoose.Types.ObjectId();
const tech4Id = mongoose.Types.ObjectId();

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
      techStack: [tech1Id, tech2Id, tech3Id],
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
      techStack: [tech1Id],
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
      techStack: [tech1Id, tech3Id, tech4Id],
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
  tech_util: [
    {
      _id: tech1Id,
      name: 'MERN',
      description: 'Tech Stack',
      theme: '#DC514E',
    },
    {
      _id: tech2Id,
      name: 'Braintree',
      description: 'Web payment system',
      theme: '#2ecc71',
    },
    {
      _id: tech3Id,
      name: 'SendGrid',
      description: 'Email API',
      theme: '#f1c40f',
    },
    {
      _id: tech4Id,
      name: 'Google oAUth',
      description: 'Authentication and Authorization',
      theme: '#3498db',
    },
  ],
};

module.exports = data;
