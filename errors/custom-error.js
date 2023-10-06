class CustomAPIerror extends Error{
    constructor(statusCode,message){
        super(message);
        this.status=statusCode;
    }
}

const createCustomError=(statusCode,message)=>{
    return new CustomAPIerror(statusCode,message)
}
module.exports={
    createCustomError
}