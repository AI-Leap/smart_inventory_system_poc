const connection = require('../database/connection');

const controller = {
  createOrder: async (req, res) => {
    console.log(req.body);
    const { name, phone, email, deliveryAddress, billingAddress, cart } = req.body;
    const query = `INSERT INTO orders (name, phone, email, delivery_address, billing_address, cart)
      VALUES ('${name}', '${phone}', '${email}', '${deliveryAddress}', '${billingAddress}', '${JSON.stringify(cart)}')`
    
    const ret = await connection.query(query);
    return res.status(201).send();
  },

  getOrders: async (req, res) => {
    const query = 'SELECT * FROM orders';
    connection.query(query, function (error, results, fields) {
      if (error) throw error;
      return res.status(200).send(JSON.stringify(results));
    });
  },

  updateOrderStatus: async (req, res) => {
    const { id } = req.params;
    const { delivery_status } = req.body;
    const query = `UPDATE orders SET delivery_status = ${delivery_status} WHERE id = ${id};`;
    await connection.query(query);

    return res.status(200).send();
  },

};

module.exports = controller;
