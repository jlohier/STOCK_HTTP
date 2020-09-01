const express = require('express')
const cors = require('cors');
require('dotenv').config();
const axios = require("axios");


//const uri = process.env.ATLAS_URI
async function App( res) {


    axios.get(' http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=' + process.env.ARTICLES_API)
        .then(response => {
            res.send(response.data)
        })

        .catch(error => {
            console.log(error);
        });


}

module.exports = App