var connection = require("../config/connection.js");

var orm = {
	selectAll: function(tableInput, cb){
		var queryString = 'SELECT * FROM ' + tableInput;

		connection.query(queryString, function(err, result){
			if(err) throw err;
			cb(result);
		});
	},

	insertOne: function(){

		connection.query(queryString, function(err, result){
			if(err) throw err;
			cb(result);
		});	
	}

	updateOne: function(){

		connection.query(queryString, function(err, result){
			if(err) throw err;
			cb(result);
		});	
	}

}


module.exports = orm;