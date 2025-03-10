const express = require('express')
const connectDB = require('./config/db')
const recipeRoutes = require('./api/recipes')
const cors = require('cors')
const bodyParser = require('body-parser')
const userRoutes = require('./api/users')

const app = express()


app.use(cors({
  origin: true,
  credentials: true
}))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use("/api/recipes", recipeRoutes)
app.use("/api/users", userRoutes)

connectDB()

app.get('/', (req, res) => res.send("Hello world"))

const port = process.env.PORT || 1122

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})