import React from 'react'
import Header from "../components/Header";
import Navbar from "../components/Navbar";
function Contact() {
    return (
        <>

            <Header />
            <Navbar />
            <div className="flex items-center justify-center bg-[#e6ded7] p-6">
                <div className="bg-[#f5eee7] shadow-lg rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
                        Contact Us
                    </h2>
                    <p className="text-gray-600 text-center mb-6">
                        Have questions? Reach out to us!
                    </p>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700 text-sm font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="johndoe@example.com"
                                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-medium">
                                Message
                            </label>
                            <textarea
                                placeholder="Write your message..."
                                rows="4"
                                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            ></textarea>
                        </div>

                        <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
