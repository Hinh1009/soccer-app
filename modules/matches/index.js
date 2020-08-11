const model = require('./model')
// const { update } = require('../auth/model')
// const { delete } = require('../teams')

const handlers = {
    //api CRUD
    // Nhap du lieu tran dau
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
    async findMany(req, res, next) {
        try {
            let items = await model
                .find({})
                .populate('doiChuNha', 'tenDoiBong')
                .populate('doiKhach', 'tenDoiBong')
                .populate('stadium', 'sanNha')

            res.json(items)
        }
        catch (err) {
            next(err)
        }
    },
    async findMatchById(req, res, next) {
        try {
            let id = req.params.id
            let item = await model
                .findById(id)
                .populate('doiChuNha', 'tenDoiBong')
                .populate('doiKhach', 'tenDoiBong')
                .populate('stadium', 'sanNha')

            res.json(item)
        }
        catch (err) {
            next(err)
        }
    },
    async update(req, res, next) {
        try {
            let data = req.body
            let id = data._id
            if (!id) {
                throw new Error("Missing id")
            }
            let item = await model.findByIdAndUpdate(
                id,
                data, {
                new: true
            }
            )
                .populate('doiChuNha', 'tenDoiBong')
                .populate('doiKhach', 'tenDoiBong')
                .populate('stadium', 'sanNha')

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
                .populate('doiChuNha', 'tenDoiBong')
                .populate('doiKhach', 'tenDoiBong')
                .populate('stadium', 'sanNha')

            res.json(item)
        }
        catch (err) {
            next(err)
        }
    }
}

module.exports = handlers