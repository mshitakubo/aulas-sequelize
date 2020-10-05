var express = require('express');
var router = express.Router();
var FilmesController = require('../controller/FilmesController')
var AtoresController = require('../controller/AtoresController')


router.get('/', FilmesController.index);

router.get('/atores', AtoresController.index)
router.get('/atores/ver/:id', AtoresController.findById)
router.get('/atores/search/:key', AtoresController.search)
router.get('/atores/agregadores', AtoresController.agregadores)


module.exports = router;
