const express = require("express")

const app = express()
app.use(express.urlencoded({
    extended: false
}))

app.use("/page2", (req, res) => {
    console.log("URL dengan path /page2")
    console.log("data from page 1: ", req.body)
    res.send("<h1>Welcome to Page 2</h1>")
})
app.use("/page1", (req, res) => {
    console.log("URL dengan path /page1")
    res.send(`<form method="post" action="/page2">
        <div>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="" maxlength="100" required autofocus>
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="" required >
        </div>
        <div>
            <input type="submit" value="Login">
        </div>
    </form>`)
})
app.use("/", (req, res) => {
    console.log("URL dengan path /")
    res.send("<h1>Welcome to Dashboard</h1>")
})

app.listen(8000, () => {
    console.log("Server (Express) run at port 8000")
})