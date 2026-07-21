const router = require("express").Router();
const {debit_Fund, credit_Fund} = require("../Controllers/FundController")
const {userData} = require("../Middleware/AuthValidation");

router.post("/credit",userData, credit_Fund );
router.post("/debit", userData, debit_Fund);
module.exports = router;