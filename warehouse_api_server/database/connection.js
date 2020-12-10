var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'phoenixdb.cxq8dablzom7.us-east-2.rds.amazonaws.com',
    user: 'root',
    password: 'passw0rd',
    database: 'awba'
});

connection.connect(function(err) {
  if (err) {
      console.error('ERR connecting: ' + err.stack);
  } else {
      console.log('CONNECTED AS ID ' + connection.threadId);
  }
});

module.exports = connection;