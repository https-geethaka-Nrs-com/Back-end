const express = require('express')// framework
const mongoose = require('mongoose')//use to work with mongodb
const morgan = require('morgan')// important for deploy
const bodyParser = require('body-parser')//pass the request and submit response and request

const DealerRoute = require('./routes/dealer')
const FuelStatusRoute = require("./routes/fuelStatus")
const FuelQueueRoute = require("./routes/fuelQueue")


const AuthRoute = require('./routes/auth')
const dotenv = require("dotenv");  //require dotenv package
dotenv.config({ path: "./.env" }); //import config.env file

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE,{useNewUrlParser:true,useUnifiedTopology:true})
const db = mongoose.connection

db.on('error',(err) =>{
    console.log(err)
})

db.once('open', ()=> {
    console.log('Database Connection Established!')
})

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

app.use('/api',AuthRoute)

app.use('/show',DealerRoute)
app.use('/api/fuelStatus',FuelStatusRoute)
app.use('/api/fuelQueue',FuelQueueRoute)
