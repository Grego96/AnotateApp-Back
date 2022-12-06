const { User } = require("../models");
const jwt = require("jsonwebtoken");

async function login(req, res) {
  const user = await User.findOne({
    where: { email: req.body.email },
  });
  if (user) {
    const compare = await user.validatePassword(req.body.password);
    if (compare) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_STRING);
      res.status(200).json({ token });
    } else {
      res.status(400).json({ message: "invalid credentials" });
    }
  } else {
    res.status(400).json({ message: "user not found" });
  }
}

async function register(req, res) {
  try {
    const [user, created] = await User.findOrCreate({
      where: {
        // $or: [
        //   {
        //     email: req.body.email,
        //   },
        //   {
        //     username: req.body.username,
        //   },
        // ],
        email: req.body.email,
      },
      defaults: {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      },
    });
    if (created) {
      res.status(201).json({ message: "User created!" });
    } else {
      res.status(400).json({ message: "Email or username already exist." });
    }
  } catch (error) {
    res.status(400).json({ message: "A field is missing", error: error });
    return;
  }
}

module.exports = {
  register,
  login,
};
