const connection = require('../database/connection');

const controller = {
  getImageAnalysis: async (req, res) => {
    const image_key = req.params.key;

    const query = `SELECT * FROM image_detections WHERE confidence > 90 AND image_key = '${image_key}'`;

    connection.query(query, function (error, results, fields) {
      if (error) throw error;
      return res.status(200).send(JSON.stringify(results));
    });
  },

  getVideoAnalysis: async (req, res) => {
    const video_key = req.params.key;

    const query = `SELECT * FROM video_detections WHERE confidence > 90 AND video_key = '${video_key}'`;

    connection.query(query, function (error, results, fields) {
      if (error) throw error;
      return res.status(200).send(JSON.stringify(results));
    });
  },
};

module.exports = controller;
