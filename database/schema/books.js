const mongoose=require("mongoose")
const bookSchema =new mongoose.Schema({
    title:{
        type:mongoose.SchemaTypes.String,
        trim:true,
       maxlength:[200,"must be 20 character"],
       required:true
    },
    author:{
        type:mongoose.SchemaTypes.String,
        //Schema.Types.ObjectId
        trim:true,
       maxlength:[200,"must be 20 character"],
       required:true
    },
    pages:{
        type:Number,
        required:true,
    },
    state:{
        type:mongoose.SchemaTypes.String,
        default:"NOT READ",
    }
})
module.exports=mongoose.model("Books",bookSchema);