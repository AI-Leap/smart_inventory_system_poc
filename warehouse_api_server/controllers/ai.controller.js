const connection = require('../database/connection');

const controller = {
  getImageAnalysis: async (req, res) => {
    console.log('here');
    const image_key = req.params.key;

    const query = `SELECT * FROM image_detections WHERE confidence > 90 AND image_key = '${image_key}'`;

    const ret = await connection.query(query);

    console.log(ret);
    return res.status(200).send();
  },
};

module.exports = controller;
