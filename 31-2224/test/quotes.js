 var assert = require('chai').assert;
 var quotes = require('../quotes.js');
 var app = require('../app.js');
 var request = require('supertest');
 var Quote = require('../quotes.js');
 var db = require('../db.js');
 before(function (done) {
     db.connect(function (db) {
         done();
     }).catch(done);
 
 before(function(done) {
     db.connect(function(err, db) {
         if (err) return done(err);
         else done();
     });
 });
 
 describe("getElementByIndexElseRandom", function() {
     var arr = [1, 2, 3, 43, 5];
     it("should return a random element that is included in the array if we omit the index", function() {
         assert.include(Quote.getElementByIndexElseRandom(arr),3);
     });
     it("should return the first element if we also pass the index 0", function() {
        assert.include(Quote.getElementByIndexElseRandom(arr,0),1);
     });
     it("should return the last element if we also pass the index", function() {
         assert.include(Quote.getElementByIndexElseRandom(arr,4),5);
     });
 });
 
 describe("getQuotesFromJSON", function() {
     it("should return an array of 102 quote", function() {
         assert.lengthOf(Quote.getQuotesFromJSON, 3);
     });
     it("first quote in the array's author should be Kevin Kruse", function() {
     	var quote=Quote.getQuotesFromJSON[0];
        assert.deepPropertyVal(post, 'author.name', 'Kevin Kruse');
     });
  });
  
 describe("getQuoteFromJSON", function() {
     it('should return a quote object with an author and text property', function() {
         var quote=Quote.getQuoteFromJSON();
         assert.property(obj, 'author');
         assert.property(obj, 'text');


     });
     it('should return a random quote if index not specified', function() {
        var q=require('/Users/farida_amr/Desktop/se-assignment-master/quotes.json');
        var q2=Quote.getQuoteFromJSON();
        assert.include(q, q2);


     });
     it('should return the first quote if we pass 0', function() {
         var q=getQuoteFromJSON(0);
         assert.deepProperty(q, 'author.Kevin Kruse')
     });
 });
  
 describe('Quotes DB', function () {
 // quotes collection should be called quotes
 describe('seed', function() {
      before(db.clearDB);
     //....
     it('should populate the db if db is empty returning true', function(done) {
         // TODO: assert that seeded is true
         var seed=Quote.seed(function(err,seeded){ });
         assert.equal(seed,true); 
     });
     it('should have populated the quotes collection with 102 document', function(done) {
         // TODO: check that the database contains 102 document
     });
     it('should not seed db again if db is not empty returning false in the callback', function(done) {
         // TODO: assert that seeded is false
           var seed=Quote.seed(function(err,seeded){ });
           assert.equal(seed,false); 
     });
     it('should not seed db again if db is not empty', function(done) {
         // TODO: The database should have 102 quote still
     });
 });
 
 describe('getQuotesFromDB', function() {
     it('should return all quote documents in the database', function(done) {
         // TODO: there should be 102 documents in the db
         var qDB=Quote.getQuotesFromDB(function(err,seeded){ });
         assert.lengthOf(qDB, 102)
     });
 });
 
 describe('getQuoteFromDB', function() {
     it('should return a random quote document', function(done) {
         // TODO: see if it returns on of the quotes from all quotes
     });
     it('should return the first quote if passed 0 after callback', function(done) {
         // TODO: you know the content of object in the file
     });
  });
 describe('Quotes JSON', function () {
     // ...
 
 describe('API', function() {
     request = request(app);
     it("should return a 404 for urls that don't exist", function(done) {
         // TODO: test with supertest
     });
 
     it('/api/quote should return a quote JSON object with keys [_id, text, author]', function(done) {
         // TODO: test with supertest
     });
 
     it('/api/quotes should return an array of JSON object when I visit', function(done) {
         // TODO: test with supertest
    });
  });