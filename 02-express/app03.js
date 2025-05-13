const express = require("express")

const app = express()
const myRouter = require("./route/route.js")

app.use(express.urlencoded({
    extended: false
}))

app.use(myRouter)
app.use((req,res) => {
    res.status(404).send(`
        <h1>Page Not Found</h1>
        <a href="/">Go Back</a>
    `)
})

app.listen(8000, () => {
    console.log("Server (Express) run at port 8000")
})