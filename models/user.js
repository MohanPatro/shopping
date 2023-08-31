const getDb=require('../helpers.js/database').getDb

const mongodb=require('mongodb')

class User{


    constructor(name,email,cart,id){
        this.email=email;
        this.name=name;
        this.cart=cart;
        this._id=id;
        
    }


    save(){
        const db=getDb();

        return db.collection("users").insertOne(this)
        .then(user=>{
            console.log("created user");
            return user;
        })
        .catch(err=>{
            console.log(err)
        })
    }



    addToCart(product){

        const db=getDb();
     
        const productIndex=this.cart.findIndex(cp=>{
            console.log(cp.productId==product._id.toString())
            return cp.productId.toString()==product._id.toString()
        })
        let newQuantity=1;

        let updatedCart=[...this.cart]
        console.log(productIndex)

        if(productIndex>=0)
        {
            newQuantity=this.cart[productIndex].quantity+1
            updatedCart[productIndex].quantity=newQuantity
        }
        else{

            updatedCart.push({
                productId:product._id,
                quantity:newQuantity
            })
        }
        return db.collection('users').updateOne({_id:new mongodb.ObjectId(this._id)},{$set:{cart:updatedCart}})
        .then(result=>{
            console.log(result)
            return result;
        })
        .catch(err=>{
            console.log(err)
        })

    }




    getCart(){
        const db=getDb();
        const productIds=this.cart.map(i=>{
            return i.productId
        })

        return db.collection('products').find({_id:{$in:productIds}})
        .toArray()
        .then(products=>{
            return products.map(p=>{
                return {
                    ...p,quantity:this.cart.find(i=>{
                        return i.productId.toString()==p._id.toString()
                    }).quantity
                }
            })
        })
    }



        
    deleteCart(productId){
        const db=getDb()
        const updatedCart=this.cart.filter(i=>{
            return i.productId.toString()!=productId.toString()
        })
        return db.collection('users').updateOne({_id:this._id},{$set:{cart:updatedCart}})
        .then(products=>{
            console.log(products);
            return products;
        })
        .catch(err=>{
            console.log(err)
        })
    }       



    addOrder(){
        const db=getDb()
        
        //    return  db.collection('orders').insertOne({cart:this.cart})

        return this.getCart()
        .then((products)=>{
            const order={
                items:products,
                user:{
                    _id:this._id,
                    name:this.name
                }
            }

            return db.collection('orders').insertOne(order)
            
        })
        .then(result=>{
            this.cart=[];
            return  db.collection('users').updateOne({_id:this._id},{$set:{cart:[]}})
            
        })
    }



    getOrders(){
        const db=getDb();

        return db.collection('orders').find({'user._id':new mongodb.ObjectId(this._id)})
        .toArray()
        .then((products)=>{
            console.log(products)
            return products;
        })
        .catch(err=>{
            console.log(err);
        })
    }

    
    
    static findById(userId){
        const db=getDb();
        return db.collection('users').findOne({_id:new mongodb.ObjectId(userId)})
        .then(user=>{
            console.log(user);
            return user;
        })
        .catch(err=>{
            console.log(err)
        })
    }


    
}

module.exports=User;