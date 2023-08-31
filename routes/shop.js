const express=require('express')
const path=require('path')
const rootdir=require('../helpers.js/path')
const router=express.Router()

const getIndex=require('../controllers/shop/getIndex')

const getProducts=require('../controllers/shop/getProducts')

const getCart=require('../controllers/shop/getCart')

const getProduct=require('../controllers/shop/getProduct')

const postcart=require('../controllers/shop/postcart')

const postDeleteCart=require('../controllers/shop/postDeleteCart')

const getOrders=require('../controllers/shop/getOrders')

const postOrders=require('../controllers/shop/postOrders')





router.get('/',getIndex.getIndex)
router.get('/products',getProducts.getProducts)
router.get('/cart',getCart.getCart)
router.get('/product/:productId',getProduct.getProduct)
router.post('/cart',postcart.postcart)
router.post('/delete-cart-item',postDeleteCart.postDeleteCart)
router.get('/orders',getOrders.getOrders)
router.post('/create-order',postOrders.postOrders)

module.exports=router;