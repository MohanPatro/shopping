


exports.getOrders=(req,res,next)=>{
    req.user.getOrders()
    
    .then((products)=>{
        console.log(products)
        res.render('shop/orders',{
            orders:products,
            path:'/orders'
        })
    })
}