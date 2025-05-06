const http = require("http")
const fs = require("fs")
const url = require("url")

const server = http.createServer((req, res) => {
    const d = url.parse(req.url, true)
    let fileLocation
    switch(d.pathname) {
        case "/":
            fileLocation = "pages/index2.html"
            break
        case "/home":
            fileLocation = "pages/index2.html"
            break
        case "/about":
            fileLocation = "pages/about2.html"
            break
        default:
            fileLocation = "pages/index2.html"
            break
    }
    
    fs.readFile(fileLocation, (err, data) => {
        if(err) {
            res.writeHead(404, {"Content-type": "text/html"})
           
           return res.end()
        }
        res.writeHead(200, {"Content-type": "text/html"})
        res.write(data)
        return res.end()
    })
})
server.listen(8000, () => {
    console.log("server run at port 8000")
})