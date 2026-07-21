const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {PositionModel} = require("../model/PositionModel");

async function main(){
    await mongoose.connect("mongodb+srv://nitishkumar9565105_db_user:oo7h0brXmYCCLRv5@cluster0.y95oao1.mongodb.net/Zerodh?retryWrites=true&w=majority&appName=Cluster0");
};
main().then(()=>console.log("DB connected"))
.catch(()=>console.log("Something Error in mongoDB connection"));

const positions = [
  {
    product: "CNC",
    name: "EVEREADY",
    qty: 2,
    avg: 316.27,
    price: 312.35,
    net: "+0.58%",
    day: "-1.24%",
    isLoss: true,
  },
  {
    product: "CNC",
    name: "JUBLFOOD",
    qty: 1,
    avg: 3124.75,
    price: 3082.65,
    net: "+10.04%",
    day: "-1.35%",
    isLoss: true,
  },
];

async function addPosition() {
    await PositionModel.deleteMany({});
    await PositionModel.insertMany(positions);
    console.log("data initialized")
}

addPosition()
