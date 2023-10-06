const errorHandlerMiddleware=(err,req,res,next)=>{
    if(!err.status)
        err.status=500;
    res.status(err.status).json(err.message);
}
module.exports={
errorHandlerMiddleware
}