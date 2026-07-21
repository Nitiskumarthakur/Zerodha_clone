const { Signup,Login } = require("../Controllers/AuthController");
const router = require("express").Router();
const {userValidation} = require("../Middleware/user_data_Validation");
const {userVerification} = require("../Middleware/AuthValidation")

router.post("/signup",userValidation, Signup);
router.post("/login", Login)

//for all route valification  design the logic in fronted (dash-Home.jsx)
router.post('/valification',userVerification)

module.exports = router;

 