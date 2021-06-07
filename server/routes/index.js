const router = require('express').Router()
const userRoute = require('./user')
const gameRoute = require('./game')

router.get('/', (req,res) => res.send('Running!!'))

router.use('/users', userRoute)
router.use('/games', gameRoute)

module.exports = router