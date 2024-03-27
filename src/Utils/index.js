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

export{getBooks,saveBooks}