const Utility = require('./utils');

const processPayment = (amount, shipping) => {
  const total = Utility.calculateNumber('SUM', amount, shipping);
  console.log(`The total is: ${total}`);
};

module.exports = processPayment;
