const mongoose=require("mongoose");
require("dotenv").config();

const connect=()=>{
    return mongoose.connect(process.env.MONGODB_URL_LOCAL);
}


module.exports=connect;

