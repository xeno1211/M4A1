const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello world! this is my first node app'))
app.get('/student', (req, res) => res.send('Hello  from student!'))
app.get('/student/grade', (req, res) => res.send('Hello world from student grade!'))

app.listen(port, ()=> console.log(`Example app listening on port ${port}!`))

const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/StudentDB',{useNewUrlParser: true},(err)=> {
//     if(!err) {console.log("MongoDB connection succeeded.")}
//     else{console.log("Error in DB connection: " + err)}
// })
mongoose.connect('mongodb+srv://jh:UdJSuvfxvgQzIFIN@cluster0.txcchdp.mongodb.net/demoDB',{useNewUrlParser: true})
    .then(()=> console.log("MongoDB onnection successful"))
    .catch((err) => console.log(err))