const datasets = require('./dataset.js');

const calculator = {
  creditLimit: function(consNo) {
    let consumer = datasets.consumers.filter(obj => {
      return obj.id === consNo;
    });
    let creditLimit = consumer[0].credit_limit.amount;
    return creditLimit;
  },
  interestRate: function(consNo, typeLoan) {
    let consumer = datasets.consumers.filter(obj => {
      return obj.id === consNo;
    });
    let creditRating = consumer[0].credit_rating.rating;
    let interest = Number(100 * (((1/(creditRating + 1))/2))).toFixed(2);
    return interest;
  },
  payBack: function(requestedLoanAmount, interest) {
    let payBack = Number(requestedLoanAmount * (1 + (interest/100))).toFixed(2);
    return payBack;
  }
};

exports.data = calculator;
