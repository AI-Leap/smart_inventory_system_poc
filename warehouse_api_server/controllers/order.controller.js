const controller = {
  createOrder: async (req, res) => {
    console.log(req.body);
    return res.status(201).send();
  },
};

module.exports = controller;
