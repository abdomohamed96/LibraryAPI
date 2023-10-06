const Books=require("../database/schema/books");
const {asyncWrapper}=require("../middlewares/async")
const {createCustomError}=require("../errors/custom-error")
const getAllBooks=asyncWrapper(async (req,res)=>{
    const bookList= await Books.find();
    if(!bookList.length){
       next( createCustomError(404,"There is no books in the library"))
    }else
    res.status(200).json({status:"success",data:bookList})

//     res.status(500).json({status:"failed",msg:error})
})
const getBookById=asyncWrapper(async (req,res,next)=>{
    const {id}=req.params

    const book= await Books.findOne({_id:id});
    if(!book){
        next( createCustomError(404,"book not found"));
    }else
    res.status(200).json({status:"success",data:book})

    // res.status(404).json({status:"failed",msg:error})
    
})


const createBook=asyncWrapper(async (req,res,next)=>{

    const newBook= await Books.create(req.body);
    //console.log(newBook); return new book added 
    res.status(200).json({status:"success",data:newBook})

    //res.status(500).json({status:"failed",msg:error})
    
})
const deleteBookById=asyncWrapper(async (req,res,next)=>{
    const {id}=req.params;
    const deletionInfo= await Books.deleteOne({_id:id});
    if(!deletionInfo.deletedCount){
        next( createCustomError(404,"the book not exists"));
    }else
    res.status(200).json({status:"success",data:deletionInfo})

   // res.status(404).json({status:"failed",msg:error})
    
})
const updateBookById=async (req,res,next)=>{
    const {id}=req.params;
    const updatedBook= await Books.findOneAndUpdate({_id:id},req.body,{
        new:true,
        runValidators:true
    });
    if(!updatedBook){
        next( createCustomError(404,"the book not exists"));
    }else
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