const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const PostSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imdUrl: {
    type: String,
    default: null
  },
  vedioUrl: {
    type: String,
    default: null
  },
  likes_count: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: null
  },
  deletedAt: {
    type: Date,
    default: null
  }
 
});

let  Post = mongoose.model("posts", PostSchema);

module.exports.Post = Post;