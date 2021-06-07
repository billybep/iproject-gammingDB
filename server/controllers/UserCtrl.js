const { User } = require('../models')
const { decryptPassword } = require('../helpers/bcrypt')
const { encodeToken } = require('../helpers/jwt')
const { OAuth2Client } = require('google-auth-library')
const sendMail = require('../helpers/nodemailer')

class UserCtrl {

  static signup (req, res, next) {
    const newUser = {
      username: req.body.username,
      email   : req.body.email,
      password: req.body.password
    }
    User
      .create({ ...newUser })
      .then(data => res.status(201).json({ 
        id        : data.id,
        username  : data.username,
        email     : data.email
      }), sendMail(newUser.username, newUser.email))
      .catch(err => next(err))
  }

  static signin (req, res, next) {
    const { email, password } = req.body

    User
      .findOne({ where: { email }})
      .then(found => {
        if (!found) res.status(404).json({ message: 'Wrong email/password' })
        else {
          if (decryptPassword(password, found.password)) {
            const access_token = encodeToken({ id: found.id, email: found.email, username: found.username })
            res.status(200).json({ id: found.id, email: found.email, username: found.username, access_token })
          } else res.status(404).json({ message: 'Wrong email/password' })
        }
      })
      .catch(err => next(err))
  }

  static googleLogin (req, res, next) {
    const {idToken} = req.body
    const client = new OAuth2Client(process.env.CLIENT_ID)
    let email;

    client.verifyIdToken({
      idToken: idToken,
      audience: process.env.CLIENT_ID
    })
    .then(ticket => {
      const payload = ticket.getPayload()
      email = payload.email

      return User.findOne({ where: { email }})
    })
    .then(found => {
      if (found) return found
      else {
        const newGoogleUser = {
          username : email,
          email,
          password : Math.random()*1000 + 'googleLogin'
        }
        return User.create({ ...newGoogleUser })
      }
    })
    .then(newUser => {
      const payload = { id: newUser.id, username: newUser.username, email: newUser.email }
      const access_token = encodeToken(payload)
      res.status(200).json({ 
        id      : newUser.id, 
        username: newUser.username, 
        email   : newUser.email, 
        access_token 
      })
      sendMail(newUser.username, newUser.email)
    })
    .catch(err => next(err))
  }

}

module.exports = UserCtrl