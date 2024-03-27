import toast from "react-hot-toast";

// Get blogs
const getBooks = () => {
    let books = [];
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
        books = JSON.parse(storedBooks);
    }
    return books;
}
const getWishlist = () => {
    let books = [];
    const storedBooks = localStorage.getItem('wish');
    if (storedBooks) {
        books = JSON.parse(storedBooks);
    }
    return books;
}

// Save blogs

const saveBooks = (book) => {
    let books = getBooks();
    const isExist = books.find(b => b.id === book.id)
    if (isExist) {
        return toast.error("You have Already Read this book");
    }
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    toast.success("Books Added to Read List");
}
const saveWishlist = (book) => {
    let books = getWishlist();
    const isExist = books.find(b => b.id === book.id)
    if (isExist) {
        return toast.error("You have Already Added Wishlist");
    }
    books.push(book);
    localStorage.setItem('wish', JSON.stringify(books));
    toast.success("Books Added to Wishlist List");
}

export{getBooks,saveBooks, saveWishlist, getWishlist}