const mongoose = require('mongoose');
const moment = require('moment');

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();

const tech1Id = mongoose.Types.ObjectId();
const tech2Id = mongoose.Types.ObjectId();
const tech3Id = mongoose.Types.ObjectId();
const tech4Id = mongoose.Types.ObjectId();
const tech5Id = mongoose.Types.ObjectId();
const tech6Id = mongoose.Types.ObjectId();
const tech7Id = mongoose.Types.ObjectId();
const tech8Id = mongoose.Types.ObjectId();

const detail1Id = mongoose.Types.ObjectId();
const detail2Id = mongoose.Types.ObjectId();
const detail3Id = mongoose.Types.ObjectId();

const topic1Id = mongoose.Types.ObjectId();
const topic1CreatedAt = moment().subtract(8, 'days');

const topic2Id = mongoose.Types.ObjectId();
const topic2CreatedAt = moment().subtract(8, 'days');

const topic3Id = mongoose.Types.ObjectId();
const topic3CreatedAt = moment().subtract(8, 'days');

const post1Id = mongoose.Types.ObjectId();
const post1CreatedAt = moment().subtract(7, 'days');

const post2Id = mongoose.Types.ObjectId();
const post2CreatedAt = moment(post1CreatedAt).add(1, 'days');

const post3Id = mongoose.Types.ObjectId();
const post3CreatedAt = moment(post2CreatedAt).add(1, 'days');

