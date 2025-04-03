import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';

function Comments() {
    const API_URL = "http://localhost:5000/api/comments";
    const [comments, setComments] = useState([])
    const [input , setInput] = useState('')
    const { id } = useParams();
    // Fetch comments from backend
    useEffect(() => {
      axios.get(API_URL)
        .then(res => setComments(res.data))
        .catch(err => console.error(err));
    }, []);
  
    // Add a new comment
    const addComment = async () => {
      if (!input.trim()) return;
      try {
        const res = await axios.post(API_URL, { Comment: input ,BlogId:id, UserName:"joe"});
        setComments([res.data, ...comments]); // Update state
        setInput("");
      } catch (err) {
        console.error(err);
      }
    };
  return (
    <>
      <form className="bg-[#f5eee7] font-sans shadow-md text-lg px-16 rounded-lg w-[50%] p-4 m-4">
          <h1 className='text-2xl m-4'>Comments</h1>
          <textarea className='border-2 w-full p-6 ' onChange={(e) => setInput(e.target.value)} placeholder='Enter your comment' name="comment" id="comment"></textarea>
          <button className='rounded text-white bg-black font-sans hover:scale-95 transition-transform duration-150 cursor-pointer shadow-md p-2'>Comment</button>
        </form>
        <div className="mt-4">
        <h3 className="text-lg font-semibold">Comments</h3>
        <ul className="mt-2 space-y-2">
          {comments.map((comment) => (
            <li key={comment._id} className="p-2 border rounded-lg bg-gray-100">
              {comment.text}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Comments
