
const Product=require('../../models/product')
const User=require('../../models/user')



exports.getIndex=(req,res,next)=>{
   
    Product.fetchAll()
    .then((result)=>{

        res.render('shop/index2',{
            prod:result,
            pageTitle:"shop",
            path:'/'
        })
    })

}