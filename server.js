const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')
app.use(bodyParser.json())

//routes
const studentRoute = require('./routes/studentRoute')
app.use('/student', studentRoute)

const gradeRoute = require('./routes/gradeRoute')
app.use('/grade', gradeRoute)

app.listen(port, ()=> console.log(`Example app listening on port ${port}!`))

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jh:UdJSuvfxvgQzIFIN@cluster0.txcchdp.mongodb.net/demoDB',{useNewUrlParser: true})
    .then(()=> console.log("MongoDB connection successful"))
    .catch((err) => console.log(err))