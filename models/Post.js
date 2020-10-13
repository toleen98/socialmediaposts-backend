const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creat subDocument
const child = new Schema ({
  name:{
    type:String
  }, 
  avatar: {
    type:String,
    
  },
  date: {
    type:Date,
    default: Date.now
  },
  comment: {
    type:String
  }
})
// Create Schema
const PostSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
  },
  liked_users:{
    type:Array,
    default:[]
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    default: null
  },
  videoUrl: {
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
  },
  comments: {
    type:Array,
    default:[]
  }
  

 
});


module.exports = Post = mongoose.model("posts", PostSchema);