var express = require('express');
var router = express.Router();
var EpisodioController = require('../controller/EpisodioController')

router.get('/', EpisodioController.index)
router.get('/total', EpisodioController.total)
router.get('/media', EpisodioController.media)

module.exports = router;