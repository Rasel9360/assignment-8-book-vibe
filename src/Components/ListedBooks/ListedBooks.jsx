import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";


const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0)
    return (
        <div>
            <div className="flex justify-center items-center p-8 mt-10 rounded-xl bg-[#1313130D]">
                <h1 className="text-3xl font-bold p-font text-black">Books</h1>
            </div>
            <div className="flex justify-center items-center mt-8">
                <details className="dropdown">
                    <summary className="m-1 btn bg-[#24d509] text-white hover:bg-[#16a201] px-10">Sort By <FaArrowDown />
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-40">
                        <li><a>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Publisher year</a></li>
                    </ul>
                </details>
            </div>
            {/* Tabs */}
            <div className="mt-10 ml-5">
                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap  ">
                    <Link
                        to=""
                        onClick={() => setTabIndex(0)}
                        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg border-gray-400 `}>
                        <span>Read Books</span>
                    </Link>
                    <Link
                        to="wishlist"
                        onClick={() => setTabIndex(1)}
                        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg border-gray-400 `}>
                        <span>Wishlist Books</span>
                    </Link>

                </div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ListedBooks;