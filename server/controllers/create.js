const Post = require("../models/post");

module.exports = async (req, res) => {
  try {
    const { title, userId, contents } = req.body;
    if (!title || !userId || !contents) {
      res.status(500).json({ message: "lack of information." });
    }
    const post = new Post();
    const createdAt = post.dateFormatting(new Date());
    const updatedAt = post.dateFormatting(new Date());

    let newPost = await Post.create({
      title,
      userId,
      contents,
      createdAt,
      updatedAt,
    });

    res.status(200).json({ isCreated: true, newPost });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
