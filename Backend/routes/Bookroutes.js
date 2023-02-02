const express=require("express");
const {addBook, editBook, removeBook,singleBook,allBooks} =require ("../controller/BookController");
const router=express.Router();


router.route('/book/add').post(addBook)
router.route('/book/All').get(allBooks)
router.route('/book/:id').put(editBook).delete(removeBook).get(singleBook)


module.exports = router;