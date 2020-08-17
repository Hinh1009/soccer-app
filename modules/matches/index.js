const model = require('./model')
// const { update } = require('../auth/model')
// const { delete } = require('../teams')
const clubModel = require('../teams/model')

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
            let {
                sort = 'desc',
                sortBy = 'vongDau'
            } = req.query

            let sortObject = createSortObject(sort, sortBy)

            let items = await model
                .find({})
                .sort(sortObject)
                .populate('doiChuNha', 'tenDoiBong')
                .populate('doiKhach', 'tenDoiBong')
                .populate('stadium', 'sanNha')
                .populate('logoDoiChuNha', 'logoDoiBong')
                .populate('logoDoiKhach', 'logoDoiBong')

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
                .populate('logodoiChuNha', 'logoDoiBong')
                .populate('logoDoiKhach', 'logoDoiBong')

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
                data,
                {
                    new: true
                }
            )
                .populate('doiChuNha', 'tenDoiBong')
                .populate('doiKhach', 'tenDoiBong')
                .populate('stadium', 'sanNha')
                .populate('logodoiChuNha', 'logoDoiBong')
                .populate('logoDoiKhach', 'logoDoiBong')
            console.log("ID:", item.doiChuNha)
            updateTables(item.soBanDoiNha, item.soBanDoiKhach, item.doiChuNha[0]._id, item.doiKhach[0]._id)
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
                .populate('logodoiChuNha', 'logoDoiBong')
                .populate('logoDoiKhach', 'logoDoiBong')


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

function updateTables(soBanDoiNha, soBanDoiKhach, doiNhaId, doiKhachId) {
    console.log(doiKhachId)
    if (soBanDoiNha > soBanDoiKhach) {
        clubModel.findById(doiNhaId, (err, team) => {
            team.Diem += 3
            team.soTranThang += 1
            team.soBanThang += soBanDoiNha
            team.soBanThua += soBanDoiKhach
            team.hieuSo = (team.soBanThang - team.soBanThua)

            clubModel.findByIdAndUpdate(doiNhaId, team, (err, newhometeam) => {
                console.log("new team: ", newhometeam)
            })
        })

        clubModel.findById(doiKhachId, (err, team) => {
            // team.Diem += 0
            team.soTranThua += 1
            team.soBanThang += soBanDoiKhach
            team.soBanThua += soBanDoiNha
            team.hieuSo = (team.soBanThang - team.soBanThua)

            clubModel.findByIdAndUpdate(doiKhachId, team, (err, newawayteam) => {
                console.log("new team: ", newawayteam)
            })
        })

    }

}


module.exports = handlers