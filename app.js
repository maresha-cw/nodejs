const express = require('express')

const app = express()
const myRouter = require('./routes/route')

app.use(express.urlencoded({ extended: false }))
app.use(myRouter)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})