const crypto = require('crypto')
const jwt = require('jsonwebtoken')
// const { delete } = require('../product')
const JWT_SECRET = "my secret string"
/**
 * @summary this func will hash a string by algoritm
 * @param {String} str 
 * @returns {String}
 */
function hashMD5(str) {
    return crypto.createHash('md5').update(str).digest('hex')
}

function signtoken(object) {
    return jwt.sign(object, JWT_SECRET, {
        expiresIn: "6h",
        // notBefore:""
    })
}

function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET)
}


module.exports = {
    hashMD5,
    signtoken,
    verifyToken
}

