const express=require("express")
const app=express();
const connectToDB=require('./database/connect')
const PORT=process.env.PORT||3001;
const bookRoute=require("./routes/books")
const {errorHandlerMiddleware}=require("./middlewares/error-handler");

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send("this is the root");
})
app.use("/api/v1/books",bookRoute)
app.use(errorHandlerMiddleware);
async function start(){
    try {
        await connectToDB();
        console.log("connected to database")
        app.listen(PORT,()=>console.log(`Hello, I'm Library server ${PORT}`))
    } catch (error) {
        console.log(error);
    }
}
start();