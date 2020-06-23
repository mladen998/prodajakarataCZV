
var express = require('express');
var router = express.Router();
var mysql= require('mysql');

const con = mysql.createConnection({
    host: 'localhost', user: 'root', database: 'prodajakarata', port:3308

});



var id,timovi,vreme,datum,karte;
/* GET home page. */
router.get('/', function(req, res, next) {
        timovi=req.query.tim;
        vreme=req.query.vreme;
        datum=req.query.datum;
        karte=req.query.karte;
    id=req.query.id;

    res.render('forma',{odgovor:{tim:timovi,vreme:vreme,datum:datum,max:karte}});
});

router.get('/refresh', function(req, res, next) {


    res.render('forma',{odgovor:{tim:timovi,vreme:vreme,datum:datum,max:karte,obavestenje:'nema dovoljno karata'}});
});

router.post('/kupovina', function(req, res, next) {

    if (!con) {
        con.connect(function (err) {
            if (err) {
                res.status(500);
                return res.end(err.message);
            }
        });
    }


    if(parseInt(karte)<parseInt(req.body.karte)){
        console.log("Ne moze");
        res.redirect('/forma/refresh')
    }else{

    let sql = "INSERT INTO `kupci` (`id`, `ime`, `prezime`, `email`, `brojKupljenihKarata`, `nazivUtakmice`) VALUES (NULL,";

    sql += "'" + req.body.ime + "', ";
    sql += "'" + req.body.prezime + "', ";
    sql += "'" + req.body.email + "', ";
    sql += "'" + req.body.karte + "', ";
    sql += "'" + timovi + "' ";
    sql += ")";


    con.query(sql, function (err, result) {
        if (err) {
            res.status(500);
            return res.end(err.message);
        }
        res.status(200);

        updateKarte(id, req.body.karte, res, req.body.ime);


    });
}
    });


function updateKarte(id,kupio,res,ime) {
    if (!con) {
        con.connect(function (err) {
            if (err) {
                res.status(500);
                return res.end(err.message);
            }
        });
    }


    var x = parseInt(karte) - parseInt(kupio);
    insertAktivnosti(ime, timovi, kupio, res);

    let sqlUp = `UPDATE utakmice SET brojdostupnihkarata = '${x}' WHERE id='${id}';`;
    console.log('update' + sqlUp);
    con.query(sqlUp, function (err, result) {
        if (err) {
            res.status(500);
            return res.end(err.message);
        }
        res.status(200);


        res.redirect('/');
    });

}


function insertAktivnosti(user,utakmcica,karte,res){
    var datetime = new Date();
    var kk;
    if(parseInt(karte)==1){
        kk=karte+" kartu";

    }else if(parseInt(karte)>1&&parseInt(karte)<5){
        kk=karte+" karte"
    }
    else{
        kk=karte+" karata";
    }

    if(!con){
        con.connect(function(err){
            if(err){
                res.status(500);
                return res.end(err.message);
            }
        });
    }
    let sql="INSERT INTO aktivnosti (`id`,`Naslov`,`Sadrzaj`,`datum`) VALUES(NULL,";
    sql += "' Kupovina karte ', ";
    sql += "'" +user + " je kupio "+kk+" za utakmicu "+utakmcica+" "+"', ";
    sql += "'"+datetime.toISOString().slice(0,10)+ "' ";
    sql += ")";
console.log(sql);
    con.query(sql, function(err, result){
        if(err){
            res.status(500);
            return res.end(err.message);
        }
        res.status(200);



    });

}



module.exports = router;
