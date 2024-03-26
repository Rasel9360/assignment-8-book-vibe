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

const saveBooks = (id) => {
    let books = getBooks();
    const isExist = books.find(bId => bId === id)
    if (isExist) {
        return toast.error("This blog already exists.");
    }
    books.push(id);
    localStorage.setItem('books', JSON.stringify(books));
    toast.success("The blog has been saved successfully!");
}

export{getBooks,saveBooks}