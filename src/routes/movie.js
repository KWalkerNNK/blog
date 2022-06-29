const express = require('express');
const router = express.Router();
const movieController = require('../app/controllers/MovieController');

router.get('/create', movieController.create);
router.get('/all', movieController.all);
router.get('/:slug/edit', movieController.edit);
router.post('/store', movieController.store);
router.put('/:slug/update', movieController.update);
router.get('/:slug/remove', movieController.remove);
router.get('/:slug', movieController.show);

module.exports = router;
