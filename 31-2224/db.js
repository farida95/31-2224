
var mongodb=require('mongodb').MongoClient;
var DB = null;
var dbURL = 'mongodb://localhost:27017/quotes';
var dbURL = 'mongodb://localhost:27017/inspire-me';

  exports.connect = function(cb) {
     if (DB) {
         return cb(DB);
     }
     return mongo.connect(dbURL).then(function(db) {
         console.log('connected to db');
         DB = db;
         if (cb) cb(null, db);
         else return db;
    });
 };
exports.db = function() {
    if (DB === null) throw Error('DB Object has not yet been initialized');
    return DB;
};
exports.clearDB = function(done) {
    DB.listCollections().toArray().then(function (collections) {
        collections.forEach(function (c) {
            DB.collection(c.name).removeMany();   
        });
        done();
    }).catch(done);
};

