const { default: mongoose } = require("mongoose")

const dbConnect = () =>{
try{
    const conn=mongoose.connect("mongodb://localhost:27017/lab3db");
console.log("Database connected Succesfully")
}

catch(error){
console.log(" Data Error")
}
}
module.exports= dbConnect;