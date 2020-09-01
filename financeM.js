const express = require('express')
const cors = require('cors');
require('dotenv').config();
const axios = require("axios");
const mongoose = require('mongoose');
const uri = process.env.ATLAS_URI
const MSFT = require("./models/MyStocks1/MSFT")
const BABA = require("./models/MyStocks1/BABA")
const LVGO = require("./models/MyStocks1/LVGO")
const DVAX = require("./models/MyStocks1/DVAX")
const TSLA = require("./models/MyStocks1/TSLA")
const UPWK = require("./models/MyStocks1/UPWK")
const stockInDatabase = require('./finance_function.js')


mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB was successful")
})



//const uri = process.env.ATLAS_URI
async function App(A, res) {
    console.log(A[0])

    if (A[0] === "MSFT")
        var Stock = MSFT

    else if (A[0] === "BABA")
        var Stock = BABA


    else if (A[0] === "LVGO")
        var Stock = LVGO


    else if (A[0] === "TSLA")
        var Stock = TSLA

    else if (A[0] === "UPWK")
        var Stock = UPWK


    let B = [];
    const uri = process.env.ATLAS_URI
    var d = new Date();
    d.setDate(d.getDate() -30 );
    Stock.find({ createdAt: { $gt: d } }).sort({ date: -1 }).limit(10)
        //MSFT.find({ $query: { createdAt: { $gt: d }}, $orderby: { date:-1 } })
        //MSFT.find({ createdAt: { $gt: d } })
        //.then((data) => console.log(data.length))
        //.then(() => res.send("Yes"))
        .then((data) => {
            if (data.length == 0) {
                console.log("there is no data there. Let's add data!")



                axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=' + A[0] + "&outputsize=compact&apikey=" + process.env.FINANCE_API)
                    .then(response => {
                        B.push(response.data);
                        console.log(response.data)
                        monthly = "monthly"
                        HeaderString = "Monthly Time Series"
                        Stock.remove({}).then(() => stockInDatabase(B, monthly, Stock, HeaderString, res))


                    })

                    .catch(error => {
                        console.log(error);
                    });



            }

            else {
                console.log("I am here")
                res.send(data)
            }
        }
        )




}

module.exports = App