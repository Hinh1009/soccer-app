const mongoose = require('mongoose')
const matchSchema = require('./schema')

const MODEL_NAME = 'matchProfiles'
const COLLECTION_NAME = 'match-profiles'
const model  = mongoose.model(
    MODEL_NAME,
    matchSchema,
    COLLECTION_NAME
)

module.exports = model