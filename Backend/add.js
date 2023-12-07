const express = require("express")
const mongoose = require('mongoose')
// const User = require('./models/user.model')
const mongouri = "mongodb://localhost:27017/lab3db" 
const app = express()
const bcrypt = require("bcryptjs")
const productRouter = require("./routes.js/productRoutes")
// const Job = require('./models/job.model')
// const JobApplied = require('./models/jobApplied,model');
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/product", productRouter );


mongoose.set("strictQuery", false)
mongoose
.connect('mongodb://127.0.0.1:27017/lab3db')
.then(() => {
    console.log('connected to MongoDB') 
    app.listen(8000, () => console.log('app started on port 8000'))
}).catch((error) => {
    console.log('cant connect to mongodb'+error)
})