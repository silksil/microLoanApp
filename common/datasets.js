'use strict';
const datasets = {};

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
		"rating":"2",
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

module.exports = datasets;
