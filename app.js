const express=require("express")
const app=express();
const PORT=3001;
const bookRoute=require("./routes/books")
app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send("this is the root");
})
app.use("/api/v1/books",bookRoute)
app.listen(PORT,()=>console.log("Hello, I'm Library server"))
