const express = require('express');
const router = express.Router();

const productsController = require('../app/controllers/ProductController');

router.get('/detail/:slug', productsController.show);
router.get('/create', productsController.create);
router.post('/handle-form-action', productsController.handleFormAction);
router.post('/store', productsController.store);
router.put('/:id', productsController.update);
router.patch('/:id/restore', productsController.restore);
router.delete('/:id', productsController.delete);
router.delete('/:id/force', productsController.deleteForce);
router.get('/:id/edit', productsController.edit);


module.exports = router;
