const Post = require("../models/post");

module.exports = async (req, res) => {
  try {
    const { userId, postId, title, contents } = req.body;

    if (!userId || !postId || !title || !contents)
      res.status(400).json({ isUpdate: false });

    const userPost = await Post.findOne({
      _id: postId,
      userId: userId,
    });

    if (!userPost) res.status(400).json({ isUpdate: false });

    const post = new Post();
    const updatedAt = post.dateFormatting(new Date());

    await Post.updateOne(
      { _id: postId, userId: userId },
      { $set: { title, contents, updatedAt } },
      { returnNewDocument: true }
    );

    const updatePost = await Post.findOne({
      _id: postId,
      userId: userId,
    });

    res.status(200).json({ isUpdate: true, updatePost });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
