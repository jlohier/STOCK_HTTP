
require('dotenv').config();
const axios = require("axios");
const mongoose = require('mongoose');
const uri = process.env.ATLAS_URI
const MSFT = require("./models/MyStocks/MSFT")
const BABA = require("./models/MyStocks/BABA")
const LVGO = require("./models/MyStocks/LVGO")
const TSLA = require("./models/MyStocks/TSLA")
const UPWK = require("./models/MyStocks/UPWK")
const stockInDatabase= require('./finance_function.js')


mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB was successful")
})








//const uri = process.env.ATLAS_URI
async function App(A, res) {
    console.log(A[0])
    var Stock;
    if (A[0] === "MSFT") 
        Stock= MSFT
    
    else if (A[0] === "BABA") 
     Stock = BABA
    

    else if (A[0] === "LVGO") 
         Stock = LVGO
    

    else if (A[0] === "TSLA")
        Stock = TSLA

    else if (A[0] === "UPWK") 
    Stock= UPWK

    
    let B = [];
    
    var d = new Date();
    d.setDate(d.getDate() -7);
    Stock.find({ createdAt: { $gt: d } }).sort({ date: -1 }).limit(10)
        //MSFT.find({ $query: { createdAt: { $gt: d }}, $orderby: { date:-1 } })
        //MSFT.find({ createdAt: { $gt: d } })
        //.then((data) => console.log(data.length))
        //.then(() => res.send("Yes"))
        .then((data) => {
            if (data.length === 0) {
                console.log("there is no data there. Let's add data!")
                


                axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=' + A[0] + "&outputsize=compact&apikey=" + process.env.FINANCE_API)
                        .then(response => {
                            B.push(response.data);
                            console.log(B)
                             var weekly = "weekly"
                            var HeaderString = "Weekly Time Series"
                            Stock.remove({}).then(() => stockInDatabase(B, weekly, Stock, HeaderString, res))
                            
                        
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

module.exports= App