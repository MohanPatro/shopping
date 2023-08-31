const Product=require('../../models/product')
const User=require('../../models/user')


exports.getProducts=(req,res,next)=>{
   
    Product.fetchAll()
    .then((result)=>{

        res.render('shop/product-list',{
            prod:result,
            pageTitle:result.title,
            path:'/products'
        })
    })

}