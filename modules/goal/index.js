const model = require('./model')
const { update } = require('../auth/model')

const handlers = {
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
                .populate('tranDau', 'vongDau')
                .populate('cauThuGhiBan', 'tenCauThu')
                .populate('cauThuKienTao', 'tenCauThu')

            res.json(items)
        }
        catch (err) {
            next(err)
        }
    },
    async findGoalById(req, res, next) {
        try {
            let id = req.params.id
            let item = await model.findById(id)
                .populate('tranDau', 'vongDau')
                .populate('cauThuGhiBan', 'tenCauThu')
                .populate('cauThuKienTao', 'tenCauThu')

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
            .populate('tranDau', 'vongDau')
            .populate('cauThuGhiBan', 'tenCauThu')
            .populate('cauThuKienTao', 'tenCauThu')

            res.json(item)
        }
        catch (err) {
            next(err)
        }
    }
}

module.exports = handlers