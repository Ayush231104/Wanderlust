const express = require("express");
const router = express.Router();

//Posts
//Index 
router.get("/", (req,res) => {
    res.send("get for post");
});

//Show 
router.get("/:id", (req,res) => {
    res.send("get for post id");
});

//Post 
router.post("/", (req,res) => {
    res.send("Post for posts");
});

//Delete 
router.delete("/:id", (req,res) => {
    res.send("Delete for post id");
});

module.exports = router;