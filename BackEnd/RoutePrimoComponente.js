const connection = require('./ConnessioneDB');
const express = require('express');
const router = express.Router();
router.use(express.json());

//seleziona tutte le persone
router.get('/utenti',(req,res)=>{
  let sql ='select * from tab_utenti';
  let query = connection.query(sql,(err,result)=>
  {
      if(err) console.log(result);
      else
      {
       res.json(result);
      }
  });
});

//seleziona una persona per id:
router.get('/utenti/:id',(req,res)=>{
    connection.query('SELECT * FROM tab_utenti where idutente = ?',[req.params.id],(err,row,fields)=>{
    if(!err){
      res.json(row); //questo invece di rispedirmi un json mi invia un array!?!?
    }
    else
    console.log(err);
    });
});


router.post('/inserisciutente',(req, res)=> 
{
   let Nome=req.body.nomeUt;
   let Email=req.body.emailUt;
  
    var sql = `INSERT INTO tab_utenti (NomeUtente, EmailUtente)
            VALUES(?, ?)`;
    connection.query(sql, [Nome , Email], function (err, data) 
    {
      if (err) {res.status(500).send(console.log("Errore nell'inserimento nel DB dell'utente "+err));} 
      else {res.status(201).send(console.log("Utente: "+Nome," Inserito nel DB!"));}
    });
});

router.get('/prova',(req,res)=>{
  res.send("OK!");
});

module.exports=router;