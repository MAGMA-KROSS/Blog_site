import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
    const [showCato, setShowCato] = useState(false);
return (
    <div>
        <nav className="bg-[#e6ded7] sm:block hidden text-[16px] p-3 shadow-md">
            <ul className="flex list-none m-0 p-0">
                <li className="mr-5 hover:text-blue-500 transition-colors">
                    <Link to="/" className="no-underline text-black">Home</Link>
                </li>
                <li className="mr-5 hover:text-blue-500 transition-colors">
                    <Link to="/about" className="no-underline text-black">About</Link>
                </li>
                <li className="mr-5 hover:text-blue-500 transition-colors">
                    <Link to="/contact" className="no-underline text-black">Contact</Link>
                </li>
                <li className="mr-5 hover:text-blue-500 transition-colors">
                    <Link to="/blogs" className="no-underline text-black">Blogs</Link>
                </li>
                <li className="relative ">
                    <div onClick={()=>{setShowCato(!showCato)}} className="no-underline text-black cursor-pointer hover:text-blue-500 transition-colors">Categories</div>
                    {showCato && <div className="absolute left-1/2 z-10 -translate-x-1/2 top-full mt-2 w-max px-3 py-1 text-sm bg-gray-700 text-white rounded-md  shadow-lg">
                        
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
                                    className="hover:text-gray-300 cursor-pointer transition duration-200"
                                >
                                    {category}
                                </div>
                            ))}
                        </div>
                    </div>}
                </li>
            </ul>
        </nav>
    </div>
)
}

export default Navbar
