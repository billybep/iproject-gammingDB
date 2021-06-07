const axios = require ('axios')
const { Game } = require('../models')

class GameCtrl {
  
  static showGame (req, res, next) {
    
    axios({
      url: "https://api.igdb.com/v4/games",
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Client-ID': process.env.AXIOS_CLIENT_ID,
          'Authorization': `Bearer ${process.env.AXIOS_AUTHORIZATION}`
      },
      data: "fields name,cover.url,rating_count,genres.name; limit 250; sort release_dates.date desc; where rating >= 80 & release_dates.y > 2017;"
    })
    .then(({ data }) => {
      res.status(200).json({ data })
    })
    .catch(err => next(err))

  }

  static filterGame (req, res, next) {
    const platform = req.body.platform
    axios({
      url: "https://api.igdb.com/v4/games",
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Client-ID': process.env.AXIOS_CLIENT_ID,
          'Authorization': `Bearer ${process.env.AXIOS_AUTHORIZATION}`
      },
      data: `fields name,cover.url,rating_count,genres.name,platforms.name; 
            limit 100; sort release_dates.date desc; 
            where rating >= 80 & release_dates.platform = (${platform});`
    })
    .then(({ data }) => {
      res.status(200).json({ data })
    })
    .catch(err => next(err))

  }

  static wishlist (req, res, next) {
    const wishlist = {
      name  : req.body.name,
      gameId: req.body.id,
      UserId: req.currentUser.id
    }

    Game
      .create({ ...wishlist })
      .then(wishlist => res.status(201).json({ wishlist }))
      .catch(err => next(err))
  }

  static showWishlist (req, res, next) {
    Game
      .findAll({ where: { UserId: req.currentUser.id}})
      .then(wishlists => {
        if (!wishlists.length) res.status(200).json({ wishlist: [] })
        else {
          const favorite = wishlists.reduce((acc, each, idx) => {
            acc += each.gameId
            if (idx !== wishlists.length-1) acc += ','
            else acc += ')'
            return acc
          },'(')
          return favorite
        }
      })
      .then(favorite => {

        axios({ 
          url: "https://api.igdb.com/v4/games",
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Client-ID': process.env.AXIOS_CLIENT_ID,
              'Authorization': `Bearer ${process.env.AXIOS_AUTHORIZATION}`
          },
          data: `fields 
                name,cover.url,involved_companies.company.name, summary; 
                sort rating desc; 
                where id = ${favorite};`
        })
        .then(({ data }) => {
          res.status(200).json({ data })
        })
        .catch(err => next(err))
      })
      .catch(err => console.log(err))
  }

  static deleteWishlist (req, res, next) {
    const id = req.params.id

    Game
      .destroy({ where: { gameId: id }})
      .then(_ => res.status(200).json({ message: 'Success delete!' }))
      .catch(err => next(err))
  }

  static detailGame (req, res, next) {
    const gameId = req.params.id

    axios({ 
      url: "https://api.igdb.com/v4/games",
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Client-ID': process.env.AXIOS_CLIENT_ID,
          'Authorization': `Bearer ${process.env.AXIOS_AUTHORIZATION}`
      },
      data: `fields
            name,cover.url,involved_companies.company.name,platforms.name,summary,url,videos.video_id;
            where id = ${gameId};`
    })
    .then(({ data }) => {

      const developer = data[0].involved_companies.reduce((acc, each, idx) => {
        acc += each.company.name
        if (idx != data[0].involved_companies.length-1) acc += ', '
        return acc
      },'')

      const platform = data[0].platforms.reduce((acc, each, idx) => {
        acc += each.name
        if (idx != data[0].platforms.length-1) acc += ', '
        return acc
      },'')

      res.status(200).json({ detailGame : { detail: data, developer, platform } })
    })
    .catch(err => next(err))
  }

}

module.exports = GameCtrl