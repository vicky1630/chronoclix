const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router()
const User = require('../models/users.js')

router.get('/new', (req, res) => {
  res.render('sessions/new.ejs', { currentUser: req.session.currentUser })
})

//TO LOG IN
router.post('/', (req, res) => {
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    if (err) {
      console.log(err)
      res.send('oops the db had a problem')
    } else if (!foundUser) {
      res.send('<a  href="/">user not found: GO BACK </a>')
    } else {

      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        req.session.currentUser = foundUser
        res.redirect('/series/')
      } else {
        res.send('<a href="/series"> password does not match: GO BACK </a>')
      }
    }
  })
})

router.delete('/', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/series/')
  })
})

module.exports = router