var express = require('express');
var router = express.Router();
var FilmesController = require('../controller/FilmesController')

router.get('/', FilmesController.index);
router.get('/ver/:id', FilmesController.findById)
router.get('/premios', FilmesController.premios)

//innerjoin 1 pra muitos
router.get('/innerjoin/:id', FilmesController.innerjoin)


router.get('/home', FilmesController.home)


module.exports = router;
