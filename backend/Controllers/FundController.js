const TransactionModel = require("../model/TransactionModel");
const User = require("../model/UserModel");

module.exports.credit_Fund = async (req, res) => {
    try {
        const Curr_user = req.user;
        const { amount } = req.body;
        await User.updateOne({ _id: Curr_user._id }, { $inc: { Available_Balance: +amount } })
        const newTranaction = new TransactionModel({
            userID: Curr_user._id,
            type: "CREDIT",
            category: "FUND_ADD",
            amount: amount,
            stock_name: ""
        })
        await newTranaction.save();
        return res.json({ message: `Credit Amount ${amount} in your accont!`, Curr_user });
    } catch (err) {
        return res.status(500).json({ err });
    }
};
module.exports.debit_Fund = async (req, res) => {
    const Curr_user = req.user;
    const { amount } = req.body
    if (Curr_user.Available_Balance > amount) {
        await await User.updateOne({ _id: Curr_user._id }, { $inc: { Available_Balance: -amount } })
        const newTranaction = new TransactionModel({
            userID: Curr_user._id,
            type: "DEBIT",
            category: "FUND_WITHDRAW",
            amount: amount,
            stock_name: ""
        })
        await newTranaction.save();
        return res.json({ message: `Dedit Amount ${amount} in your account!`, Curr_user });
    } else {
        return res.json({ message: `Your Current Balance in Inficient!` });
    }

}
