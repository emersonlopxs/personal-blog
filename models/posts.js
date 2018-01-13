const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
      title: String,
      body: string,
      author: String,
      img: String
});

module.exports = mongoose.model('Post', PostSchema);
