const express = require('express');
const artistController = require('../controllers/artist');
const albumController = require('../controllers/album.js');

const router = express.Router();

router.post('/', artistController.createArtist);
router.get('/', artistController.getAllArtists);
router.get('/:id', artistController.getArtistById);
router.patch('/:id', artistController.updateArtist);
router.delete('/:id', artistController.deleteArtist);

router.post('/:id/albums', albumController.createAlbum);
router.get('/albums', albumController.getAllAlbums);
router.get('/albums/:id', albumController.getAlbumsByArtistId);
router.patch('/albums/:id', albumController.updateAlbum);
router.delete('/albums/:id', albumController.deleteAlbum);

module.exports = router;
