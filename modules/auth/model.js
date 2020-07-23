const mongoose = require('mongoose')
const userSchema = require('./schema')

const MODEL_NAME = 'userProfiles'
const COLLECTION_NAME = 'user-profiles'
const model = mongoose.model(
    MODEL_NAME,
    userSchema,
    COLLECTION_NAME
)

// let productModelName = 'products'
// let productModel = 'products'

module.exports = model