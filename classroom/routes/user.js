const express = require("express");
const router = express.Router();

//Index - users
router.get("/", (req,res) => {
    res.send("get for users");
});

//Show - users
router.get("/:id", (req,res) => {
    res.send("get for user id");
});

//Post - users
router.post("/", (req,res) => {
    res.send("Post for users");
});

//Delete - users
router.delete("/:id", (req,res) => {
    res.send("Delete for user id");
});

module.exports = router;