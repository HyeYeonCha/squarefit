const Post = require("../models/post");

module.exports = async (req, res) => {
  try {
    const { postId, userId } = req.body;
    await Post.deleteOne({ _id: postId, userId: userId });
    res.status(200).json({ isDeleted: true });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
