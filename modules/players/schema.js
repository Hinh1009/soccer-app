const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const schema = new mongoose.Schema({
    tenCauThu: {
        type: String,
        required: [true, "Yeu cau ten cau thu"]
    },
    namSinh: {
        type: Number,
        require: [true, "Yeu cau nhap tuoi"]
    },
    club:[{
        type:ObjectId,
        ref:'teamProfiles'
    }],
    soAo: {
        type: Number,
        required: [true, "Yeu cau so ao cau thu"],
        unique:false
    },
    viTri: {
        type: String,
        required: [true, "Yeu cau vi tri"],
    },
    quocTich: {
        type: String,
        required: [true, "Yeu cau quoc tich cau thu"],
    },
    chieuCao: {
        type: Number,
        required: [true, "Yeu cau chieu cao cau thu"]
    },
    canNang: {
        type: Number,
        required: [true, "Yeu cau can nang"]
    },
    avatarUrl: {
        type: String,
        required: [true, "Yeu cau nhan dien cau thu"],
        default:"sdfghjklasjdh.jpg"
    },
    soBan: {
        type: String,
        required: [true],
        default: 0
    },
    kienTao: {
        type: String,
        required: [true],
        default: 0
    }
})

module.exports = schema