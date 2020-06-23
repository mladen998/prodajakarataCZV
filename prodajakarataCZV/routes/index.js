var express = require('express');
var router = express.Router();
var mysql= require('mysql');

const con = mysql.createConnection({
  host: 'localhost', user: 'root', database: 'prodajakarata', port:3308

});
/* GET home page. */
router.get('/', function(req, res, next) {




  if(!con){
    con.connect(function(err){
      if(err){
        res.status(500);
        console.log(err.message);
        return res.end(err.message);

      }
    });
  }
let x;
  let utakmice;
  let sql = `SELECT * FROM utakmice where datum > NOW() ORDER BY datum ASC`;
  let sql1 = `SELECT * FROM aktivnosti ORDER BY id DESC`;
  con.query(sql, function(err, result){
    if(err){
      res.status(500);
      console.log(err.message);
      return res.end(err.message);
    }
    res.status(200);

   utakmice=result;
  });

  con.query(sql1, function(err, result){
    if(err){
      res.status(500);
      console.log(err.message);
      return res.end(err.message);
    }
    res.status(200);

    x= {
      odgovor:utakmice,
    aktivnost:  result,

    };

    console.log(x);
     res.render('index', { odgovor: x });
  });



});

module.exports = router;
