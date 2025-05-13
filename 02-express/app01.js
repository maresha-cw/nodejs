const http = require("http")
const express = require("express")

const app = express()

const server = http.createServer(app)

server.listen(8000, () => {
    console.log("server run at port 8000")
})