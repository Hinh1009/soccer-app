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
router.delete('/api/team/:id',teamHandlers.delete)

//api Epl players routes
router.post('/api/players',playerHandlers.create)
router.get('/api/players',playerHandlers.findMany)
router.get('/api/players/:id',playerHandlers.findPlayerById)
router.put('/api/players',playerHandlers.updatePlayer)
router.delete('/api/players/:id',playerHandlers.delete)

//api Epl matches routes
router.post('/api/matches',matchHandlers.create)
router.get('/api/matches',matchHandlers.findMany)
router.get('/api/matches/:id',matchHandlers.findMatchById)
router.put('/api/matches',matchHandlers.update)
router.delete('/api/matches/:id',matchHandlers.delete)

//api goal routes
router.post('/api/goal',goalHandlers.create)
router.get('/api/goal',goalHandlers.findMany)
router.get('/api/goal/:id',goalHandlers.findGoalById)
router.put('/api/goal',goalHandlers.update)
router.delete('/api/goal/:id',goalHandlers.delete)

module.exports = router