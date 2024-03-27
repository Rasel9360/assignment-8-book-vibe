import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    console.log(blogs)
    return (
        <div>
            <h3 className="text-center text-4xl p-font font-bold bg-[#1313130D] py-6 text-black rounded-xl my-10">Blog</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    blogs.map((b,i) => <Blog key={i} blog={b}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;