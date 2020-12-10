var http = require('http');
var createError = require('http-errors');
var bodyParser = require('body-parser');
require('./database/connection');
var express = require('express');
var cors = require('cors');
const morgan = require('morgan');
var debug = require('debug')
var app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('tiny'));
app.use(cors());
// app.use(bodyParser.json());
app.use(bodyParser.json({limit: '500mb'}));
app.use(bodyParser.urlencoded({limit: '500mb', extended: true, parameterLimit:500000}));
// Routes
var InventoryRoute = require('./routes/InventoryRoute');
var OrderRoute = require('./routes/OrderRoute');
var UploadRoute = require('./routes/UploadRoute');
// var SurveyRoute = require('./routes/SurveyRoute');
// var UserRoute = require('./routes/UserRoute');
app.use('/api/inventory', InventoryRoute);
app.use('/api/order', OrderRoute);
app.use('/api/upload', UploadRoute);
// app.use('/api/user', UserRoute);

app.use(function(req, res, next) {
  next(createError(404));
});
// app.use(cors());
// Add headers
// app.use(function (req, res, next) {
//   // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', '*');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });
const port = process.env.PORT || 3000
app.set('port', port);
const server = http.createServer(app);
server.listen(port,() => {
  console.log(`Server running at port `+port);
});