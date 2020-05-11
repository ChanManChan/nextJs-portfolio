//! Whenever your are defining mutation, the parameter values should be of Input type

const portfolioFields = `
  title: String,
  techStack: String,
  repoAPI: String,
  repoClient: String,
  deployed: String,
  theme: String,
  description: String,
`;

exports.portfolioTypes = `
  type Portfolio {
      _id: ID,
     ${portfolioFields}
    }
    input PortfolioInput {
     ${portfolioFields}
    }
`;
