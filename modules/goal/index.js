const model = require('./model')

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
                .populate('tranDau','vongDau')
                .populate('cauThuGhiBan', 'tenCauThu')
                .populate('cauThuKienTao', 'tenCauThu')

                res.json(items)
        }
        catch (err) {
            next(err)
        }
    }
}

module.exports = handlers