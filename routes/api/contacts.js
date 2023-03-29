const express = require('express')
const router = express.Router()

const contacts = require('../../controllers/controller')
const authMiddleware = require('../../middlewares/authMiddleware')
const { validateContacts } = require('../../middlewares/validationMiddleware')

router.get('/contacts', authMiddleware, contacts.get)
router.get('/contacts/:contactId', authMiddleware, contacts.getById)
router.post('/contacts', authMiddleware, validateContacts, contacts.create)
router.put('/contacts/:contactId', authMiddleware, contacts.update)
router.delete('/contacts/:contactId', authMiddleware, contacts.remove)
router.patch(
  '/contacts/:contactId/favorite',
  authMiddleware,
  contacts.updateStatus,
)

module.exports = router
