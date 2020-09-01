const router = require("express").Router();
const finance = require("./finance");
const finance_M = require("./financeM");
const finance_D = require("./financeD");
const function_article = require("./articles");

router.route("/").get((req, res) => {
  function_article(res);
});

router.route("/add").post((req, res) => {
  const stockname = req.body.stockname;
  console.log(stockname);

  if (stockname[1] === "W") finance(stockname, res);
  else if (stockname[1] === "D") finance_D(stockname, res);
  else if (stockname[1] === "M") finance_M(stockname, res);
});

module.exports = router;
