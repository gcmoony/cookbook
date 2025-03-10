const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router()
const User = require('../models/User')

// @route POST api/users/login
// @desc Creates a new user account
// @access Public
router.post('/signup', async (req, res) => {
  const uHash = await bcrypt.hash(req.body.password, 10)
  const newUser = {
    username: req.body.username, 
    password: uHash
  }
  
  User.findOne().byLogin(req.body.username)
    .then(user => {
      // Verify no existing user
      if(user){
        res.json({
          userdupe: "Username already taken"
        })
      }

      // Create new user
      else {
        User.create(newUser)
          .then(user => {
            res.json({
              msg: "Account created"
            })
          })
          // API error
          .catch(e => res.status(400).json({
            error: "Unable to create account"
          }))
      }
      
    })
  
})



// @route POST api/users/login
// @desc Checks login, send JWT on success?
// @access Public
router.post('/login', async (req, res) => {

  // Find by username
  await User.findOne().byLogin(req.body.username)
    .then( async (user) => {

      // Account exists
      if(user) {
        // Verify password
        const passEq = await bcrypt.compare(req.body.password, user.password)

        // Success
        if(passEq){
          res.json({success: "Login success"})
          // Handle token
        }
        // Failed
        else {
          res.json({failed: "Incorrect password"})
        }
      }

      // Account does not exist
      else 
        res.json({dne : "Account DNE"})
    })
    // Error logging in
    .catch(e => {
      res.status(404).json({
        loginerror: "Login error"
      })
    })
})

module.exports = router