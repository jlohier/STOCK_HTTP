
const A = []
async function stockInDatabase(B, frequency, stockType, HeaderString, res) {
    var i = 0
    
   
    for (instance in B[0][HeaderString]) {
        date = new Date (instance),
        type = frequency
        open = B[0][HeaderString][instance]["1. open"]
        const newStock = new stockType({ date, open, type });

        
        newStock.save()
            .then(() => console.log("added"))
            .catch((err) => console.log(err))

        if (i < 12) {
            A.push(newStock)
            i++;
        }
        
       
    }
    res.send(A)
}

module.exports= stockInDatabase