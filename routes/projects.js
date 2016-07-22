var express = require('express');
var router = express.Router();
var mysql = require('mysql');

function Project(id, name) {
	this.id = id;
	this.name = name;
}

function createConn() {
    var connection = mysql.createConnection({
        user: 'training',
        password: 'training',
        host: '10.164.37.53',
        port: 3306,
        database: 'training'
    });
    return connection;
}

router.get('/', function(req, res, next) {
  res.send("Hello Projects");
});

router.get('/:id', function(req, res, next) {
	var sql = 'SELECT id, name FROM project WHERE id = ' + req.params.id;

	var connection = mysql.createConnection({
		host: '10.164.37.53',
		database:'training',
		user: 'training',
		password:'training'
	});

	connection.connect();
	
	connection.query(sql, function(err, rows, fields) {
		if (err) throw err;
		
		var projects = [];
		for (var i = 0; i < rows.length; i++) {
			var project = new Project(rows[i].id, rows[i].name);
			console.log(project);
			projects.push(project);
			console.log("Inside loop", projects);
		}
		connection.end();
		console.log("Outside loop", projects);
		res.send(projects);
	});
	
});

router.post('/qualifications', function(req, res) {
	console.log('yyyyyyyyy');
	
	var objConn = createConn();
    
	var post = {
		empid: '222',
		sumqualifications: req.body.qualifications
		};

	objConn.query('INSERT INTO qualifications SET ?', post, function(error) {
		if (error) {
			console.log(error.message);
			res.end(error.message);
		} else {
			console.log('success');
			res.end('Hi ' + req.body.nickname + '!! You have now partially created your account.\nAdmin has been notified.');
		}
	});
	
	res.send("Hello POST register");
});

module.exports = router;
