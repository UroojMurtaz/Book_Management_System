const Book = require("../model/BookModel");

//Add Book
exports.addBook = async (req, res) => {
    console.log("hello")
    // res.send("Hello")
  const { title, author, no_of_pages, published_at} = req.body;
  const ifbook = await Book.findOne({ title });
  if (!ifbook) {
    const book = await Book.create({
        title,
        author,
        no_of_pages,
        published_at,
    });
    res.status(201).json({
      success: true,
      book,
    });
  } else {
    res.send("Book Already Added");
  }
};

//Edit Book Details
exports.editBook = async (req, res) => {
const { title, author, no_of_pages, published_at} = req.body;
  const ifbook = await Book.findById(req.params.id);
  if (ifbook) {
    const newData={
        title,
        author,
        no_of_pages,
        published_at,
    }
    const newBookUpdate = await Book.findByIdAndUpdate(req.params.id,newData,{
        new: true,
        runValidators: true,
        useFindandModify: false,
    });
    res.status(201).json({
      success: true,
      newBookUpdate,
    });
  } else {
    res.status(200).json({
        success: true,
        message: "Book does not Existed",
      });
  }
};

//Remove Book By Id
exports.removeBook = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (book) {
    await book.remove();
    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
    });
  } else {
        res.status(200).json({
        success: true,
        message: "Book does not Existed",
      });
  }
};


//Get All books
exports.allBooks = async (req, res) => {
    const books = await Book.find();
    res.status(200).json({
        success:true,
        books
    })
  };
  
//Get single Book By Id
exports.singleBook = async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (book) {
      res.status(200).json({
        success: true,
        book
      });
    } else {
        res.status(200).json({
            success: true,
            message: "Book does not Existed",
          });
    }
  };
  