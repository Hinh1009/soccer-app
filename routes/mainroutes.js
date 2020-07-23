const express = require('express')
const router = new express.Router()

const authHandlers = require('../modules/auth')
const teamHandlers = require('../modules/teams')
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




module.exports = router