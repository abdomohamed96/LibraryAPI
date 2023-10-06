const Books=require("../database/schema/books");

const getAllBooks=async (req,res)=>{
    console.log("get all books");
    try {
        const bookList= await Books.find();
        if(!bookList.length){
            return res.status(404).json({status:"failed",msg:"There is no books in the library"});
        }
        res.status(200).json({status:"success",data:bookList})
    } catch (error) {
        res.status(500).json({status:"failed",msg:error})
    }       

}
const getBookById=async (req,res)=>{
    console.log("get a certain book ")
    const {id}=req.params
    try {
        const book= await Books.findOne({_id:id});
        if(!book){
            return res.status(404).json({status:"failed",msg:"book not found"});
        }
        res.status(200).json({status:"success",data:book})
    } catch (error) {
        res.status(404).json({status:"failed",msg:error})
    }
}


const createBook=async (req,res)=>{
    try {
        const newBook= await Books.create(req.body);
        //console.log(newBook); return new book added 
        res.status(200).json({status:"success",data:newBook})
    } catch (error) {
        res.status(500).json({status:"failed",msg:error})
    }
}
const deleteBookById=async (req,res)=>{
    const {id}=req.params;
    try {
        const deletionInfo= await Books.deleteOne({_id:id});
        if(!deletionInfo.deletedCount){
            return res.status(404).json({status:"failed",msg:"the book not exists"});
        }
        res.status(200).json({status:"success",data:deletionInfo})
    } catch (error) {
        res.status(404).json({status:"failed",msg:error})
    }
}
const updateBookById=async (req,res)=>{
    const {id}=req.params;
    try {
        const updatedBook= await Books.findOneAndUpdate({_id:id},req.body,{
            new:true,
            runValidators:true
        });
        if(!updatedBook){
            return res.status(404).json({status:"failed",msg:"book not found"});
        }
        res.status(200).json({status:"success",data:updatedBook})
    } catch (error) {
        res.status(404).json({status:"failed",msg:error})
    }
}
module.exports={
     getAllBooks,   
     getBookById,
     deleteBookById,
     updateBookById,
     createBook

}