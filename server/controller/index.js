const router = require('express').Router()
import auth from './auth.controller'
import requireAuth from '../middleware/require-auth'

router.post('/login', auth.login)
router.post('/register', auth.register)
router.get('/getUserInfo', requireAuth, auth.getUserInfo)

export default router