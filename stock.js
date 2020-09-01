const router = require('express').Router();
let Stock = require('./models/stock.model')

router.route('/').get((req, res) => {
    Stock.find()
        .then(stocks => res.json(stocks))
    .catch(err=> res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const stockname = req.body.stockname;
    const newStock = new Stock({ stockname });

    newStock.save()
        .then(() => res.json('Stock array Added'))
         .catch(err=> res.status(400).json ('error:'+ err))
})

module.exports = router;