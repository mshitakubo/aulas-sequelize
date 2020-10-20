var express = require('express');
var router = express.Router();
var GenerosController = require('../controller/GenerosController')


router.get('/', GenerosController.index);

router.get('/criar' , GenerosController.criar)
router.post('/salvar' , GenerosController.salvar)

router.get('/:id', GenerosController.edit)
router.put('/:id', GenerosController.atualizar)

router.delete('/:id', GenerosController.delete)




module.exports = router;