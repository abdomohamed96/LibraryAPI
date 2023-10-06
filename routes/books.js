const {Router}=require("express");
const router = Router();
const {
     getAllBooks,   
     getBookById,
     deleteBookById,
     updateBookById,
     createBook

}=require("../controllers/book")


router.get("/",getAllBooks);
router.get("/:id",getBookById);
router.patch("/:id",updateBookById);
router.delete("/:id",deleteBookById);
router.post("/:id",createBook);

module.exports=router;