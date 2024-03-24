import bcrypt from "bcryptjs";
import User from "../models/Users.js";
export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const getUser = await User.findOne({ email });

    if (!getUser) {
      res
        .status(400)
        .json({ error: "Email is not registered, please sign up" });

      return;
    }

    const passCompare = await bcrypt.compare(password, getUser.password);

    if (!passCompare) {
      res.status(401).json({ error: "Incorrect password" });
      return;
    }

    res.status(200).send("Logged in successfully");
  } catch (error) {
    console.log(error.message);
  }
};

export const signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const emailCheck = await User.findOne({ email });

    if (emailCheck) {
      res.send("Email already registered, please sign in");

      return;
    }

    const salt = await bcrypt.genSalt(11);
    const hashPass = await bcrypt.hash(password, salt);

    const newUser = new User({
      email: email,
      password: hashPass,
    });

    await newUser.save();

    res.status(201).json(newUser).json("User created successfully");
  } catch (error) {
    console.log(error.message);
  }
};
