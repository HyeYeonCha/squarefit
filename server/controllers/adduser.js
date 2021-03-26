const User = require("../models/user");

module.exports = async (req, res) => {
  try {
    const { email, nickname } = req.body;
    if (!email || !nickname) {
      res.status(500).json({ message: "lack of information." });
    }

    let newUser = await User.create({
      email,
      nickname,
    });

    res.status(200).json({ addUser: true, newUser });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