const post4Id = mongoose.Types.ObjectId();
const post4CreatedAt = moment(post3CreatedAt).add(1, 'days');

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
  projects: [
    {
      title: 'E-commerce',
      techStack: [tech1Id, tech2Id, tech3Id, tech4Id],
      repoAPI: 'https://github.com/ChanManChan/E-commerce-API',
      repoClient: 'https://github.com/ChanManChan/E-commerce-Client',
      deployed: 'https://google.com',
      description:
        'Online book store made using ReactJS, Braintree payment system & MATERIAL-UI',
      theme: '#DA4D1D',
      screenshots: [
        {
          screenshot:
            'https://res.cloudinary.com/ddsk7jazd/image/upload/v1591263948/admin_manage.jpg4d9fa6af81.jpg',
          caption: 'Role based access',
          description: 'Admin Product management',
        },
        {
          screenshot:
            'https://res.cloudinary.com/ddsk7jazd/image/upload/v1591263948/Client-package_json.jpgb56df63968.jpg',
          caption: 'Client package.json',
          description: 'Packages used on client',
        },
        {
          screenshot:
            'https://res.cloudinary.com/ddsk7jazd/image/upload/v1591263949/API-package_json.png3b4be26726.png',
          caption: 'Server package.json',
          description: 'Packages used on server',
        },
        {
          screenshot:
            'https://res.cloudinary.com/ddsk7jazd/image/upload/v1591263949/home.jpg85a1208946.jpg',
          caption: 'Home page',
          description:
            'Search wide variety of books based on category and price range',
        },
      ],
      user: user1Id,
    },
    {
      title: 'Social Network',
      techStack: [tech1Id, tech4Id, tech8Id],
      repoAPI: 'https://github.com/ChanManChan/API-Social',
      repoClient: 'https://github.com/ChanManChan/Client-Social',
      deployed: 'https://google.com',
      theme: '#2b26c3',
      description:
        'Platform where users can follow, like, comment & share files',
      screenshots: [
        {
          screenshot:
            'https://res.cloudinary.com/ddsk7jazd/image/upload/v1591264301/API_package.png44fd13aa28.png',
          caption: 'Server package.json',
          description: 'Packages used on server',
        },
        {
          screenshot:
            'https://res.cloudinary.com/ddsk7jazd/image/upload/v1591264301/Client_package.png22dfbdabd8.png',
          caption: 'Client package.json',
          description: 'Packages used on client',
        },
        {
          screenshot:
            'https://res.cloudinary.com/ddsk7jazd/image/upload/v1591264302/home.jpg6a5f3c7598.jpg',
          caption: 'Home Page',
          description: 'Displays recently created posts',
        },
        {
          screenshot:
            'https://res.cloudinary.com/ddsk7jazd/image/upload/v1591264302/user_page.jpg75ed6c497e.jpg',
          caption: 'User home page',
          description: 'CRUD operations on user profile',
        },
      ],
      user: user1Id,
    },
    {
      title: 'Authentication-Boilerplate',
      techStack: [tech1Id, tech3Id, tech4Id],
      repoAPI:
        'https://github.com/ChanManChan/authentication-MERN-boilerplate-/tree/master/server',
      repoClient:
        'https://github.com/ChanManChan/authentication-MERN-boilerplate-/tree/master/client',
      deployed: 'https://google.com',
      theme: '#00897b',
      description:
        'Basic authentication boilerplate with facebook and google login with forgot and reset password functionality',
      screenshots: [
        {
          screenshot:
            'https://res.cloudinary.com/ddsk7jazd/image/upload/v1591263319/role_based.pngeaadb01cc3.png',
          caption: 'Update profile info',
          description: 'Role-Based Routing',
        },
        {
          screenshot:
            'https://res.cloudinary.com/ddsk7jazd/image/upload/v1591263319/client_package.jpgf727a3d352.jpg',
          caption: 'Client package.json',
          description: 'Packages used on client',
        },
        {
          screenshot:
            'https://res.cloudinary.com/ddsk7jazd/image/upload/v1591263319/sign_in_page.png20a542668b.png',
          caption: 'SignIn Page',
          description: 'Facebook and Google login',
        },
        {
          screenshot:
            'https://res.cloudinary.com/ddsk7jazd/image/upload/v1591263319/server_package.png3ba2536e5a.png',
          caption: 'Server package.json',
          description: 'Packages used on server',
        },
      ],
      user: user1Id,
    },
    {
      title: 'Contact Keeper [Udemy course]',
      techStack: [tech1Id],
      repoAPI: 'https://github.com/ChanManChan/contact-keeper',
      repoClient:
        'https://github.com/ChanManChan/contact-keeper/tree/master/client',
      deployed: 'https://epic-roentgen-99737e.netlify.app',
      theme: '#f50057',
      description:
        'Contacts management app where you can do CRUD operations on individual contacts',
      screenshots: [
        {
          screenshot:
            'https://res.cloudinary.com/ddsk7jazd/image/upload/v1591267218/contacts.pngdc54611c84.png',
          caption: 'Home page',
          description: 'Add new contacts to directory',
        },
        {
          screenshot:
            'https://res.cloudinary.com/ddsk7jazd/image/upload/v1591267218/package_json_api.png240a63f006.png',
          caption: 'Server package.json',
          description: 'Packages used on server',
        },
        {
          screenshot:
            'https://res.cloudinary.com/ddsk7jazd/image/upload/v1591267219/package_json_client.pngfca1b02a24.png',
          caption: 'Client package.json',
          description: 'Packages used on client',
        },
        {
          screenshot:
            'https://res.cloudinary.com/ddsk7jazd/image/upload/v1591267219/update_and_filter.pngf5d914b855.png',
          caption: 'Mutate data ',
          description: 'Filter through and update contacts',
        },
      ],
      user: user1Id,
    },
    {
      title: 'Portfolio [NextJS/GraphQl]',
      techStack: [tech1Id, tech5Id, tech6Id, tech7Id],
      repoAPI:
        'https://github.com/ChanManChan/nextJs-portfolio/tree/master/server',
      repoClient: 'https://github.com/ChanManChan/nextJs-portfolio',
      deployed: 'https://nandagopal.network',
      theme: '#9e9d24',
      description:
        'Portfolio app made using Apollo Server, Apollo Client and GraphQl',
      screenshots: [
        {
          screenshot:
            'https://res.cloudinary.com/ddsk7jazd/image/upload/v1591279111/dependencies.jpg5c25a9823c.jpg',
          caption: 'Package.json [Client & Server]',
          description: 'List of dependencies',
        },
        {
          screenshot:
            'https://res.cloudinary.com/ddsk7jazd/image/upload/v1591279111/interactive_chat.jpg6f250ec445.jpg',
          caption: 'Chat system',
          description:
            'Real time chat component with custom PollInterval and automatic pagination',
        },
        {
          screenshot:
            'https://res.cloudinary.com/ddsk7jazd/image/upload/v1591279111/random_fetch.pngc38be54bb2.png',
          caption: 'Highlights',
          description: 'Random data fetching',
        },
        {
          screenshot:
            'https://res.cloudinary.com/ddsk7jazd/image/upload/v1591279111/table.jpge3688963ab.jpg',
          caption: 'Responsive tables',
          description:
            'Table that efficiently renders large lists and tabular data',
        },
      ],
      user: user1Id,
    },
    {
      title: 'Feedback form',
      techStack: [tech1Id, tech3Id, tech7Id],
      repoAPI: 'https://github.com/ChanManChan/feedback-form-server',
      repoClient: 'https://github.com/ChanManChan/feedback-form-client',
      deployed: 'https://google.com',
      theme: '#d500f9',
      description:
        'Testing out cloudinary API by making an online feedback form',
      screenshots: [
        {
          screenshot:
            'https://res.cloudinary.com/ddsk7jazd/image/upload/v1591265518/API_package.png8c0fc9fc77.png',
          caption: 'Server package.json',
          description: 'Packages used on server',
        },
        {
          screenshot:
            'https://res.cloudinary.com/ddsk7jazd/image/upload/v1591265518/Client_package.jpgd79a1d2861.jpg',
          caption: 'Client package.json',
          description: 'Packages used on client',
        },
        {
          screenshot:
            'https://res.cloudinary.com/ddsk7jazd/image/upload/v1591265518/cloudinary_widget.jpg2df2c48d90.jpg',
          caption: 'Cloudinary widget',
          description:
            'Made cloudinary variable available on the window object',
        },
        {
          screenshot:
            'https://res.cloudinary.com/ddsk7jazd/image/upload/v1591265519/form.png488cbc7ad9.png',
          caption: 'Feedback form',
          description: 'Learning how to use cloudinary API',
        },
      ],
      user: user1Id,
    },
    {
      title: 'Graphql Social Network',
      techStack: [tech1Id, tech4Id, tech5Id, tech6Id, tech7Id],
      repoAPI: 'https://github.com/ChanManChan/graphql-test-server',
      repoClient: 'https://github.com/ChanManChan/graphql-test-client',
      deployed: 'https://graphql-client-react.herokuapp.com/',
      theme: '#ffb74d',
      description:
        'Learned GraphQl Subscriptions along with other gql features',
      screenshots: [
        {
          screenshot:
            'https://res.cloudinary.com/ddsk7jazd/image/upload/v1592223222/recent%20activity.jpgc1b0b74fb6.jpg',
          caption: 'User control panel',
          description: 'CRUD operations on Profile or on created Posts',
        },
        {
          screenshot:
            'https://res.cloudinary.com/ddsk7jazd/image/upload/v1592223216/client_packagejson.jpg706f46a8df.jpg',
          caption: 'Client package.json',
          description: 'Packages used on client',
        },
        {
          screenshot:
            'https://res.cloudinary.com/ddsk7jazd/image/upload/v1592223218/search%20posts.jpg8fde2f6eb9.jpg',
          caption: 'Search posts',
          description: 'Filter based on topics of interest',
        },
        {
          screenshot:
            'https://res.cloudinary.com/ddsk7jazd/image/upload/v1592223216/SUBSCRIPTIONS.jpga4cbc69dbb.jpg',
          caption: 'GraphQl subscriptions',
          description: 'Realtime mutations using apollo-link-ws',
        },
      ],
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
    {
      _id: tech5Id,
      name: 'GraphQl',
      description: 'Data query language for APIs',
      theme: '#f50057',
    },
    {
      _id: tech6Id,
      name: 'Apollo',
      description: 'Used for building a data graph',
      theme: '#8bf6f2',
    },
    {
      _id: tech7Id,
      name: 'Cloudinary',
      description: 'Image management services',
      theme: '#9c27b0',
    },
    {
      _id: tech8Id,
      name: 'Nodemailer',
      description: 'E-mails from Node.js',
      theme: '#827717',
    },
  ],
  particularsCategories: [
    {
      _id: detail1Id,
      title: 'Courses & Certificates',
      subTitle: 'Certificates I have Accumulated over the years',
      slug: 'accumulated-certificates',
    },
    {
      _id: detail2Id,
      title: 'Work Experiences',
      subTitle: 'Past work Experiences',
      slug: 'work-experience',
    },
    {
      _id: detail3Id,
      title: 'Academic History',
      subTitle: 'Details about my Educational qualifications',
      slug: 'academic-history',
    },
  ],
  briefs: [
    {
      title:
        'Modern React 16.8+ Including Hooks, Context API, Full Stack MERN ',
      slug: 'modern-react-context-mern',
      content: [
        'React Fundamentals (Components, props, state, etc)',
        'React Hooks (useState, useEffect, useContext, useReducer, useRef)',
        'Context API & App Level State',
        'MERN - MongoDB, Express React, Node',
        'Build a Custom API With JWT Authentication',
        'Redux - Reducers, Actions, etc',
        'Basic Animation',
      ],
      certificate_img:
        'https://res.cloudinary.com/ddsk7jazd/image/upload/v1591272139/Modern%20React16.8Including%20Hooks%20Context%20API%20Full%20Stack%20MERN%20Redux.jpg3c3c216132.jpg',
      particularsCategory: detail1Id,
      user: user1Id,
    },
    {
      title: 'Social network with Node.js, Express, React, Redux & MongoDB',
      slug: 'social-nw-mern',
      content: [
        'Building an extensive backend API with Node.js & Express',
        'Protecting routes/endpoints with JWT (JSON Web Tokens)',
        'Extensive API testing with Postman',
        'Integrating React with backend in an elegant way, creating a great workflow',
        'Building frontend to work with the API',
        'Using Redux for app state management',
        'Creating reducers and actions for our resources',
        'Creating many container components that integrate with Redux',
        'Testing with the Redux Chrome extension',
      ],
      certificate_img:
        'https://res.cloudinary.com/ddsk7jazd/image/upload/v1591272562/social%20network%20with%20Node.js%20Express%20React%20Redux%20MongoDB.jpgb3f85940ec.jpg',
      particularsCategory: detail1Id,
      user: user1Id,
    },
    {
      title: 'Real world backend for a bootcamp directory app',
      slug: 'bootcamp-dir-app-node',
      content: [
        'HTTP Essentials',
        'Postman Client',
        'RESTful APIs',
        'Express Framework',
        'Routing & Controller Methods',
        'MongoDB Atlas & Compass',
        'Mongoose ODM',
        'Advanced Query (Pagination, filter, etc)',
        'Models & Relationships',
        'Middleware (Express & Mongoose)',
        'MongoDB Geospatial Index / GeoJSON',
        'Geocoding',
        'User Roles & Permissions',
        'Photo Upload',
        'Emailing Password Reset Tokens',
        'Security: NoSQL Injection, XSS, etc',
        'Deployment With PM2, NGINX, SSL',
      ],
      certificate_img:
        'https://res.cloudinary.com/ddsk7jazd/image/upload/v1591271594/real%20world%20backend%20for%20a%20bootcamp%20directory%20app.jpg48b5da43d5.jpg',
      particularsCategory: detail1Id,
      user: user1Id,
    },
  ],
  topics: [
    {
      _id: topic1Id,
      title: 'Ways to Contact Me',
      slug: 'contact-me',
      content:
        "You can either contact me through my email address, which is nandagopalgllallu@gmail.com [or] through the inbuilt communication facility of this application. Just SignUp and chain your queries in this thread, I'll be constantly monitoring it.",
      user: user1Id,
      createdAt: topic1CreatedAt,
    },
    {
      _id: topic2Id,
      title: 'Social presence',
      slug: 'social-presence',
      content:
        "I've a minimal social presence overall. But for the purposes of expanding my reach, I've created Facebook and Linkedin accounts.",
      user: user1Id,
      createdAt: topic2CreatedAt,
    },
    {
      _id: topic3Id,
      title: 'Location history',
      slug: 'location-history',
      content:
        "I've travelled across India for various reasons (Academic and otherwise). My last IT job was located in Kolkata, West Bengal. I'm currently residing in Trichy, Tamil Nadu.",
      user: user1Id,
      createdAt: topic3CreatedAt,
    },
  ],
  posts: [
    {
      _id: post1Id,
      content: 'Hey there how are you ?',
      slug: 'md43',
      fullSlug: post1CreatedAt.toISOString() + ':md43',
      topic: topic1Id,
      user: user1Id,
      createdAt: post1CreatedAt,
    },
    {
      _id: post2Id,
      content: 'What do you think about this?',
      slug: 'md59',
      fullSlug: post2CreatedAt.toISOString() + ':md59',
      topic: topic1Id,
      user: user2Id,
      createdAt: post2CreatedAt,
    },
    {
      _id: post3Id,
      content: 'I think its nice (:',
      slug: 'md59/md79',
      fullSlug:
        post2CreatedAt.toISOString() +
        ':md59' +
        '/' +
        post3CreatedAt.toISOString() +
        ':md79',
      topic: topic1Id,
      user: user1Id,
      parent: post2Id,
      createdAt: post3CreatedAt,
    },
    {
      _id: post4Id,
      content: 'Good to hear that!',
      slug: 'md59/md79/md89',
      fullSlug:
        post2CreatedAt.toISOString() +
        ':md59' +
        '/' +
        post3CreatedAt.toISOString() +
        ':md79' +
        '/' +
        post4CreatedAt.toISOString() +
        ':md89',
      topic: topic1Id,
      user: user2Id,
      parent: post3Id,
      createdAt: post4CreatedAt,
    },
  ],
};

module.exports = data;
