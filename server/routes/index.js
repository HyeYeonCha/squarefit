const express = require("express");

const addUser = require("../controllers/adduser");
const createPost = require("../controllers/create");
const readPost = require("../controllers/read");
const updatePost = require("../controllers/update");
const deletePost = require("../controllers/delete");

const router = express.Router();

router.post("/adduser", addUser);
router.post("/create", createPost);
router.get("/read/:postId", readPost);
router.patch("/update", updatePost);
router.delete("/delete", deletePost);

module.exports = router;
