import { useEffect, useState } from "react";
import { getBooks } from "../../Utils";
import Read from "../Read/Read";

const ReadBooks = () => {
    const [read, setRead] = useState([]);

    useEffect(() => {
        const storedBook = getBooks()
        setRead(storedBook)
    }, [])
    // console.log(read)
    return (
        <div>
            
            <div>
                {
                    read.map(rBook => <Read key={rBook.id} rBook={rBook}></Read>)
                }
            </div>
        </div>
    );
};

export default ReadBooks;