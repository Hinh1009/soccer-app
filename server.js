const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

const router = require('./routes/mainroutes')
const port = 1900

//middleware
app.use(bodyParser.json())
app.use(router)

app.get('/', (req, res, next) => {
    console.log(req.body)
    //req.body,req.method,req.header,req.query....
    //res.send(),res.end(),res.body(),res.status()
    res.status(200)
        .send('Hello world')
})
app.listen(port, (err) => {
    if (err) {
        console.error("Server cannot open",err)
    }
    else {
        console.log(`server open on port ${port}`)
    }
})

const connectionString = "mongodb://localhost:27017/final-project"
const db = mongoose.connect(connectionString,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log('Connect success to MongoDB')
})
.catch(err=>{
    console.error("Connect failed",err)
})

