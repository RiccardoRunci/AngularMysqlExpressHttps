/*PARTE DEL BACKEND!!!*/
const connection =require('./ConnessioneDB');
const RoutePrimoComponente = require('./RoutePrimoComponente.js');
const express = require('express'); 
const RoutePrimoC=express.Router();
const app = express();
const port = 443;

//PER HTTPS:
const fs = require('fs'); //importo la libreria per usare il file system
const https = require('https'); //importo la libreria per creare un server https
const path = require('path'); //libreria usata per lavorare con le path url


//PER HTTPS:
/*Questa parte non và messa quando abbiamo https!!!!!!!
app.listen(port, (req,res) => {
  console.log(`Express server listening on port ${port}`);
});
 a suo posto và messa questa sotto:*/
const sslServer=https.createServer({ //_dirname prende il nome della cartella dove stò puntando adesso
 cert: fs.readFileSync(path.join(__dirname,'CertificatoSSL','cert.crt')),
 key: fs.readFileSync(path.join(__dirname,'CertificatoSSL','cert.key'))
 },app);
 
 sslServer.listen(port,()=> console.log(`Express server con ssl is listening on port ${port}`));

 //app.use prende tutte le richieste (get,post,delete,ecc..)
//app è l'istanza della classe express
app.use('/1Componente',RoutePrimoComponente);

//per eseguire anche il front end con l'https digitare:
//ng serve --ssl(path del certificato e della chiave) --proxy-config proxy.conf.json

