var express = require('express');
var router = express.Router();
var connection = require('../database/connection');

var findOrder = function (req, res) {
  const query = 'SELECT * FROM awba.order';

  connection.query(query, function (err, result) {
    if (err) {
      console.error(err);
      return res.status(400).send(err);
    }

    return res.status(200).send(result);
  });
};

var addToCart = function (req, res) {
  const {
    qty,
    inventoryId,
  } = req.body;
  const query = `INSERT INTO awba.order (qty,inventoryId,status) 
                 VALUES (${qty},'${inventoryId}','addtocart')`;
  
  connection.query(query, function (err, result) {
    if (err) {
      console.error(err);
      return res.status(400).send(err);
    }

    return res.status(200).send(result);
  });
};
var purchaseItem = function (req, res) {
  const {
    customerName,
    customerPhone,
    inventoryId,
  } = req.body;
  const query = `UPDATE awba.order SET customerName='${customerName}',customerPhone='${customerPhone}', status = 'purchased' WHERE inventoryId=${inventoryId}`;
  connection.query(query, function (err, result) {
    if (err) {
      console.error(err);
      return res.status(400).send(err);
    }

    return res.status(200).send(result);
  });
};
var confirmPurchase = function (req, res) {
  const {
    inventoryId,
  } = req.body;
  const query = `UPDATE awba.order SET status = 'confirmed' WHERE inventoryId=${inventoryId}`;
  connection.query(query, function (err, result) {
    if (err) {
      console.error(err);
      return res.status(400).send(err);
    }

    return res.status(200).send(result);
  });
};

module.exports = {
  findOrder,
  addToCart,
  purchaseItem,
  confirmPurchase,
};