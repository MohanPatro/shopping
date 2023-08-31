const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient

let _db;


const mongoConnect=callback=>{
MongoClient.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.3")

.then(client=>{
    console.log("successfully connected");
    _db=client.db('mydb') 
    callback() 
})
.catch(err=>{
    console.log(err)
    throw err;
})
}

const getDb=()=>{
    if(_db)
    {
        return _db;
    }
    throw "NO DATABASE FOUND"
}

exports.mongoConnect=mongoConnect;
exports.getDb=getDb;