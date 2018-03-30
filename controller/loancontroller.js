'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const datasets = require('../common/datasets.js');

module.exports = function(app) {

  //==================================================================================
/**
  * @function eample function
  */
  const myFunc = function(consNo) {

    let consumer = datasets.consumers.filter(function (obj) {
      return obj.id === consNo;
    });

    let creditLimit = consumer[0].credit_limit.amount;
    return creditLimit;
  };

  // Calling example function, using consumer id 102
  let tmpfuncrslt = myFunc(102);
  console.log('creditLimit', tmpfuncrslt);
  //==================================================================================

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  /** Homepage of the application **/
  app.get("/loans", function(request, response) {
    console.log("hi there")
    let tmpConsumer = 102; // can switch here between 101 and 102

    //filter json dataset consumer id.
    let consumer = datasets.consumers.filter(function (obj) {
      return obj.id === tmpConsumer;
    });

    //filter json dataset by account id.
    let account = datasets.accounts.filter(function (obj) {
      return obj.consumer === tmpConsumer;
    });

    //filter json dataset by account id.
    let transaction = datasets.transactions.filter(function (obj) {
      return obj.account === account[0].id;
    });

    // Calculate current account balance based on transactions
    let tst = 0;
    transaction[0].transactions.forEach(function(action) {
      tst += action.Ammount;
    });

    // Collecting data from functions above to print on the screen
    let consumerResult = '<b>Consumer:</b></br></br>' +JSON.stringify(consumer[0]) +'</br></br> <b>Having Account:</b> </br></br>'+ JSON.stringify(account[0]) +'</br></br> <b>Having Transactions:</b> </br></br>'+ JSON.stringify(transaction[0]+'</br></br><b>Calculated Result: </b></br></br>'+tst);
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>Welcome to the Mobile@IBM Hackathon application.</h1> <p>More work is upcomming!</p></br>'+consumerResult);
  });

}