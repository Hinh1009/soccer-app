const model = require('./model')
// const { update } = require('../auth/model')
const mongoose = require('mongoose')

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
    async getTeamDatas(req, res, next) {
        try {
            let items = await model.find({})

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

            res.json(item)
        }
        catch (err) {
            next(err)
        }
    }
}

module.exports = handlers