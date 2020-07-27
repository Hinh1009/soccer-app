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
                .populate('CLB', 'tenDoiBong')

            res.json(items)
        }
        catch (err) {
            next(err)
        }
    },
    async findPlayerById(req, res, next) {
        try {
            let id = req.params.id
            let item = await model
                .findById(id)
                .populate('CLB', 'tenDoiBong')

            res.json(item)
        }
        catch (err) {
            next(err)
        }
    },
    async updatePlayer(req, res, next) {
        try {
            let data = req.body
            let id = data._id
            if (!id) {
                throw new Error("Missing ID")
            }
            let item = await model.findByIdAndUpdate(
                id,
                data,
                { new: true }
            ).populate('CLB','tenDoiBong')
            res.json(item)
        }
        catch (err) {
            next(err)
        }
    },
    async delete(req, res, next) {
        try {
            let id = req.params.id

            let item = await model.findByIdAndDelete(id)
                .populate('CLB', 'tenDoiBong')

            res.json(item)
        }
        catch (err) {
            next(err)
        }
    }

}

module.exports = handlers