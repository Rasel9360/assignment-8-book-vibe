import toast from "react-hot-toast";

// Get books from local storage
const getBooks = () => {
    let books = [];
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
        books = JSON.parse(storedBooks);
    }
    return books;
}

// Get wishlist from local storage
const getWishlist = () => {
    let books = [];
    const storedBooks = localStorage.getItem('wish');
    if (storedBooks) {
        books = JSON.parse(storedBooks);
    }
    return books;
}

// Save a book to the reading list
const saveBooks = (book) => {
    let books = getBooks();
    const isExist = books.find(b => b.id === book.id);
    if (isExist) {
        return toast.error("You have Already Read this Book");
    }
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    toast.success("Book added to your reading list.");
}

// Save a book to the wishlist
const saveWishlist = (book) => {
    let books = getWishlist();
    const isExist = books.find(b => b.id === book.id);
    if (isExist) {
        return toast.error("This book is already in your wishlist.");
    }
    
    // Check if the book is already in the reading list
    const isReadingList = getBooks().find(b => b.id === book.id);
    if (isReadingList) {
        return toast.error("You have Already Read this Book");
    }
    
    books.push(book);
    localStorage.setItem('wish', JSON.stringify(books));
    toast.success("Book added to your wishlist.");
}

// Export functions for external use
export { getBooks, saveBooks, saveWishlist, getWishlist };
