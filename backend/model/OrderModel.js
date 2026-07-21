const {model, Schema} = require("mongoose");


const orderSchema = new Schema({
    
    name:{
        type:String,
        require:true
    },
    qty:{
        type:Number,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    mode:{
        type:String,
        require:true
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref:'User',
    }
})
const OrderModel = new model("order", orderSchema);

module.exports = {OrderModel};