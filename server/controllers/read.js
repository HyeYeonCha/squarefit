const Post = require("../models/post");

module.exports = async (req, res) => {
  try {
    const postId = req.params.postId;
    const post = await Post.findOne({ _id: postId });
    res.status(200).json({ getPost: true, post });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
