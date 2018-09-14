const router = require('express').Router()
import auth from './auth.controller'

router.post('/login', auth.login)
router.post('/register', auth.register)
router.post('/getUserInfo', auth.getUserInfo)

export default router