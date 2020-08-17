const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const schema = new mongoose.Schema({
    doiChuNha: [{
        type: ObjectId,
        ref: 'teamProfiles',
        required: [true, "Yeu cau can co doi chu nha"]
    }],
    doiKhach: [{
        type: ObjectId,
        ref: 'teamProfiles',
        required: [true, "Yeu cau can co doi khach"]
    }],
    logoDoiChuNha: [{
        type: ObjectId,
        ref: 'teamProfiles',
        required: [true, "Yeu cau can co doi khach"]
    }],
    logoDoiKhach: [{
        type: ObjectId,
        ref: 'teamProfiles',
        required: [true, "Yeu cau can co doi khach"]
    }],
    stadium: [{
        type: ObjectId,
        ref: 'teamProfiles',
        required: [true, "Svd cua doi chu nha"]
    }],
    vongDau: {
        type: Number,
        required: [true, 'Yeu cau biet lich su dau']
    },
    soBanDoiNha: {
        type: Number,
        required: [true, 'Yeu cau ban thang'],
        default: 0
    },
    soBanDoiKhach: {
        type: Number,
        required: [true, 'Yeu cau ban thang'],
        default: 0
    },
    thoiGian: {
        type: Date,
        required: [true, 'Yeu cau thoi gian dien ra tran dau'],
        default: '2020/1/1'
    },
    hightLightUrl: {
        type: String,
        required: [true, 'Danh cho fan cua tran dau 5'],
        default: 'Oopps!!!!Sorry!!!Tran dau van chua co hightlight hoac van chua dien ra'
    },
    status: {
        type: Boolean,
        default: false
    }
})

module.exports = schema