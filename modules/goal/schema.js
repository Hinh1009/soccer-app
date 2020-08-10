const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const schema = new mongoose.Schema({
    tranDau: [{
        type: ObjectId,
        ref: 'matchProfiles'
    }],
    cauThuGhiBan:[{
        type: ObjectId,
        ref: 'newPlayerProfiles'
    }],
    cauThuKienTao:[{
        type: ObjectId,
        ref: 'newPlayerProfiles'
    }]
})

module.exports = schema