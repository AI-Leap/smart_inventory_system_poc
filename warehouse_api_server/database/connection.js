const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'awba.c7xhqvq8qokj.ap-southeast-1.rds.amazonaws.com',
    user: 'root',
    password: 'toor2020',
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