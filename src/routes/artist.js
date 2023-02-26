const express = require('express');
// Import your controller into a src/routes/artist.js router and define a POST / route to connect to your controller.
const { artistController } = require('./controllers/artist');
const router = express.Router();

router.post('/', artistController.createArtist);

module.exports = router;
