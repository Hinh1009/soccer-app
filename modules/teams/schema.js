const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    tenDoiBong: {
        type: String,
        required: [true, "Yeu cau nhap ten doi bong"],
        unique: true
    },
    namThanhLap: {
        type: Number,
        required: [true, "Yeu cau nhap nam thanh lap"]
    },
    logoDoiBong: {
        type: String,
        required: [true, "Yeu cau ava doi bong"],
        default: "asdfghjkl.jpg"
    },
    sanNha: {
        type: String,
        required: [true, "Doi nao chang can co san nha"]
    },
    stadiumImg: {
        type: String,
        required: [true, "Cho xin anh san van dong due"],
        default: "not have stadium now"
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
    },
    description: {
        type: String,
        required: [true, "Them mo ta doi bong"],
        default: "An U.K profesional Football"
    }
})

module.exports = schema