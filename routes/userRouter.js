const express = require('express')
const router = express.Router()
const controller = require('../controllers/authController')
const authMiddleware = require('../middlewares/authMiddleware')
const { validateUser } = require('../middlewares/validationMiddleware')

router.post('/register', validateUser, controller.register)
router.post('/login', controller.login)
router.get('/logout', authMiddleware, controller.logout)
router.post('/current', authMiddleware, controller.current)

module.exports = router
