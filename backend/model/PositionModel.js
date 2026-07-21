const {model, Schema} = require("mongoose");

const PositionSchema  = new Schema({
    product:{
        type:String,
        reqiure:true
    },
    name:{
        type:String,
        reqiure:true
    },
    qty:{
        type:Number,
        reqiure:true
    },
    avg:{
        type:Number,
        reqiure:true
    },
    price:{
        type:Number,
        reqiure:true
    },
    net:{
        type:String,
        reqiure:true
    },
    day:{
        type:String,
        reqiure:true
    },
    isLoss:{
        type:Boolean,
        reqiure:true
    }
});

const PositionModel = new model("position", PositionSchema);

module.exports = {PositionModel};