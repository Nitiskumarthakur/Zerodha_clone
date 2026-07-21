const TransactionModel = require("../model/TransactionModel");

module.exports.allTranaction = async(req, res)=>{
    const user = req.user;
    const alltransaction = await TransactionModel.find({userID:user._id});
    return  res.status(200).json({success:true, transaction:alltransaction, user});
}