const express = require('express');
const controller = require('../controller/blogController');
const router = express.Router();

// Add blog 
router.post('/', controller.addBlog);

router.get('/', controller.getBlog);

router.get('/:id', controller.getSingleBlog);

router.delete('/:id', controller.deleteBlog);

router.patch('/:id', controller.updateBlog);



module.exports = router;