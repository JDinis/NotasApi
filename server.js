// server.js
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const app = express();

const port = 7000;

app.use(bodyParser.urlencoded({extended:true}));

//require('./routes')(app,{});

console.log(db.url);

MongoClient.connect(db.url, {useNewUrlParser:true}, (err, database) => {
  if (err) return console.log(err)
  database = database.db("notasapi")
  
	require('./routes')(app, database);

	app.listen(port, ()=>{
		console.log('Servidor ativo: '+port);
	});

});