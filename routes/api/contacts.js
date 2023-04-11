const express = require('express')
const router = express.Router()

const contacts = require('../../controllers/controller')
const checkJwt = require('../../middlewares/authMiddleware')
const { validateContacts } = require('../../middlewares/validationMiddleware')

router.get('/contacts', checkJwt, contacts.get)
router.get('/contacts/:contactId', checkJwt, contacts.getById)
router.post('/contacts', checkJwt, validateContacts, contacts.create)
router.put('/contacts/:contactId', checkJwt, contacts.update)
router.delete('/contacts/:contactId', checkJwt, contacts.remove)
router.patch(
  '/contacts/:contactId/favorite',
  checkJwt,
  contacts.updateStatus,
)

module.exports = router
