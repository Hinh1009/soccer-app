const model = require('./model')
// const model = require('./model')
// const mongoose = require('mongoose')

const handlers = {
    //api CRUD
    //Nhap du lieu doi bong
    async create(req, res, next) {
        try {
            let data = req.body
            let item = await model.create(data)
            res.json(item)
            // console.log("AAAAAAAAAAAAAA")
           
        }
        catch (err) {
            next(err)
        }
    },
    async getTeamDatas(req,res,next){
        try{
            let items = await model.find({})

            res.json(items)
        }
        catch(err){
            next(err)
        }
    }
}

module.exports = handlers