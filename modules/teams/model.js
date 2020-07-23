const mongoose = require('mongoose')
const teamSchema = require('./schema')

const MODEL_NAME = 'teamProfiles'
const COLLECTION_NAME = 'team-profiles'
const model = mongoose.model(
    MODEL_NAME,
    teamSchema,
    COLLECTION_NAME
)

module.exports = model