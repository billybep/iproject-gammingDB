const bcrypt = require('bcrypt')
const saltRounds = 10

const encryptPassword = (plainPassword) => {
  return bcrypt.hashSync(plainPassword, saltRounds)
}

const decryptPassword = (plainPassword, hashPassword) => {
  return bcrypt.compareSync(plainPassword, hashPassword)
}

module.exports = { encryptPassword, decryptPassword }