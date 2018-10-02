var mysql = require('mysql');
var express = require('express');

var connection = mysql.createConnection({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'deirdre',
  database        : 'practice'
});

connection.connect(function(error){
	if(!!error){
		console.log('Error');
	}
	ekse{
		console.log('Connected');
	}
});
app.get('/', function(req, resp){
	//about mysql
	connection.query("SELECT * FROM practice", function(error, rows, fields)
	if(!!error){
		console.log("Error in the query");
	}else{
		//parse with your rows/fields
		console.log("Successful");
	}
});
})
app.listen(3306);

