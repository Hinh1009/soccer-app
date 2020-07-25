const mongoose = require('mongoose')
const goalesSchema = require('./schema')

const MODEL_NAME = 'goalProfiles'
const COLLECTION_NAME = 'goal-profiles'
const model  = mongoose.model(
    MODEL_NAME,
    goalesSchema,
    COLLECTION_NAME
)

module.exports = model