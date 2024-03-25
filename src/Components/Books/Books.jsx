import { useEffect, useState } from "react";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('books.json')
        .then( response => response.json())
        .then( data => setBooks(data))
    },[])
    console.log(books)
    return (
        <div>
            <h1 className="text-center text-5xl font-bold p-font text-black my-20">Books</h1>
            
        </div>
    );
};

export default Books;