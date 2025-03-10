const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
},
  {
    query: {
      byLogin(username) {
        return this.where({username: username})
      }
    }
  }
)

module.exports = User = mongoose.model('user', UserSchema)