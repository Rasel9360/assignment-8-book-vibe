import { useLoaderData, useParams } from "react-router-dom";

const LoadDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.id === idInt)

    const { image, bookName, author, category, rating, tags, review, totalPages, publisher, yearOfPublishing } = book;

    console.log(book);
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mt-12">
            <div className="w-2/4">
                <figure className="p-28 bg-[#F3F3F3]"><img src={image} alt="Album" /></figure>
            </div>
            <div className="px-8 space-y-4 pt-0 w-2/4">
                <h2 className="card-title text-4xl font-bold p-font">{bookName}</h2>
                <p className="font-bold">By : {author}</p>
                <hr />
                <p className="font-bold">{category}</p>
                <hr />
                <p className="font-serif text-justify"><span className="font-bold">Review :</span> {review}</p>
                <div className="flex gap-6 ">
                    {
                        tags.map(tag => <h3 key="" className="bg-[#23BE0A] text-[#23BE0A] bg-opacity-10 font-semibold rounded-full p-2">#{tag}</h3>
                        )
                    }
                </div>
                <hr />
                <div className="flex gap-10">
                    <p>Number of Pages :</p>
                    <h3 className="font-bold">{totalPages}</h3>
                </div>
                <div className="flex gap-[100px]">
                    <p>Publisher :      </p>
                    <h3 className="font-bold">{publisher}</h3>
                </div>
                <div className="flex gap-10">
                    <p>Year of Publishing :</p>
                    <h3 className="font-bold">{yearOfPublishing}</h3>
                </div>
                <div className="flex gap-32">
                    <p>Rating :</p>
                    <h3 className="font-bold">{rating}</h3>
                </div>
                <div className="card-actions">
                    <button className="btn btn-outline btn-success ">Read</button>
                    <button className="btn bg-[#50B1C9] text-white font-bold hover:bg-sky-500">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default LoadDetails;