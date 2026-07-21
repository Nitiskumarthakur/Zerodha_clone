const router = require("express").Router();
const {allTranaction } = require("../Controllers/TransactionController")
const {userData} = require("../Middleware/AuthValidation")

router.post("/",userData, allTranaction);

module.exports = router;