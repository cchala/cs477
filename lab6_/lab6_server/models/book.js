let books=[];
module.exports=class Book{
    constructor(id,title,ISBN, publishedDate,author){
        this.id=id,
        this.title=title,
        this.ISBN=ISBN,
        this.publishedDate=publishedDate,
        this.author=author
    }
 save(){
     this.id=Math.random().toString();
     books.push(this);
     return this;
 }
 static findAllBooks(){
     return books;
 }
 static findBookByID(bookId){
     const index=books.findIndex(prd=>prd.id===bookId)
     if(index>-1){
         return books[index]
     }
     throw new Error("NOT FOUND")
    //return books.find(book=>book.id===bookId)
 }
 update(){
     const index=books.findIndex(prd=>prd.id==this.id)
     if(index>-1){
         books.splice(index,1,this)
         return this;
     }
     throw new Error('NO SUCH BOOK');;
 }
 static deleteById(bookId){
     const index=books.findIndex(book=>book.id===bookId)
     if(index>-1){
         books= books.filter(b=>b.id!==bookId)
     }else{
        throw new Error("NO SUCH BOOK")
     }
     
 }
}