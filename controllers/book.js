const Books=require("../database/schema/books");
const {asyncWrapper}=require("../middlewares/async")
const getAllBooks=asyncWrapper(async (req,res)=>{
    const bookList= await Books.find();
    if(!bookList.length){
        //throw error here 
        return res.status(404).json({status:"failed",msg:"There is no books in the library"});
    }
    res.status(200).json({status:"success",data:bookList})

//     res.status(500).json({status:"failed",msg:error})
})
const getBookById=asyncWrapper(async (req,res)=>{
    const {id}=req.params

    const book= await Books.findOne({_id:id});
    if(!book){
        //throw error here 
        return res.status(404).json({status:"failed",msg:"book not found"});
    }
    res.status(200).json({status:"success",data:book})

    // res.status(404).json({status:"failed",msg:error})
    
})


const createBook=asyncWrapper(async (req,res)=>{

    const newBook= await Books.create(req.body);
    //console.log(newBook); return new book added 
    res.status(200).json({status:"success",data:newBook})

    //res.status(500).json({status:"failed",msg:error})
    
})
const deleteBookById=asyncWrapper(async (req,res)=>{
    const {id}=req.params;
    const deletionInfo= await Books.deleteOne({_id:id});
    if(!deletionInfo.deletedCount){
        return res.status(404).json({status:"failed",msg:"the book not exists"});
    }
    res.status(200).json({status:"success",data:deletionInfo})

   // res.status(404).json({status:"failed",msg:error})
    
})
const updateBookById=async (req,res)=>{
    const {id}=req.params;
    const updatedBook= await Books.findOneAndUpdate({_id:id},req.body,{
        new:true,
        runValidators:true
    });
    if(!updatedBook){
        return res.status(404).json({status:"failed",msg:"book not found"});
    }
    res.status(200).json({status:"success",data:updatedBook})

//        res.status(404).json({status:"failed",msg:error})
    
}
module.exports={
     getAllBooks,   
     getBookById,
     deleteBookById,
     updateBookById,
     createBook

}