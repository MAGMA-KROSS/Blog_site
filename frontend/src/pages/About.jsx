import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
function About() {
    return (
        <>
            <Header/>
            <Navbar/>
            <div className=" bg-[#e6ded7]  flex flex-col items-center p-6">
                <div className="max-w-3xl text-center">
                    <h1 className="text-4xl font-bold text-orange-500 mb-4">About Magma Blogs</h1>
                    <p className="text-lg  leading-relaxed">
                        Welcome to <span className="text-orange-500 font-semibold">Magma Blogs</span>, your go-to hub for insightful articles on
                        technology, web development, and creative innovation. We are dedicated to sharing high-quality,
                        engaging content that educates, inspires, and keeps you ahead in the ever-evolving tech world.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 text-orange-500">What We Cover</h2>
                    <ul className=" text-lg mt-2 space-y-2">
                        <li>- Web Development Trends</li>
                        <li>- Programming Tutorials</li>
                        <li>- UI/UX Design Insights</li>
                        <li>- AI & Tech Innovations</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6 text-orange-500">Who We Are</h2>
                    <p className="text-lg leading-relaxed">
                        Magma Blogs was founded by a passionate developer who aims to create a space for learning, sharing, and growth.
                        Whether you're a beginner or an expert, you'll find valuable resources to enhance your journey.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 text-orange-500">Join Us</h2>
                    <p className="text-lg leading-relaxed">
                        Stay connected with us for the latest insights. Follow us on social media or subscribe to our newsletter to never miss an update.
                    </p>
                </div>
            </div>
        </>
    );
}

export default About;
