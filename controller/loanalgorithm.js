const datasets = require('../common/datasets.js');

const calculator = {
  creditLimit: function(consNo) {
    let consumer = datasets.consumers.filter(function (obj) {
      return obj.id === consNo;
    });
    let creditLimit = consumer[0].credit_limit.amount;
    return creditLimit;
  },
  interestRate: function(consNo, typeLoan) {
    let consumer = datasets.consumers.filter(function (obj) {
      return obj.id === consNo;
    });
    let creditRating = consumer[0].credit_rating.rating;
    let interest = Number(100 * (((1/(creditRating + 1))/2))).toFixed(2)
    return interest;
  },
  minAmount: function(typeLoan) {
    if (typeLoan == 'student loan'){
      return '1000'
    }
  },
  payBack: function(requestedLoanAmount, interest) {
    let payBack = requestedLoanAmount * (1 + (interest/100))
    return payBack
  }
};

// Calling example function, using consumer id 102
// let tmpfuncrslt = myFunc(101);
// console.log('creditLimit', tmpfuncrslt);


exports.data = calculator;
