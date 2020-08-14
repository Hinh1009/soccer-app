const model = require('./model')
// const { update } = require('../auth/model')
const mongoose = require('mongoose')

const handlers = {
    //api CRUD
    //Nhap du lieu doi bong
    async create(req, res, next) {
        try {
            let data = req.body
            calcDiem(data)
            calcHieuSo(data)
            let item = await model.create(data)
            res.json(item)

        }
        catch (err) {
            next(err)
        }
    },
    async getTeamDatas(req, res, next) {
        try {
            let { sort = 'desc,desc,desc',
                sortBy = 'Diem,hieuSo,soBanThang' } = req.query
            let sortObject = createSortObject(sort, sortBy)

            let items = await model.find({})
                .sort(sortObject)

            res.json(items)
        }
        catch (err) {
            next(err)
        }
    },
    async getTeamById(req, res, next) {
        try {
            let id = req.params.id
            let item = await model.findById(id)
            res.json(item)
        }
        catch (err) {
            next(err)
        }
    },
    async update(req, res, next) {
        try {
            let data = req.body
            let { _id: id, ...dataToUpdate } = data
            if (!id) {
                throw new Error("Missing id")
            }
            let item = await model.findById(id)
            Object.assign(item, dataToUpdate)
            calcDiem(item)
            calcHieuSo(item)
            await item.update()
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

            res.json(item)
        }
        catch (err) {
            next(err)
        }
    }
}
function calcDiem(team) {
    let { soTranThang = 0, soTranHoa = 0 } = team
    team.Diem = soTranThang * 3 + soTranHoa
    return team
}

function calcHieuSo(team) {
    let { soBanThang = 0, soBanThua = 0 } = team
    team.hieuSo = soBanThang - soBanThua
    return team
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