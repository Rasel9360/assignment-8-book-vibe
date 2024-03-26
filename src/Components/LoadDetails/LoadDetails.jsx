import { useLoaderData, useParams } from "react-router-dom";

const LoadDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.id === idInt)

    const {image} = book;

    console.log(book);
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mt-12">
            <figure><img src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default LoadDetails;