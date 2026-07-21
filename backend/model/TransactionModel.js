const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const transactionSchema = new mongoose.Schema({
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    stock_name:{
        type:String
    },
    qty:{
        type:Number,
    },
    type: { 
        type: String, 
        enum: ['CREDIT', 'DEBIT'] 
    },
    category: { 
        type: String, 
        enum: ['FUND_ADD', 'FUND_WITHDRAW', 'STOCK_BUY', 'STOCK_SELL'] 
    },
    amount:{
        type:Number,

    }
}, { timestamps: true });

const TransactionModel = mongoose.model("Transaction", transactionSchema); 

module.exports = TransactionModel;