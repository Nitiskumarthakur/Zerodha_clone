const User = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res,next) => {
  const token = req.cookies.zerodh_token
  if (!token) {
    return res.status(401).json({ status: false })
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
   
    if (err) {
     return res.json({ status: false })
    } else {
      const user = await User.findById(data.id)
      if (user) return res.json({ status: true, user: user})
      else return res.json({ status: false })
    }
  })
}

module.exports.userData = (req,res,next)=>{
  const token = req.cookies.zerodh_token;
  if(!token){
    return  res.json({message:"Token not have Pleasr login/signup"})
  }
  
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
   
    if (err) {
     return res.json({message:"Error in Token valification!"});
    } 
    const user = await User.findById(data.id)
    //to store to user data. in req.
    req.user = user;
    next()
  })
}