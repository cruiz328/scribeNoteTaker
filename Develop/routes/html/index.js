const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'../../public/index.html'))
})

//GET dashboard
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/notes.html'))
})
module.exports = router

