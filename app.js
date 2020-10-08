const express = require("express")
const mongoose = require("mongoose")
const url = 'mongodb://127.0.0.1:27017'
const app = express()
const bodyparser=require('body-parser')
let jwt=require('jsonwebtoken')
let server =require('./sever')
mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open',function()
{
    console.log('connnected...')
})

app.use(express.json())

const hosRouter=require('./routes/hospital')
app.use("/hospital",hosRouter)

const venRouter=require('./routes/ventilator')
app.use('/ventilator',venRouter)

app.listen(1000,function()
{
    console.log("server getting started")
})