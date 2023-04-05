const express = require('express')
const router = express.Router()
const controller = require('../controllers/authController')
const authMiddleware = require('../middlewares/authMiddleware')
const { validateUser } = require('../middlewares/validationMiddleware')
const upload = require('../middlewares/upload');

router.post('/register', validateUser, controller.register)
router.post('/login', controller.login)
router.get('/logout', authMiddleware, controller.logout)
router.post('/current', authMiddleware, controller.current)
router.patch('/avatar', authMiddleware, upload.single("avatar"), controller.updateAvatar);

module.exports = router
