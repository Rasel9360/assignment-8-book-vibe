import { FaNewspaper } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";

const Wishlist = ({wish}) => {
    const {id, image, bookName, author, category, rating, tags, totalPages, publisher, yearOfPublishing } = wish;
    return (
        <div className="flex my-10 p-5 border-2 rounded-xl">
        <div className="flex flex-col lg:flex-row gap-10 justify-center ">
            <div className="bg-base-200 p-10 rounded-xl">
                <img src={image} alt="" />
            </div>
            <div className="space-y-4 ">
                <h2 className="card-title text-2xl text-black p-font font-bold">{bookName}</h2>
                <p className="font-bold">By : {author}</p>
                <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-10">
                    <div className="flex gap-2 lg:gap-6 ">
                        {
                            tags.map(tag => <h3 key="" className="bg-[#23BE0A] text-[#23BE0A] bg-opacity-10 font-semibold rounded-full p-2">#{tag}</h3>
                            )
                        }
                    </div>
                    <h2 className="flex items-center lg:gap-2"><IoMdTime />
                        Year of Publishing : {yearOfPublishing}</h2>
                </div>
                <div className="flex items-center lg:gap-10 ">
                    <h2 className="flex items-center lg:gap-2"><HiOutlineUsers /> Publisher: {publisher}</h2>
                    <h2 className="flex items-center lg:gap-2 "><FaNewspaper /> Page: {totalPages}</h2>
                </div>
                <hr />  
                <div className="flex flex-col lg:flex-row gap-6">
                    <h2 className="p-2 rounded-full bg-[#328EFF26] text-sky-500">Category: {category}</h2>
                    <h2 className="p-2 rounded-full bg-[#FFAC3326] text-orange-500">Rating: {rating}</h2>
                    <Link
                    to={`/book/${id}`}
                    >
                    <button className="btn bg-[#2bde0f] rounded-full text-white hover:bg-[#188407]">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Wishlist;