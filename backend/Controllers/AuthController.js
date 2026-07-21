const User = require("../model/UserModel");
const { createSecretToken } = require("../Utils/SecretToken");
const bcrypt = require("bcryptjs");
const { signupSchema } = require("../SchemaValidation");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body.user;
    // if User already exists.
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ error: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("zerodh_token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
    });

    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);

  }
};


module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body.user;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
    const token = createSecretToken(user._id);
    res.cookie("zerodh_token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
    });
    res.status(201).json({ message: "User logged in successfully", success: true });
    next()
  } catch (error) {
    console.error(error);
  }
}