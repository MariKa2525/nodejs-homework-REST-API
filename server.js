const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(cors())

const userRouter = require('./routes/userRouter')
app.use('/users/', userRouter)

const contactsRouter = require('./routes/api/contacts')
app.use('/api/contacts', contactsRouter)

app.use((err, req, res, next) => {
  const { message, statusCode = 500 } = err
  res.status(statusCode).json({ error: message })
})

mongoose
  .connect(PORT)
  .then(() =>
    app.listen(3000, () => console.log('Database connection successfull')),
  )
  .catch((error) => {
    console.log(error.message)
    process.exit(1)
  })
