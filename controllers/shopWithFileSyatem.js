const Product=require('../models/productWithFileSystem')
const Cart=require('../models/cart')

exports.getProducts=(req,res,next)=>{
    
    // console.log(Product.fetchAll())
    Product.fetchAll((products)=>{
        res.render("shop/product-list",
    {
        prod:products,
        pageTitle:'All products',
        path:'/products'
    })
    })
    //alredy defined the views folder
}

exports.getIndex=(req,res,next)=>{
   

    Product.fetchAll((product)=>
    {
        res.render("shop/index",
    {
        prod:product,
        pageTitle:'shop',
        path:'/'
    })
    })
    //alredy defined the views folder
}


exports.getCart=(req,res,next)=>{
    Cart.getProducts((cart)=>{
        Product.fetchAll((products)=>{
            const cartProducts=[];
            for(product of products)
            {
                const cartProductData=cart.products.find(prod=>prod.id===product.id)

                if(cartProductData)
                {
                    cartProducts.push({productData:product,qty:cartProductData.qty})
                }
            }

        res.render("shop/cart",
        {
        pageTitle:'cart',
        path:'/cart',
        products:cartProducts
        })
        })
    
    })
    
}

exports.postcart=(req,res,next)=>{
    const productId=req.body.productId
    const product=Product.findById(productId)
    const a=Cart.addProduct(productId,product.price,()=>{
        res.redirect('/products')
    })
    
}


exports.getCheckOut=(req,res,next)=>{
    
    res.render("shop/checkout",
    {
        pageTitle:'checkout',
        path:'/checkout'
    })
}

exports.getOrders=(req,res,next)=>{
    res.render("shop/orders",
    {
        pageTitle:'Your Orders',
        path:'/orders'
    })
}


exports.getProduct=(req,res)=>{
    const productId=req.params.productId;
    const product=Product.findById(productId)
    res.render('shop/product-details',{path:"/products",pageTitle:product.title,product:product})
}


exports.postDeleteCart=(req,res,next)=>{
    const productId=req.body.productId;
    const productPrice=req.body.productPrice;
    Cart.deleteProduct(productId,productPrice,()=>{
        res.redirect('/cart')
    })
}
