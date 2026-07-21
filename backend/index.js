require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const {HoldingModel} = require("./model/HoldingModel");
const {PositionModel} = require("./model/PositionModel");
const {OrderModel}  = require("./model/OrderModel");
const authRoute = require("./Routes/AuthRoute")
const OrderRoute = require("./Routes/OrderRoute");
const TransactionRoute = require("./Routes/TransactionRoute")
const FundRoute = require("./Routes/FundRoute");

const PORT = process.env.PORT || 3002;
const mongoDB = process.env.MONGOATLAS_DB;

//Data base Connection.....
async function main(){
    await mongoose.connect(mongoDB);
};
main().then(()=>console.log("DB connected"))
.catch(()=>console.log("Something Error in mongoDB connection"));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:["http://localhost:5173","http://localhost:5174"],
    credentials: true,
}));
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/order", OrderRoute);
app.use("/api/transaction",TransactionRoute)
app.use("/api/fund", FundRoute);

app.get('/allHolding',async (req,res)=>{
    let holding = await HoldingModel.find({});
    res.json(holding);
})
app.get("/allPosition",async (req,res)=>{
    let positons = await PositionModel.find({});
    res.json(positons);
})
//To store data in the OrderModel;
app.post("/newOrder", async(req,res)=>{
    let {name, qty, price, mode} = req.body;
    console.log(req.body);
    let newOrder = new OrderModel({
        name:req.body.name,
        qty:req.body.qty,
        price:req.body.price,
        mode:req.body.mode
    });

    await newOrder.save();
})



app.listen(3002, ()=>{
    console.log("server start on the port Number 3002")
});