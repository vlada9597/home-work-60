// controllers/articlesController.js

exports.getArticles = (req, res) => {
  res.type('text/plain').send('Get articles route');
};

exports.postArticles = (req, res) => {
  res.type('text/plain').send('Post articles route');
};

exports.getArticleById = (req, res) => {
  const { articleId } = req.params;
  res.type('text/plain').send(`Get article by Id route: ${articleId}`);
};

exports.putArticleById = (req, res) => {
  const { articleId } = req.params;
  res.type('text/plain').send(`Put article by Id route: ${articleId}`);
};

exports.deleteArticleById = (req, res) => {
  const { articleId } = req.params;
  res.type('text/plain').send(`Delete article by Id route: ${articleId}`);
};