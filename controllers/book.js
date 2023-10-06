const getAllBooks=(req,res)=>{
    res.status(200).json({msg:"get all books "});
}
const getBookById=(req,res)=>{
    res.status(200).json({msg:"get a certain book "});
}
const createBook=(req,res)=>{
    res.status(200).json({msg:"create new book"})
}
const deleteBookById=(req,res)=>{
    res.status(200).json({msg:"delete a certain book "});
}
const updateBookById=(req,res)=>{
    res.status(200).json({msg:"update a certain book "});
}
module.exports={
     getAllBooks,   
     getBookById,
     deleteBookById,
     updateBookById,
     createBook

}