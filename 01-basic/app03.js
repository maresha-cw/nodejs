const http = require("http")
const fs = require("fs")
const url = require("url")

const server = http.createServer((req, res) => {
    const d = url.parse(req.url, true)
    if(req.method === "GET" && d.pathname === "/login") {
        fs.readFile("pages/login.html", (err, data) => {
            if(err) {
                res.writeHead(404, {"Content-type": "text/html"})
               
               return res.end()
            }
            res.writeHead(200, {"Content-type": "text/html"})
            res.write(data)
            return res.end()
        })
    }
    
    if(req.method === "POST" && d.pathname === "/login") {
        const data = []
        req.on("data", (chunk) => {
            console.log(chunk)
            data.push(chunk)
        })
        req.on("end", () => {
            const data2 = Buffer.concat(data).toString()
            console.log(data2)
        })
        res.writeHead(200, {"Content-type": "text/html"})
        return res.end()
    }
    
})
server.listen(8000, () => {
    console.log("server run at port 8000")
})