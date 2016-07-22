var express = require('express');
var router = express.Router();


// var mysql = require('mysql');
/*
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
*/
// function createConn() {
//     var connection = mysql.createConnection({
//         user: 'training',
//         password: 'training',
//         host: '10.164.37.53',
//         port: 3306,
//         database: 'training'
//     });
//     return connection;
// }

/*
function Project(id, name) {
	this.id = id;
	this.name = name;
}
*/

router.get('/', function(req, res, next) {
  res.send("Hello GET view");
});

router.get('/:id', function(req, res, next) {

var writeStream = fs.createWriteStream('./output');

  // This pipes the POST data to the file
  req.pipe(writeStream);

  // After all the data is saved, respond with a simple html form so they can post more data
  req.on('end', function () {
    res.writeHead(200, {"content-type":"text/html"});
    res.end('<form method="POST"><input name="test" /><input type="submit"></form>');
  });

  // This is here incase any errors occur
  writeStream.on('error', function (err) {
    console.log(err);
  });
})


// });

router.post('/:id', function(req, res) {
  

  

  res.send("Hello POST view");
});

module.exports = router;
