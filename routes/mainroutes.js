const express = require('express')
const router = new express.Router()

const authHandlers = require('../modules/auth')
const teamHandlers = require('../modules/teams')
const playerHandlers = require('../modules/players')
const matchHandlers = require('../modules/matches')
const goalHandlers = require('../modules/goal')

//api auth routes
router.post('/api/auth/sign-up',authHandlers.signUp)
router.post('/api/auth/sign-in',authHandlers.signIn)


//api Epl teams routes
/**
 * only @dev 
 */
router.post('/api/team',teamHandlers.create)

/**
 * for @all_viewer
 */
router.get('/api/team',teamHandlers.getTeamDatas)
router.get('/api/team/:id',teamHandlers.getTeamById)
router.put('/api/team',teamHandlers.update)

//api Epl players routes
router.post('/api/player',playerHandlers.create)
router.get('/api/player',playerHandlers.findMany)

//api Epl matches routes
router.post('/api/matches',matchHandlers.create)
router.get('/api/matches',matchHandlers.findMany)

//api goal routes
router.post('/api/goal',goalHandlers.create)
router.get('/api/goal',goalHandlers.findMany)

module.exports = router