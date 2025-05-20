const express = require('express')

const router = express.Router()

router.use(express.static('public'))
router.get('/student', (req, res) => {
    res.render('mahasiswa/index')
})
router.get('/lecturer', (req, res) => {
    res.render('dosen/index')
})
router.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, '../pages/index.html'))
    res.render('index')
})

module.exports = router