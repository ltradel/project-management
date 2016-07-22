var express = require('express');
var router = express.Router();
var mysql = require('mysql');
/*
var paramsParser = require('params-parser');

var urlencodedParser = paramsParser.urlencoded({ extended: false })
*/
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

/*
function Project(id, name) {
	this.id = id;
	this.name = name;
}
*/

router.get('/', function(req, res, next) {
  res.send("Hello GET init");
});

router.get('/login', function(req, res) {
	console.log('yyyyyyyyy init');
	
	var objConn = createConn();
    console.log(req.query.emp_id);
	console.log(req.query.password);
	objConn.query('SELECT firstname FROM basic_information where empid = ? AND password = ? AND active_flag = ?', [req.query.emp_id, req.query.password, 'Y'], function(error, rows) {
		console.log('xx');
		console.log(rows.length);
		
            if (rows.length > 0) {
                console.log('success');
				var firstNameVar = rows[0].firstname;
				console.log('fvar :'+firstNameVar);
				res.send(firstNameVar);
                //res.send('0');
                //res.end('Hi ' + req.query.emp_id + '!! You have successfully log in.');
            } else {
				console.log('fail');
                res.send('1');
                //res.end('Hi ' + req.query.emp_id + '!! You have not successfully log in.');
            }
    });
	
	//res.send("Hello POST init");
});

module.exports = router;
