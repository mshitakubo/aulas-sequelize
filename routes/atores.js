var express = require('express');
var router = express.Router();
var AtoresController = require('../controller/AtoresController')
var AtorFilmeController = require('../controller/AtorFilmeController')

router.get('/', AtoresController.index)
router.get('/ver/:id', AtoresController.findById)
router.get('/search/:key', AtoresController.search)
router.get('/agregadores', AtoresController.agregadores)
router.get('/cadastro', AtoresController.cadastro)
router.post('/cadastro', AtoresController.salvar)
router.get('/criarvarios', AtoresController.bulkCreate)
router.get('/total', AtoresController.total)

router.get('/editar/:id', AtoresController.edit)
router.put('/editar/:id', AtoresController.update)

router.delete('/deletar/:id', AtoresController.delete)

router.get('/innerjoin', AtoresController.innerjoin)


// N:N
router.get('/belongstomany', AtorFilmeController.index)
router.get('/:id/filmes', AtorFilmeController.show)





module.exports = router;