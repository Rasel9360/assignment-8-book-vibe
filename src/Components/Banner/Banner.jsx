import { Link } from "react-router-dom";
import BannerPhoto from "../../assets/nanner-photo.png"

const Banner = () => {
    return (
        <div>
            <div>
                <div className="hero lg:py-10 bg-[#F3F3F3] mt-10 rounded-lg">
                    <div className="hero-content flex-col lg:flex-row-reverse lg:gap-44">
                        <div className="flex-1">
                            <img src={BannerPhoto} className="max-w-80 rounded-lg w-full object-cover " />
                        </div>
                        <div>
                            <h1 className="text-3xl lg:text-5xl font-bold p-font text-black">Books to freshen up <br /> <h2 className=" mt-5">your bookshelf</h2></h1>
                            <Link to='/listed'><button className="btn bg-[#23BE0A] font-bold hover:bg-green-800 mt-10 text-white">View The List</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;