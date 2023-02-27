const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello world! this is my first node app'))
app.get('/student', (req, res) => res.send('Hello  from student!'))
app.get('/student/grade', (req, res) => res.send('Hello world from student grade!'))
app.listen(port, ()=> console.log(`Example app listening on port ${port}!`))

