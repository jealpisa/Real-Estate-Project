process.stdout.write('\x1B[2J\x1B[0f') // Clear terminal screen
require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')

;(async function () {
  // MONGOOSE
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: process.env.MONGO_DB || 'realestateproject',
    })
    console.info('>'.repeat(40))
    console.info('✅  Database Connected with Success!')
  } catch (err) {
    throw new Error(`Error connecting to DB: ${err}`)
  }

  try {
    // Router & Middlewares
    const app = express()
      .use(cors())
      .use(morgan('combined'))
      .use(express.json())
      .use('/', apiRouter)

    // Starting the Server here
    const PORT = process.env.PORT
    app.listen(PORT, (err) => {
      if (err) {
        throw new Error(err)
      }
      console.info('>'.repeat(40))
      console.info('💻  Welcome to realEstate Server')
      console.info(`📡  PORT: http://localhost:${PORT}`)
      console.info('>'.repeat(40) + '\n')
    })
  } catch (error) {
    throw new Error(error)
  }
})()

const apiRouter = require('./src/routes/index')
const res = require('express/lib/response')
