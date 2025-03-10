const mongoose = require("mongoose")
require('dotenv').config()

const user = encodeURIComponent(process.env.DBUSERNAME)
const passwd = encodeURIComponent(process.env.DBPASSWORD)
const cluster = process.env.CLUSTER

const db = `mongodb+srv://${user}:${passwd}@${cluster}.iiqicgv.mongodb.net/?retryWrites=true&w=majority`;

mongoose.set("strictQuery", true, "useNewUrlParser", true)

const connectDB = async () => {
  try {
    await mongoose.connect(db)
    console.log("Connected to DB")
  } catch (e) {
    console.error("Database connection error")
    process.exit(1)
  }
}

module.exports = connectDB
