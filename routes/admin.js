const express=require('express')
const path=require('path')
const rootdir=require('../helpers.js/path')
const router=express.Router();

// const adminController=require('../controllers/admin')

const getAddProducts=require('../controllers/admin/getAddProducts')
const postProducts=require('../controllers/admin/postProducts')
const getEditProducts=require('../controllers/admin/getEditProducts')
const getProducts=require('../controllers/admin/getProducts')

const postEditProducts=require('../controllers/admin/postEditProducts')

const deleteProduct=require('../controllers/admin/deleteProduct')


router.get('/add-product',getAddProducts.getAddProducts)

router.post('/add-product',postProducts.postProducts)

router.get('/edit-product/:productId',getEditProducts.getEditProducts)



router.get('/products',getProducts.getProducts)

router.post('/edit-product',postEditProducts.postEditProducts)

router.get('/delete-product/:productId',deleteProduct.deleteProduct)

module.exports=router

