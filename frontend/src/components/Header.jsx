import React, { useState ,useEffect} from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
    const [query, setQuery] = useState("");
    const [show, setShow] = useState(false);
    const [showCato, setShowCato] = useState(false);
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (!event.target.closest(".dropdown")) {
            setShowCato(false);
          }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
      }, []);

    return (
        <>
            <div className="header flex relative  z-10 items-center justify-between bg-black">
                <div className="logo flex items-center ml-1.5 mx-[4px]">
                    <svg onClick={() => setShow(!show)} className="cursor-pointer block sm:hidden" width="25" height="25" viewBox="0 0 50 40" xmlns="http://www.w3.org/2000/svg">
                        <rect width="50" height="6" rx="3" fill="white" />
                        <rect y="17" width="50" height="6" rx="3" fill="white" />
                        <rect y="34" width="50" height="6" rx="3" fill="white" />
                    </svg>
                    <Link to={"/"}>
                        <svg className="cursor-pointer" width="70" height="50" viewBox="0 0 70 50" xmlns="http://www.w3.org/2000/svg">
                            <text x="10" y="35" fontFamily="sans-serif" fontSize="30" fontWeight="bold" fill="white">M</text>
                            <text x="35" y="35" fontFamily="sans-serif" fontSize="30" fontWeight="bold" fill="orangered">B</text>
                        </svg>
                    </Link>
                </div>
                <div className="flex gap-4 m-1 items-center">
                    <div className="relative p-[4px] w-full max-w-md">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full p-2 m-[2px] pl-10 bg-gray-800 text-white border border-gray-600 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                    </div>
                    <div className="relative group mr-1 sm:mr-5">
                        <Link to="/profile">
                            <div className="h-[35px] w-[35px] rounded-full bg-white hover:cursor-pointer overflow-hidden">
                                <img
                                    src="https://imgs.search.brave.com/JAHeWxUYEwHB7KV6V1IbI9oL7wxJwIQ4Sbp8dHQL09A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjAx/MzkxNTc2NC9waG90/by91c2VyLWljb24t/aW4tZmxhdC1zdHls/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9UEotMnZvUWZh/Q3hhZUNsdzZYYlVz/QkNaT3NTTjlIVWVC/SUg1Qk82VmRScz0"
                                    alt=""
                                />
                            </div>
                        </Link>
                        <div className="absolute left-1/2 hidden sm:block -translate-x-1/2 top-full mt-2 w-max px-3 py-1 text-sm bg-gray-700 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                            Profile
                        </div>
                    </div>
                </div>
            </div>

            {show && <div className={`nav_drop transition-all duration-200 relative transform sm:hidden z-[5] flex flex-col text-[16px]`}>
                <Link to="/" className="text-center p-3 font-semibold cursor-pointer w-full shadow-md rounded-md">Home</Link>
                <Link to="/contact" className="text-center p-3  font-semibold cursor-pointer w-full shadow-md rounded-md">Contact</Link>
                <Link to="/about" className="text-center p-3  font-semibold cursor-pointer w-full shadow-md rounded-md">About</Link>
                <Link to="/blogs" className="text-center p-3  font-semibold cursor-pointer w-full shadow-md rounded-md">Blogs</Link>
                <div className="relative w-full dropdown">
                    {/* Button */}
                    <div
                        onClick={() => setShowCato(!showCato)}
                        className="text-center p-3   font-semibold cursor-pointer w-full shadow-md rounded-md"
                    >
                        Categories
                    </div>

                    {/* Dropdown Menu */}
                    <div
                        className={`absolute left-0 top-full w-full bg-gray-900 text-white rounded-md shadow-lg transform transition-transform duration-300 ${showCato ? "translate-y-2 opacity-100 visible" : "translate-y-[-10px] opacity-0 invisible"
                            }`}
                    >
                        <div className="flex flex-col text-lg">
                            {[
                                "Technology",
                                "Lifestyle",
                                "Business & Entrepreneurship",
                                "Education & Learning",
                                "Creative Corner",
                                "Health & Wellness",
                                "Travel & Adventure",
                                "Food & Recipes",
                                "Personal Development",
                                "Finance & Investing",
                                "Parenting & Family",
                                "Science & Innovation",
                                "Sports & Fitness",
                                "Art & Design",
                                "Entertainment & Media",
                                "Photography",
                                "Gaming",
                                "Environment & Sustainability",
                                "History & Culture",
                                "Fashion & Style",
                                "Automotive",
                                "DIY & Crafts",
                                "Spirituality & Mindfulness",
                                "Politics & Current Events",
                                "Career & Job Hunting",
                                "Relationships & Dating"
                            ].map((category, index) => (
                                <div
                                    key={index}
                                    className="px-5 py-3 hover:bg-gray-700 cursor-pointer transition duration-200"
                                >
                                    {category}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
}
export default Header;