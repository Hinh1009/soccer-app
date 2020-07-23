const express = require('express')
const router = new express.Router()
const path = require('path')

// const staticPath = path.resolve(__dirname, '../../dist')

const authHandlers = require('../modules/auth')

//api auth routes
router.post('/api/auth/sign-up',authHandlers.signUp)
router.post('/api/auth/sign-in',authHandlers.signIn)


// router.use('/', express.static(staticPath))



module.exports = router