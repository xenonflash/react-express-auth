const router = require('express').Router()
import auth from './auth.controller'
import user from './user.controller'
import requireAuth from '../middleware/require-auth'

router.post('/login', auth.login)
router.post('/register', auth.register)
router.get('/getUserInfo', requireAuth, auth.getUserInfo)
router.get('/getContacts', requireAuth, user.getContacts)

export default router