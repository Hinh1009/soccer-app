const model = require('./model')

const handlers = {
    //api CRUD
    //Nhap du lieu cau thu
    async create(req, res, next) {
        try {
            let data = req.body
            let item = await model.create(data)
            res.json(item)
        }
        catch (err) {
            next(err)
        }
    },
    //In ra du lieu tat ca cau thu 
    async findMany(req, res, next) {
        try {
            let items = await model
                .find({})
                .populate('CLB','tenDoiBong')

            res.json(items)
        }
        catch (err) {
            next(err)
        }
    }
}

module.exports = handlers