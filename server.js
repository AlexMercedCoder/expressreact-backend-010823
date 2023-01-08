const express = require("express")
const cors = require("cors")
const PORT = process.env.PORT || 4000

var whitelist = ['https://express-react-front-080123.onrender.com/']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}


const app = express()

app.use(cors(corsOptions))


app.get("*", (req, res) => {
    res.json({name: "Alex Merced"})
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))