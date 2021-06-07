const gameRoute = require('express').Router()
const GameCtrl = require('../controllers/GameCtrl')
const { authenticate } = require('../middlewares/auth')

gameRoute.get('/', GameCtrl.showGame)
gameRoute.post('/filter', GameCtrl.filterGame)
gameRoute.get('/detail/:id', GameCtrl.detailGame)

gameRoute.use(authenticate)
gameRoute.post('/', GameCtrl.wishlist)
gameRoute.get('/wishlists', GameCtrl.showWishlist)
gameRoute.delete('/wishlists/:id', GameCtrl.deleteWishlist)

module.exports = gameRoute