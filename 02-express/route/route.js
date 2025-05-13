const path = require("path")
const express = require("express")

const router = express.Router()

router.post("/page2", (req, res) => {
    res.send(`<h1>Welcome to Page 2</h1>
        <p>Hello ${req.body.email}</p>
    `)
})
router.get("/page1", (req, res) => {

    res.sendFile(path.join(__dirname, "../pages", "login.html"))
    
})
router.get("/", (req, res) => {

    res.sendFile(path.join(__dirname, "../pages", "index.html"))
})

module.exports = router