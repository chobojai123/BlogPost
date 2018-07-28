const BlogController = require('../controllers/blog_controllers');

module.exports = (app) => {
  app.get('/blogs', BlogController.getBlogs);
  app.get('/blogs/:id', BlogController.getBlog);
  app.post('/blogs', BlogController.addBlog);
  app.delete('/blogs/:id', BlogController.deleteBlog);
};
