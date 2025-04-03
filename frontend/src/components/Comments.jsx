import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';

function Comments() {
    // Update port to match your backend
    const API_URL = "http://localhost:5000/api/comments";
    const [comments, setComments] = useState([])
    const [input, setInput] = useState('')
    const { id } = useParams();

    // Fetch comments from backend 
    useEffect(() => {
        axios.get(API_URL)
            .then(res => setComments(res.data))
            .catch(err => console.error(err));
    }, []);

    // Add a new comment
    const addComment = async (e) => {
        e.preventDefault(); // Prevent default form submission
        if (!input.trim()) return;

        try {
            const res = await axios.post(API_URL, {
                Comment: input,
                BlogId: id || "default-blog-id", // Provide a fallback if id is undefined
                UserName: "joe"
            });

            setComments([res.data, ...comments]); // Update state
            setInput("");
        } catch (err) {
            console.error("Error posting comment:", err);
            alert("Failed to post comment. See console for details.");
        }
    };

    return (
        <>
            <form onSubmit={addComment} className="bg-[#f5eee7] font-sans shadow-md text-lg px-16 rounded-lg w-[50%] p-4 m-4">
                <h1 className='text-2xl m-4'>Comments</h1>
                <textarea
                    className='border-2 w-full p-6'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Enter your comment'
                    name="comment"
                    id="comment">
                </textarea>
                <button
                    type="submit"
                    className='rounded text-white bg-black font-sans hover:scale-95 transition-transform duration-150 cursor-pointer shadow-md p-2'>
                    Comment
                </button>
            </form>
            <div className="my-4 bg-[#f5eee7] font-sans shadow-md text-lg px-16 rounded-lg w-[50%] p-4 m-4">
                
                <ul className="mt-2 ">
                    {comments && comments.map((comment, index) => (
                        <li key={comment._id || index} className="p-2 m-2 border w-full rounded-lg bg-gray-100">
                            <strong>{comment.UserName}</strong>: {comment.Comment}
                        </li>
                    ))}
                    {comments.length === 0 ? (
                        <h3 className="text-lg text-center font-semibold">No comments yet</h3>
                    ) : null}

                </ul>
            </div>
        </>
    )
}

export default Comments