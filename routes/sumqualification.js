var express = require('express');
var router = express.Router();
var mysql = require('mysql');

function createConn() {
    var connection = mysql.createConnection({
        user: 'training',
        password: 'training',
        host: '10.164.37.53',
        port: 3306,
        database: 'training'
    });
    return connection;


router.get('/summary', function(req, res, next) {
  res.send("Hello GET register");
});

router.post('/summary', function(req, res) {
	console.log('yyyyyyyyy');
	
	var objConn = createConn();
    
	var post = {
		empid: req.body.emp_id,
		email: req.body.mail,
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		nickname: req.body.nickname,
		password: req.body.password,
		usertype: 0,
		active_flag: 'N',
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
