const mongoose=require("mongoose");
const dotenv=require("dotenv").config();

const app =require("./app");


//DATABASE CONNECTION

mongoose.connect(process.env.DATABASE_LOCAL).then(()=>{
    console.log("DATABASE CONNECTION SUCCESSFULLY");
})


const port=process.env.PORT ||8080



app.listen(port,()=>{
    console.log(`App is running on port ${port}`);
})