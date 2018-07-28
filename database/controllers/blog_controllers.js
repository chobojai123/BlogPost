const Blog = require('../index.js');

module.exports = {
  getBlogs(req, res) {
    Blog.find({})
      .then(blogs => res.status(200).send(blogs))
      .catch(err => res.status(400).send(err));
  },

  getBlog(req, res) {
    const _id = req.params.id;
    Blog.findOne({ _id })
      .then(blog => res.status(200).send(blog))
      .catch(err => res.status(400).send(err));
  },

  addBlog(req, res) {
    const blogProps = req.body;
    Blog.create(blogProps)
      .then(blog => res.send(blog))
      .catch(err => res.status(400).send(err));
  },

  deleteBlog(req, res) {
    const driverId = req.params.id;
    Blog.findByIdAndRemove({ _id: driverId.toString() })
      .then(driver => res.status(204).send(driver))
      .catch(err => res.status(400).send(err));
  },
};
