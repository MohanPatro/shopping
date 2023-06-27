const express=require('express')
const path=require('path')
const rootdir=require('../helpers.js/path')
const router=express.Router();

const adminController=require('../controllers/admin')

router.get('/add-product',adminController.getAddProducts)

router.post('/add-product',adminController.postProducts)


router.get('/edit-product/:productId',adminController.getEditProducts)


router.get('/products',adminController.getProducts)

router.post('/edit-product',adminController.postEditProducts)

router.get('/delete-product/:productId',adminController.deleteProduct)

module.exports=router

