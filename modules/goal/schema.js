const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const schema = new mongoose.Schema({
    tranDau: [{
        type: ObjectId,
        ref: 'matchProfiles'
    }],
    cauThuGhiBan:[{
        type: ObjectId,
        ref: 'playerProfiles'
    }],
    cauThuKienTao:[{
        type: ObjectId,
        ref: 'playerProfiles'
    }]
})

module.exports = schema