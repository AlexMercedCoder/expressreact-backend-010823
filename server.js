const express = require("express")
const cors = require("cors")
const PORT = process.env.PORT || 4000

const app = express()

app.use(cors())


app.get("*", (req, res) => {
    res.json({name: "Alex Merced"})
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))