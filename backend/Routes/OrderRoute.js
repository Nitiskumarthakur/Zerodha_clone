const router = require("express").Router();
const {uniqueOrder,allOrder,newOrder, sellOrder} = require("../Controllers/OrderController")
const {userData} = require("../Middleware/AuthValidation");

router.get("/allorder",userData, allOrder)
router.post("/uniqueorder", uniqueOrder)
router.post("/neworder",userData, newOrder)
router.post("/sellorder", userData, sellOrder)

module.exports = router;