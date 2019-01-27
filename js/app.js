//Express Boilerplate code
let express = require('express');
let app = express();
let port = 3000;

//MongoDB Boilerplate code
let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/mydb";

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
//Function for adding a new face to the DB
function addFace(dbo){
    let newFace = {test: "data1", secondTest: "data2"};
    dbo.collection("faces").insertOne(newFace, function(err, res){
        if (err) throw err;
        console.log("1 document inserted");
    })
}


//Endpoint redirection code
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));