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
        return toast.error("This blog already exists.");
    }
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    toast.success("The blog has been saved successfully!");
}

export{getBooks,saveBooks}