const express=require("express")
const app=express();
const connectToDB=require('./database/connect')
const PORT=3001;
const bookRoute=require("./routes/books")
app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send("this is the root");
})
app.use("/api/v1/books",bookRoute)
async function start(){
    try {
        await connectToDB();
        console.log("connected to database")
        app.listen(PORT,()=>console.log("Hello, I'm Library server"))
    } catch (error) {
        console.log(error);
    }
}
start();