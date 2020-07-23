const userModel = require('./model')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
// const { delete } = require('../product')
const JWT_SECRET = "my secret string"
const { hashMD5,
    signtoken,
    verifyToken } = require('../utils')
// const model = require('../product/model')

const handlers = {
    async signIn(req, res, next) {
        // throw new Error('Not yet supp')
        try {
            let data = req.body
            // let user = await user.Model.findOne({ email: data.email})
            let { email, password } = data
            if (!email) {
                throw new Error('Missing email')
            }
            if (!password) {
                throw new Error('Missing password')
            }

            let formatedEmail = String(email).toLowerCase().trim()
            let hashedPassword = hashMD5(password)

            let user = await userModel.findOne({ email: formatedEmail })
            if (!user) {
                throw new Error('Invalid email or password')
            }
            if (user.password != hashedPassword) {
                throw new Error('Invalid email or password')
            }

            let userData = user.toObject()
            delete userData.password

            let accessToken = signtoken(userData)
            userData.accessToken = accessToken
            res.json(userData)

        }
        catch (err) { next(err) }
    },

    async signUp(req, res, next) {
        // throw new Error('Not yet supp')
        try {
            let data = req.body

            if (typeof data.password != 'string' || !(data.password.length >= 6 && data.password.length <= 30)) {
                throw new Error('Invalid password! Password length between 6 & 30')
            }
            data.password = hashMD5(data.password)
            data.email = String(data.email).toLowerCase().trim()
            data.state = 'available'
            let user = await userModel.create(data)
            let userData = user.toObject()
            delete userData.password
            res.json(user)
        }
        catch (err) {
            next(err)
        }
    
    },

    async readTokenMiddleware(req, res, next) {
        try {
            let accessToken = req.headers.authorization
            if (accessToken) {
                let userData = verifyToken(accessToken)
                req.user = userData
            }
            next()
        } catch (err) {
            next(new Error('Invalid access token!'))
        }
    },

    async authenticationTokenMiddleware(req, res, next) {
        try {
            let user = req.user
            if (!user || !user._id) {
                throw new Error('Unauthenticated')
            } else {
                next()
            }
        }
        catch (err) {
            next(err)
        }
    }

}

// function hashMD5(str) {
//     return crypto.createHash('md5').update(str).digest('hex')
// }

// function signtoken(object){
//     return jwt.sign(Object, JWT_SECRET,{
//         expiresIn: "6h",
//         // notBefore:""
//     })
// }

// function verifyToken(token){
//     return jwt.verify(token, JWT_SECRET)
// }
// console.log(signtoken({name:"Hinh",password:"123123"}))
module.exports = handlers