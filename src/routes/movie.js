const express = require('express');
const router = express.Router();
const movieController = require('../app/controllers/MovieController');

router.get('/create', movieController.create);
router.get('/all', movieController.all);
router.post('/store', movieController.store);
router.get('/restore', movieController.restore);
router.post('/handelsForm', movieController.handelsForm);
router.get('/:slug/edit', movieController.edit);
router.get('/:slug/restore', movieController.readyToRestore);
router.put('/:slug/update', movieController.update);
router.get('/:slug/remove', movieController.remove);
router.get('/:slug/destroy', movieController.destroy);
router.get('/:slug', movieController.show);

module.exports = router;
