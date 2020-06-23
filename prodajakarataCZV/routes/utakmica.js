var express = require('express');
var router = express.Router();

var mysql= require('mysql');

const con = mysql.createConnection({
    host: 'localhost', user: 'root', database: 'prodajakarata', port:3308

});
var id;
/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(id);



    if(!con){
        con.connect(function(err){
            if(err){
                res.status(500);
                console.log(err.message);
                return res.end(err.message);

            }
        });
    }

    let sql = `SELECT * FROM utakmice where id='${id}' `;

    con.query(sql, function(err, result){
        if(err){
            res.status(500);
            console.log(err.message);
            return res.end(err.message);
        }
        res.status(200);

        let x= {
            odgovor:result
        };
        console.log(x);
        res.render('utakmica', { odgovor: result });

    });

});




router.get('/:id', function(req, res, next) {
    id=req.params.id;
    res.redirect('/utakmica');

});
module.exports = router;
