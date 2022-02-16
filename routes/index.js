var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req,res,next) {
  res.send("Binevenido a la biblioteca");
});

module.exports = router;
