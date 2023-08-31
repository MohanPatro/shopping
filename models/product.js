 const mongoConnet=require('../helpers.js/database');
 const mongodb=require('mongodb')
 const getDb=require('../helpers.js/database').getDb;



class Product{

    constructor(title,imageUrl,description,price,userId){
        this.title=title; 
        this.imageUrl=imageUrl;
        this.description=description;
        this.price=price;
        this.userId=userId

    }

    save(){
        const db=getDb()
        return db.collection('products').insertOne(this)
        .then(result=>{
            console.log(result)
        })
        .catch(err=>{
            console.log(err)
        })
    }



    static fetchAll(){
        const db=getDb();
       return db.collection('products').find().toArray()
        .then(products=>{
            return products;
        })
        .catch(err=>{
            console.log(err)
        })
    }



    static findById(prodId){
        const db=getDb()
        return db.collection("products").findOne({_id:new mongodb.ObjectId(prodId)})
        .then(products=>{
            console.log(products);
            return products;
        })
        .catch(err=>{
            console.log(err);

        })
    }



    static update(product){
        const db=getDb()
        return db.collection("products").updateOne({_id:new mongodb.ObjectId(product.productId)},{$set:product})
        .then(products=>{
            console.log(products);
            return(products)
        })
        .catch(err=>{
            console.log(err)
        })
    }




    static delete(prodId)
    {
        const db=getDb()
        return db.collection("products").deleteOne({_id:new mongodb.ObjectId(prodId)})
        .then(products=>{
            console.log(products);
            
        })
        .catch(err=>{
            console.log(err)
        })
    }


    
}
module.exports=Product;