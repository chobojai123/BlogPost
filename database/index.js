const mongoose = require('mongoose');

const { Schema } = mongoose;

const mongoUrl = 'mongodb://localhost:27017/blog';
const db = mongoose.connect(mongoUrl, { useNewUrlParser: true }, (err) => {
  if (err) console.log(err);
  else console.log('DB has connected!');
});

mongoose.promise = global.Promise;

const BlogSchema = new Schema({
  title: {
    type: String,
    validate: {
      validator: (title) => title.length > 2,
      message: 'There should be at least 3 characters.',
    },
    required: [true, 'Title is required.'],
  },
  categories: String,
  content: String,
});

const Blog = mongoose.model('blog', BlogSchema);

module.exports = Blog;
