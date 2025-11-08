const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articlesController');

router.get('/', articlesController.getArticles);
router.post('/', articlesController.postArticles);

router.get('/:articleId', articlesController.getArticleById);
router.put('/:articleId', articlesController.putArticleById);
router.delete('/:articleId', articlesController.deleteArticleById);

module.exports = router;