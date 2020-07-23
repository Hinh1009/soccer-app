const express = require('express')
const path = require('path')

const staticPath = path.resolve(__dirname, '../../dist')

const router = new express.Router()
const apiAuthRouter = require('./auth/authRoutes')

router.use('/', express.static(staticPath))

router.use('/api/auth', apiAuthRouter)

module.exports = router