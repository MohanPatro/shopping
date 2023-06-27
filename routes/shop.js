const express=require('express')
const path=require('path')
const rootdir=require('../helpers.js/path')
const router=express.Router()
const shopController=require('../controllers/shop')


router.get('/',shopController.getIndex)
router.get('/products',shopController.getProducts)
router.get('/cart',shopController.getCart)
router.get('/product/:productId',shopController.getProduct)
router.post('/cart',shopController.postcart)
router.get('/checkout',shopController.getCheckOut)
router.post('/delete-cart-item',shopController.postDeleteCart)
router.get('/orders',shopController.getOrders)



module.exports=router;