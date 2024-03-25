import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ cart }) => {
    console.log(cart)
    const { id, image, bookName, author, category, rating, tags } = cart;
    return (
        <Link to={`/book/${id}`}>
            <div className="card border p-4 bg-base-100 shadow-xl hover:scale-105 hover:border-[#23BE0A]">
                <figure className="py-6 bg-[#F3F3F3] rounded-xl">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="space-y-5 mt-5">
                    <div className="flex gap-10 ">
                        {
                            tags.map(tag => <h3 key="" className="bg-[#23BE0A] text-[#23BE0A] bg-opacity-10 font-semibold rounded-full p-2">#{tag}</h3>
                            )
                        }
                    </div>
                    <h2 className="card-title p-font text-black font-bold">{bookName}</h2>
                    <p className="font-bold text-sm">By : {author}</p>
                    <hr className="border
                 border-dashed" />
                    <div className="flex justify-between">
                        <h4>{category}</h4>
                        <h4 className="flex justify-center items-center gap-2">{rating}<CiStar /></h4>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;