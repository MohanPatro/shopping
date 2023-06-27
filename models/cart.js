const fs=require('fs')

const path=require('path')

const rootdir=require('../helpers.js/path')

const p=path.join(rootdir,'data','cart.json')


let cart={products:[],totalPrice:0}
module.exports=class Cart{


    static addProduct(id,productPrice,cb){
        //fetch the previous the cart
        //Analyse the cart => find the exisiting product 
        //Add the new product and inrcrease the quantity
        fs.readFile(p,(err,fileContent)=>{
            
            if(!err){
                cart=JSON.parse(fileContent)
            }

            const existingProductIndex=cart.products.findIndex(prod=>prod.id==id);

            const existingProduct=cart.products[existingProductIndex]
            let updatedProduct;
            if(existingProduct)
            {
                updatedProduct={...existingProduct};
                updatedProduct.qty=updatedProduct.qty+1;
                cart.products=[...cart.products]
                cart.products[existingProductIndex]=updatedProduct
            }
            else{
                updatedProduct={id:id,qty:1}
                cart.products=[...cart.products,updatedProduct]
            }
            cart.totalPrice=cart.totalPrice+ +productPrice
            fs.writeFile(p,JSON.stringify(cart),(err)=>{
                if(err)
                {
                    console.log(err);
                }
                else{
                    cb()
                }
            
            })
            
        });
        



    }


    static deleteProduct(id,productPrice,cb){
        fs.readFile(p,(err,fileContent)=>{
            if(!err){
                cart=JSON.parse(fileContent)
            }
            const updatedProducts={...cart};
            const deleted=updatedProducts.products.find(product=>product.id==id)
            if(!deleted)
            {
                return;
            }
            const deletedQty=deleted.qty;
            updatedProducts.products=updatedProducts.products.filter(product=>product.id!==id)
            updatedProducts.totalPrice=updatedProducts.totalPrice-productPrice*deletedQty
            fs.writeFile(p,JSON.stringify(updatedProducts),(err)=>{
                if(err)
                {
                    console.log(err);
                }
                else(cb())
            })
            
        })
    }

    static getProducts(cb){
        fs.readFile(p,(err,fileContent)=>{
            const cart=JSON.parse(fileContent)
            if(err)
            {
                cb(null)
            }
            else{
                cb(cart)
            }
        })
    }
}