const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article');
const adminArticleController = require('../controllers/admin/article');

router.get('/', articleController.getAllArticles);
router.get('/article/:slug', articleController.getArticleBySlug);
router.get('/author/:id', articleController.getArticlesByAuthor);

router.post('/admin/article/create', adminArticleController.createArticle);
router.post('/admin/article/update/:id', adminArticleController.updateArticle);
router.post('/admin/article/delete/:id', adminArticleController.deleteArticle);

module.exports = router;