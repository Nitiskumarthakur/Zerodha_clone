const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  image:{
    type:String,
    default:'https://as2.ftcdn.net/v2/jpg/08/15/34/53/1000_F_815345384_44Cjz3BEUr8xcIGXrcI86i1RVBo6lIfE.jpg'
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  Available_Balance:{
    type:Number,
    default:10000
  }
});

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return ; 
  this.password = await bcrypt.hash(this.password, 12);
});

const User = mongoose.model("User", userSchema);

module.exports = User;