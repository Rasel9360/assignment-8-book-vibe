import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('books.json')
        .then( response => response.json())
        .then( data => setBooks(data))
    },[])
    // console.log(books)
    return (
        <div>
            <h1 className="text-center text-5xl font-bold p-font text-black my-20">Books</h1>
            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    books.map(b => <Book key={b.id} cart={b}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;