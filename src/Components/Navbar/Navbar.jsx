import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const links = <>
        <li className="font-bold"><NavLink
            className={({ isActive }) =>
                isActive ? 'text-[#23BE0A] border border-[#23BE0A]' : 'font-bold'
            }
            to="/">Home</NavLink></li>
        <li className="font-bold"><NavLink
            className={({ isActive }) =>
                isActive ? 'text-[#23BE0A] border border-[#23BE0A]' : 'font-bold'
            }
            to="/listed">Listed Books</NavLink></li>
        <li className="font-bold"><NavLink
            className={({ isActive }) =>
                isActive ? 'text-[#23BE0A] border border-[#23BE0A]' : 'font-bold'
            }
            to="/pageTo">Pages to Read</NavLink></li>
        <li className="font-bold"><NavLink
            className={({ isActive }) =>
                isActive ? 'text-[#23BE0A] border border-[#23BE0A]' : 'font-bold'
            }
            to="/blog">Blog</NavLink></li>
        <li className="font-bold"><NavLink
            className={({ isActive }) =>
                isActive ? 'text-[#23BE0A] border border-[#23BE0A]' : 'font-bold'
            }
            to="/contact">Contact Us</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-lg fixed z-10 lg:px-16">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                        {
                            links
                        }
                    </ul>
                </div>
                <Link to='/'
                 className=" font-bold lg:text-3xl hover:cursor-pointer text-[#23BE0A]">Book Vibe</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <button className="btn bg-[#23BE0A] text-white hover:bg-green-500 font-extrabold">Sign In</button>
                <button className="btn bg-[#59C6D2] text-white hover:bg-sky-500 font-extrabold">Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;