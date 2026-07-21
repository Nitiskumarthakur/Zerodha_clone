const { OrderModel } = require("../model/OrderModel");
const TransactionModel = require("../model/TransactionModel")
const User = require("../model/UserModel");


//for find all order
module.exports.allOrder = async (req, res) => {
    let Curr_user = req.user;
    let allOrder = await OrderModel.find({ owner: Curr_user._id });
    res.status(200).json(allOrder)
}
//For add new Order
module.exports.newOrder = async (req, res) => {
    try {
        let { name, qty, price, mode, owner } = req.body;
        const orderPrice = qty * price;
        if (req.user.Available_Balance < orderPrice) {
            return res.status(400).json({ message: "INSUFFICIENT_BALANCE" })
        }
        let newOrder = new OrderModel(req.body)
        let newTranaction = new TransactionModel({
            userID: owner,
            type: "DEBIT",
            stock_name: name,
            qty: qty,
            category: "STOCK_BUY",
            amount: orderPrice
        })
        await newTranaction.save();
        await newOrder.save();
        await User.updateOne(
            { _id: owner, Available_Balance: { $gte: orderPrice } },
            { $inc: { Available_Balance: -orderPrice } }
        );
        res.status(200).json({ message: "Add Order in the database" });
    } catch (err) {
        res.status(500).json({ error: "Something error in the database!" })
    }
}

//for unique order. to sellActionWindows.jsx use this route.
module.exports.uniqueOrder = async (req, res) => {
    let { name } = req.body;
    console.log(name);
    let order = await OrderModel.find({ name });
    console.log(order)
    let totalOrder = await OrderModel.countDocuments({ name });
    //console.log("totalOrder: ",totalOrder);
    let price = 5;
    let totalPrice = price * totalOrder;
    //console.log(totalPrice);
    res.json({ order, totalOrder, totalPrice });
}

//sellorder route
module.exports.sellOrder = async (req, res) => {
    try {
        let {stock} = req.body;
        let sellOrder = await OrderModel.findByIdAndDelete(stock._id);
        let newTranaction = new TransactionModel({
            userID: stock.owner,
            type: "CREDIT",
            stock_name: stock.name,
            qty: stock.qty,
            category: "STOCK_SELL",
            amount: stock.price
        })
        await newTranaction.save();
        let amount = stock.price;
        await User.updateOne(
            { _id: stock.owner},{$inc:{Available_Balance: +amount}}
        );
        res.status(200).json({ success: true, message: "Your Order sell." })
    }catch(err){
        console.log(err);
        res.status(500).json({err, message:"Something error try again"});
    }
}