if (process.env.NODE_ENV !== "production") require('dotenv').config()

const express = require('express')
const app = express()
const router = require('./routes')
const cors = require('cors')
const errorHandler = require('./middlewares/errorHandler')
const PORT = process.env.PORT || 3050

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(router)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`engeims app listening at http://localhost:${PORT}`)
})