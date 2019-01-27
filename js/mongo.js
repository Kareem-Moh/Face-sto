let mongo = (function(){
    "use strict";

    //MongoDB Boilerplate code
    let MongoClient = require('mongodb').MongoClient;
    let url = "mongodb://localhost:27017/mydb";

    let module = {};

    module.createDB = function(){
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            let dbo = db.db("mydb");
            dbo.createCollection("faces", function(err, res) {
            if (err) throw err;
            console.log("Collection created!");
            addFace(dbo);
            db.close();
            });
        });
    }

    module.addFace = function(firstname, lastname, balancebox, image){
        let newFace = {firstname: firstname, lastname: lastname, balancebox: balancebox, image: image};
        dbo.collection("faces").insertOne(newFace, function(err, res){
            if (err) throw err;
            console.log("1 document inserted");
        })
    }

}());