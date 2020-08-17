const model = require('./model')
const mongoose = require('mongoose')

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
            let {
                pageIndex = 1,
                pageSize = 10,
                count,
                sort = 'asc',
                sortBy = 'tenCauThu',
                search = '',
                clubId
            } = req.query
            pageIndex = parseInt(pageIndex)
            pageSize = parseInt(pageSize)
            count = !!count

            let skip = (pageIndex - 1) * pageSize
            let limit = pageSize
            let conditions = {}
            if (search) {
                // find item with title contains search string
                conditions.tenCauThu = new RegExp(search, 'i')
            }
            if (clubId) {
                conditions.club = mongoose.Types.ObjectId(clubId)
            }

            let sortObject = createSortObject(sort, sortBy)

            if (count) {
                let count = await model.countDocuments(conditions)
                res.json({ count })
            } else {
                let items = await model
                    .find(conditions)
                    .skip(skip)
                    .limit(limit)
                    .sort(sortObject)
                    .populate('club', 'tenDoiBong')

                res.json(items)
            }
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
                .populate('club', 'tenDoiBong')

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
            ).populate('club', 'tenDoiBong')
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
                .populate('club', 'tenDoiBong')

            res.json(item)
        }
        catch (err) {
            next(err)
        }
    }

}

function createSortObject(sortStr, sortByStr) {
    let sortBySplit = sortByStr.split(',')
    let sortSplit = sortStr.split(',')
    let sortObject = {}
    for (let i = 0; i < sortBySplit.length; i++) {
        let sortBy = sortBySplit[i]
        let sort = sortSplit[i] == 'asc' ? 1 : -1
        sortObject[sortBy] = sort
    }
    return sortObject
}


module.exports = handlers