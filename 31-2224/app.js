

   var assert = require('assert');
   var express = require('express');
   var Quote=require('./quotes.js');
   var mongodb = require('mongodb').MongoClient;
   var app = express();
 
    var DB = null;
 
 mongodb.connect('mongodb://localhost:27017/diary_db', function(err, db) {
     if (err) throw err;
     DB = db;
     var quote = {
          "quote": {
               "_id": "theobjectidoftherecord",
               "text": "Nothing Comes to those who wait",
                "author": "Amr Draz"
    }
     };
     

     db.collection('quote').updateOne(quote, quote, {
         upsert: true,
         w: 1
     }, function(err, result) {
         assert.equal(null, err);
         assert.equal(1, result.result.n);
         console.log('Db Connected and one quote inserted');
     });
 });
 var db = require('./db.js');
  
  app.use(express.static('public'));


  app.get('/index.html', function(req, res) {
    res.sendfile('./index.html');
});



  app.get('', function (req, res) {
  res.send('Hello World!');
});
 app.get('/api/quote', function(req, res, next) {
 	var q=Quote.getQuoteFromDB(function(err,seeded){ 
 	});
     //DB.collection('quote').findOne(function(err, post) {
         //if (err) return next(err);
         res.send(q);
     //});
 });




  app.get('/api/quotes', function(req, res, next) {
 	var q=Quote.getQuotesFromDB(function(err,seeded){ 
 	});
     //DB.collection('quote').findOne(function(err, post) {
         //if (err) return next(err);
         res.send(q);
     //});
 });
 
 app.listen(8080, function() {
     console.log('Example app listening on port 8080!');
 });
 //app.use(require('./routes/posts'));
  
 module.exports = app;
