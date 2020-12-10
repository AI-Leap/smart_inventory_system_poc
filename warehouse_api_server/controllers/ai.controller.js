const connection = require('../database/connection');

const controller = {
  getImageAnalysis: async (req, res) => {
    console.log('here');
    const image_key = req.params.key;

    const query = `SELECT * FROM image_detections WHERE confidence > 90 AND image_key = '${image_key}'`;

    connection.query(query, function (error, results, fields) {
      if (error) throw error;
      return res.status(200).send(JSON.stringify(results));
    });
  },
};

module.exports = controller;
