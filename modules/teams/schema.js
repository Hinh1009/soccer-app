const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    tenDoiBong: {
        type: String,
        required: [true, "Yeu cau nhap ten doi bong"],
        unique:true
    },
    namThanhLap: {
        type: Number,
        required: [true, "Yeu cau nhap nam thanh lap"]
    },
    logoDoiBong: {
        type: String,
        required: [true, "Yeu cau ava doi bong"]
    },
    sanNha: {
        type: String,
        required: [true, "Doi nao chang can co san nha"]
    },
    tenHLV: {
        type: String,
        required: [true, "Yeu cau nhap ten HLV"]
    },
    Diem: {
        type: Number,
        required: [true, "Co diem moi tru hang duoc"],
        default: 0
    },
    soTranThang: {
        type: Number,
        required: [true, "Co diem moi tru hang duoc"],
        default: 0
    },
    soTranHoa: {
        type: Number,
        required: [true, "Co diem moi tru hang duoc"],
        default: 0
    },
    soTranThua: {
        type: Number,
        required: [true, "Co diem moi tru hang duoc"],
        default: 0
    },
    soBanThang: {
        type: Number,
        required: [true, "Co diem moi tru hang duoc"],
        default: 0
    },
    soBanThua: {
        type: Number,
        required: [true, "Co diem moi tru hang duoc"],
        default: 0
    },
    hieuSo: {
        type: Number,
        required: [true, "Co diem moi tru hang duoc"],
        default: 0
    }
})

module.exports = schema