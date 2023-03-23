const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(cors());

const contactsRouter = require('./routes/api/contacts');
app.use('/api/contacts', contactsRouter);

app.use((_, res, __) => {
  res.status(404).json({
    status: 'error',
    code: 404,
    message: 'Use api on routes: /api/contacts',
    data: 'Not found',
  })
})

app.use((err, _, res, __) => {
  console.log(err.stack)
  res.status(500).json({
    status: 'fail',
    code: 500,
    message: err.message,
    data: 'Internal Server Error',
  })
})

const urlDb = "mongodb+srv://mkonopikhina25:aMueC0VQkM5SZ83Q@cluster0.9e87vyr.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(urlDb)
  .then(() => 
    app.listen(3000, () => console.log("Database connection successfull")))
  .catch(error => {
    console.log(error.message)
    process.exit(1)
})

