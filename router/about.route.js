const express = require('express')
const router = express.Router()
const aboutController = require('../controller/about.controller')




  router.route('/')
        .post(aboutController.createAbout)
  router.route('/')
        .get(aboutController.getAbout)








module.exports = router;