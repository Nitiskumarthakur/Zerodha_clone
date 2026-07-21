const {model, Schema} = require("mongoose");

const holdingShcema = new Schema({
    name:{
        type:String,
        require:true
    },
    qty:{
        type:Number,
        require:true
    },
    avg:{
        type:Number,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    net:{
        type:String,
        require:true
    },
    day:{
        type:String,
        require:true
    },
    isLoss:{
        type:Boolean,
        require:true
    }
});
const HoldingModel = new model("holding" , holdingShcema);

module.exports = {HoldingModel};