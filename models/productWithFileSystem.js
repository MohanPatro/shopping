const fs=require('fs')
const path=require('path')
const rootdir=require('../helpers.js/path')
const Cart=require('./cart')
const p=path.join(rootdir,'data','products.json')

let products=[]
module.exports=class Product{

    constructor(id,title,imageUrl,description,price){
        this.id=id;
        this.title=title; //creating a property in the class
        this.imageUrl=imageUrl;
        this.description=description;
        this.price=price;

    }
    
    save(){
        const p=path.join(rootdir,'data','products.json')
        fs.readFile(p,(err,result)=>{
            if(!err)
            {
                products=JSON.parse(result)
            }
            if(this.id)
        {
            const existingProductIndex=products.findIndex(product=>product.id==this.id)
            const updatedProduct=[...products]
            updatedProduct[existingProductIndex]=this
            fs.writeFile(p,JSON.stringify(updatedProduct),(err)=>{
                if(err){
                    console.log(err)
                }
                
            })
        }
        else{
            this.id=Math.random().toString();
            products.push(this)
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                if(err){
                    console.log(err)
                }
                
            })
        }
          return;  
        })
    }

    static fetchAll(cb)
    {
        
        // const p=path.join(rootdir,'data','products.json')
        const a=fs.readFileSync(p)
        products=JSON.parse(a)
        // console.log(typeof(cb))
        cb(products)
    }
    
    static findById(id){
        
        const a=fs.readFileSync(p)
        products=JSON.parse(a)
        const product=products.find((product)=>product.id==id)
        
        return product;

        
    }
    static deleteById(id,cb)
    {
        fs.readFile(p,(err,result)=>{
            if(!err)
            {
                products=JSON.parse(result);
            }
            const product=products.find(product=>product.id==id)
            const existingProductIndex=products.findIndex(product=>product.id==id)
            const updatedProducts=[...products];
            updatedProducts.splice(existingProductIndex,1)
            fs.writeFile(p,JSON.stringify(updatedProducts),(err)=>{
                if(!err)
                {
                    Cart.deleteProduct(id,product.price,()=>{
                        cb();
                    })
                }
                
            })
            
        })
    }

}
