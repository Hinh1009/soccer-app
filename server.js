const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const mongoose = require('mongoose')
const router = require('./routes/mainroutes')
const { readTokenMiddleware, authenticationTokenMiddleware } = require('./modules/auth/index')
const app = express()


const port = 1900

//middleware
app.use(bodyParser.json())

app.use(session({
    secret: 'my secret string',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 60 * 12 * 1000 } // 12 hours
}))

//
app.use(readTokenMiddleware)

app.get('/not-require-token', (req, res) =>
    res.send('Success')
)

app.get('/require-token',
    authenticationTokenMiddleware,
    (req, res) => res.send('Success !')
)

//cors
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS");
    next()
})

app.use(router)

app.use((err, req, res, next) => {
    let message = err.message
    res.status(500)
        .json({
            message: err.message,
            stack: err.stack
        })
    console.log(message)
})
app.listen(port, (err) => {
    if (err) {
        console.error("Server cannot open", err)
    }
    else {
        console.log(`server open on port ${port}`)
    }
})

const connectionString = "mongodb://localhost:27017/final-project"
const db = mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connect success to MongoDB')
    })
    .catch(err => {
        console.error("Connect failed", err)
    })

