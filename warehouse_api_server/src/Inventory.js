var express = require('express');
var router = express.Router();
var connection = require('../database/connection');

var findInventories = function (req, res) {
  const query = `SELECT * FROM inventory`;

  connection.query(query, function (err, result) {
    if (err) {
      console.error(err);
      return res.status(400).send(err);
    }

    return res.status(200).send(result);
  });
};

var addInventory = function (req, res) {
  const {
    title,
    companyName,
    price,
    currency,
    qty,
    imageUrl,
    description,
  } = req.body;
  const query = `INSERT INTO inventory (title,companyName,price,currency,qty,imageUrl,description) 
                 VALUES ('${title}','${companyName}','${price}','${currency}','${qty}','${imageUrl}','${description}')`;
  
  connection.query(query, function (err, result) {
    if (err) {
      console.error(err);
      return res.status(400).send(err);
    }

    return res.status(200).send(result);
  });
};

module.exports = {
  findInventories,
  addInventory
};