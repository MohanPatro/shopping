//data base system direct conectivity
// const mysql=require('mysql2')

// const pool=mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     database:'ecom',
//     password:'AMma@143'
// })


// module.exports=pool.promise()


//database conection using the sequelize orm

const Sequelize=require('sequelize')

const sequelize=new Sequelize('ecom','root','AMma@143',{
    dialect:'mysql'
})

module.exports={Sequelize,sequelize}