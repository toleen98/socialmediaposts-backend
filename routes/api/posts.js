const express = require("express");
const router = express.Router();

// Load Post model
const Post = require("../../models/Post");
const { post } = require("./users");

//get all posts
router.get("/posts", (req, res) => {
    Post.find({}).then(posts => {
        return res.status(200).json(posts);
    })
});

//create post
router.post("/createpost", (req, res) => {
    const newPost = new Post ({
        name: req.body.name,
        user_id:req.body.user_id,
        avatar: req.body.avatar,
        title: req.body.title,
        description:req.body.description,
        imgUrl:req.body.imgUrl,
        vedioUrl: req.body.vedioUrl,
        likes_count:req.body.likes_count ,
        createdAt:req.body.createdAt ,
        updatedAt: req.body.updatedAt,
        deletedAt: req.body.deletedAt
    });

    newPost
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
       
});

//update post
router.put("/updatepost", (req, res) => {
    const updates = {
        $set:{
        title: req.body.title,
        description:req.body.description,
        imgUrl:req.body.imgUrl,
        vedioUrl: req.body.vedioUrl,
        updatedAt: new Date
        }
    }

    Post.findOneAndUpdate({_id:req.body._id}, updates,null)
    .then(post => {
        return res.status(202).json(post);
    })
    .catch(error => console.error(error))


    
});

//delete post
router.delete('/deletepost', (req, res) => {
    Post.findOneAndDelete({_id : req.body._id})
    .then (result => {
        return res.status(202).json(result)
    })
    .catch(error => res.json(error))
})

module.exports = router;

