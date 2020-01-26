const axios = require('axios');
require('dotenv').config();

const songs_url = 'https://conuhacks-2020.tsp.cld.touchtunes.com/v1/songs/';

module.exports = function(app) {
  console.log('touchtunesAPI');
  app.get('/song/search/:query', async (req, res) => {
    try {
      let query = req.params.query;
      let options = {
        params: { query: query },
        url: songs_url,
        method: 'get',
        headers: { authorization: process.env.OCTAVE_GROUP }
      };
      let response = await axios(options);
      let data = await response.data;
      res.send(data['songs']);
    } catch (e) {
      // fail quietly
      console.log(e);
    }
  });
};
