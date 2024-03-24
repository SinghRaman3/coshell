import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

import authRoutes from "./routes/auth.js"
import productRoutes from  "./routes/products.js"

const app = express()
dotenv.config()

const port = process.env.PORT;

app.use(express.json())


//auth
app.use("/auth", authRoutes)
app.use("/products", productRoutes)


app.get("/", (req, res) => {
    res.send("Hello world")
})

app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
})

mongoose.set("strictQuery", false)
mongoose.connect(process.env.mongoDb, {
}).then(console.log("connected to mongoDB"))

