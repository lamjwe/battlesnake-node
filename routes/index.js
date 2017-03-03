var express = require('express')
var router  = express.Router()
// const addon = require('../build/Release/addon');
// Handle POST request to '/start'
router.post('/start', function (req, res) {
  // NOTE: Do something here to start the game

  // Response data
  var data = {
    color: "#DFFF00",
    name: "Trump Snake",
    head_url: "http://www.placecage.com/c/200/200", // optional, but encouraged!
    taunt: "Let's do thisss thang!", // optional, but encouraged!
  }

  return res.json(data)
})

// Handle POST request to '/move'
router.post('/move', function (req, res) {
  // NOTE: Do something here to generate your move
  // debugger;
  // console.log('This should be eight:', addon.add(3, 5));
  // Response data
  var data = {
    move: 'up', // one of: ['up','down','left','right']
    taunt: 'Outta my way, snake!', // optional, but encouraged!
  }

  return res.json(data)
})

module.exports = router
