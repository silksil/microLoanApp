const datasets = require('../common/datasets.js');

const calculator = {
  creditLimit: function(consNo) {
    let consumer = datasets.consumers.filter(function (obj) {
      return obj.id === consNo;
    });
    let creditLimit = consumer[0].credit_limit.amount;
    return creditLimit;
  },
  // minAmount: function(typeLoan) {
  //   if (typeLoan == 'student loan'){
  //     return 1000
  //   }
  // },
  // interestRate: function(typeLoan) {
  // }
};

// Calling example function, using consumer id 102
// let tmpfuncrslt = myFunc(101);
// console.log('creditLimit', tmpfuncrslt);


exports.data = calculator;
