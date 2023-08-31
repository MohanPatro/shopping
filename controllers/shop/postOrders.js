const Product=require('../../models/product')
const User=require('../../models/user')





exports.postOrders=(req,res)=>{


    req.user.addOrder()
    .then((result)=>{
        console.log("order Created")
        res.redirect('/orders')
    })
    .catch(err=>{
        
        console.log(err)
    })
    
}

