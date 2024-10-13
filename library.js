
class Book {
  
    constructor (title , author) {
        this._title = title
        this._author = author
    }

    get title () {return this._title}
    get author () {return this._author}

    toString() {
        return `${this._title} ${this._author}`
    }

    isTheSameBook(book) {
        if(this._title === book._title && this._author === book._author) return true
        return false
    }
}
let qq = new Book("Qqqqqqqq" , "eeeeeeee")
console.log(qq)
class LibraryBookBase extends Book {
    #bookId
    constructor(title , author , bookId) {
        super(title , author)
        this.#bookId = bookId
    }

    get bookId() {return this.#bookId}
}

class LibraryBook extends LibraryBookBase {
    #quantity
    constructor(title , author , bookId , quantity) {
        super(title , author , bookId )
        this.#quantity = quantity
        LibraryBook.book.push(this)
    }
    static book = []
    get quantity () {return this.#quantity}
    set quantity (a) {}

    increaseQuantityBy(amount) {
        this.#quantity += amount   
     }

    decreaseQuantityBy(amount) {
        this.#quantity -= amount
    }
} 


class ReaderBook extends LibraryBookBase{
    #exprationDate
    #isReturned

    constructor (title, author , bookId ,expirationDate , isReturned) {
        super(title, author , bookId)
        this.#exprationDate = expirationDate
        this.#isReturned = isReturned
    }

    get isReturned () {return this.#isReturned}
    set isReturned (a) {}

    get expirationDate () {return this.#exprationDate}
    set expirationDate (a) {}
}


let libraryBook1 = new LibraryBook("eee" , "gasparyan" , 6 , 200)



let id = 1 
class Library {
    constructor() {
        this.books = new LibraryBook("aaa" , "sergey", 3 , 100) 
        this.readers = new Reader("sergey" ,"gasparyan" , 6)    
        this._books = []
        this._readers = []
        this._id = id

        this._books.push(this.books)
        this._readers.push(this.readers)
        delete this.books
        delete this.readers

    }

    id = id + 1

    get book() {return this._books}
    get reader () {return this._readers}

    doHaveBook (request = {}) {
        for(let key in request) {
            if(!this._books.includes(request[key]) && key !== "_quantity") {return false}
        }
        return true
    }

    addBook(newBook = {}) {
        let res = true
        for(let {_title , _author} of this._books) {
            if(newBook._title === _title && newBook._author === _author) {
                this._books.quantity++
                res = false
            }
            else LibraryBook.book.push(newBook)
        }
        if(res) return "Your book is already in LibraryBook"
        return "Your book is already in books"
    }


    addBooks (newBooks = []) {
        let res = true
        for(let value of newBooks) {
           let {_author : NewAuthor, _title : NewTitle} = value
            for(let {_author , _title } of this._books) {
                if(_author === NewAuthor && _title === NewTitle) {
                    res = false
                    this._books.quantity++ 
                }
            }
            if(res) LibraryBook.book.push(value)
        }
    return LibraryBook.book
    }

    checkReadetId(readerId) {
        if(this._id >= readerId && readerId >= 1 ) return true
        return false
    }

    lendBook (book , readId) {
        for (let value in book) {
            for(let key = 0 ; key < this._books.length ; key++) {
                if(this._books[key]._title === value && readId <= this._id && this._books[key]._quantity >= 1) return 
            } 
        }
    }
}


class Reader {

    constructor (firstName , lastName , readerId ) {
        this._firstName = firstName
        this._lastName = lastName
        this._readerId = readerId 
        const {title , author , bookId} = new ReaderBook("aaa" , "sergey" , 4 ,"20.02.2025" ,false)
        this.books = [title , author , bookId]
    }

    borrowBook (book , library) {
        if( library instanceof Library) {
                if(library._books.includes(book)) {
                    let y = library._books.indexOf(book)
                    if(library._books[y] instanceof ReaderBook && !Object.is(library._books[y] , null)) this.books.push(book)
                }
            }
    }
}
