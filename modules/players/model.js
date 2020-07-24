const mongoose = require('mongoose')
const playerSchema = require('./schema')

const MODEL_NAME = 'playerProfiles'
const COLLECTION_NAME = 'player-profiles'
const model = mongoose.model(
    MODEL_NAME,
    playerSchema,
    COLLECTION_NAME
)

module.exports = model