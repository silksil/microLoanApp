'use strict';
var datasets = {};

datasets.consumers = [
  {
	"id":101,
	"customer_number":"123456789",
	"legal_name":"John Junior Doe",
	"mobile_phone_number":"+31 20 123 3333",
	"email":"john@doe.com",
	"face_image":{
		"url":"www.doe.com/1.jpg",
		"date":"2018-01-22T00:08:00Z"
		},
	"date_of_birth":"1995-01-22T00:08:00Z",
	"relationship_status":"Single",
	"dependants":5,
	"dob_of_dependants":["2018-01-22T00:08:00Z"],
	"credit_rating":{
		"rating":"1",
		"source":"OBP"
		},
	"credit_limit":{
		"currency":"EUR",
		"amount":"20000"
		},
	"highest_education_attained":"University",
	"employment_status":"Employed",
	"kyc_status":true,
	"last_ok_date":"2018-01-22T00:08:00Z"
},
{
"id":102,
"customer_number":"987654321",
"legal_name":"Stacy Doe",
"mobile_phone_number":"+31 20 123 1111",
"email":"stacy@doe.com",
"face_image":{
  "url":"www.doe.com/2.jpg",
  "date":"2018-01-22T00:08:00Z"
  },
"date_of_birth":"1995-01-22T00:08:00Z",
"relationship_status":"Single",
"dependants":5,
"dob_of_dependants":["2018-01-22T00:08:00Z"],
"credit_rating":{
  "rating":"1",
  "source":"OBP"
  },
"credit_limit":{
  "currency":"EUR",
  "amount":"6000"
  },
"highest_education_attained":"Bachelor’s Degree",
"employment_status":"Employed",
"kyc_status":true,
"last_ok_date":"2018-01-22T00:08:00Z"
}
];

datasets.accounts = [
  {
      "id": 901,
      "consumer": 101,
      "currency": "EUR",
      "Ammount": 1000
  },
  {
    "id": 902,
    "consumer": 102,
    "currency": "EUR",
    "Ammount": -500
  }
];

datasets.transactions = [
  {
      "account": 901,
      "transactions": [
        {
          "transactionID": "901t1",
          "Ammount": 1000
        },
        {
          "transactionID": "901t2",
          "Ammount": -1000
        },
        {
          "transactionID": "901t3",
          "Ammount": 2000
        },
        {
          "transactionID": "901t4",
          "Ammount": -1000
        }
      ]
  },
  {
    "account": 902,
    "transactions": [
      {
        "transactionID": "902t1",
        "Ammount": -100
      },
      {
        "transactionID": "902t2",
        "Ammount": -100
      },
      {
        "transactionID": "902t3",
        "Ammount": -100
      },
      {
        "transactionID": "902t4",
        "Ammount": -100
      },
      {
        "transactionID": "902t5",
        "Ammount": -100
      }
    ]
  }
];


datasets.interestRates = {
      "amount": {
        "lt10k": 3,
        "gt10k": 6
      },
      "duration": {
        "lt6m": 1,
        "gt6m": 2
      },
      "creditRate": {
        "lt2": 1,
        "gt1": 2
      }
  };

module.exports = datasets;
