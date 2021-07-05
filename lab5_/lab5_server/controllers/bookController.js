const Book=require('../models/book')

module.exports.savedBook=(req,res,next)=>{
//id,title,ISBN, publishedDate,author
let bdy=req.body
    const bk=new Book(null,bdy.title, bdy.ISBN,bdy.publishedDate,bdy.author).save()
    res.status(201).json(bk)
}
module.exports.findAllBooks=(req,res,next)=>{
    res.status(200).json(Book.findAllBooks());
}

module.exports.findBookByi=(req,res,next)=>{
    res.status(200).json(Book.findBookByID(req.params.bookID))
}
module.exports.deleteByID=(req,res,next)=>{
 Book.deleteById(req.params.bookID)
 res.status(200).end();
}
module.exports.updatedBooks=(req,res,next)=>{
    const bks=req.body;
  const updatedBook=new Book(req.params.bookID,bks.title,bks.ISBN,bks.publishedDate,bks.author).update();
  res.status(200).json(updatedBook);
}
