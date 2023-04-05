import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="py-5 px-4 border rounded-lg shadow-sm cursor-pointer">
      <Link to={`/blog/${post.id}`} className="hover:underline">
        <h2 className="font-bold text-xl">{post.title}</h2>
      </Link>
      <p className="text-sm ml-[2px] opacity-70">
        By <span className="italic">{post.author}</span> on 
        <Link to={`/categories/${post.category.replaceAll(" ","-")}`}><span className="underline font-bold"> {post.category} </span></Link>  
      </p>
      <p className="text-sm ml-[2px] opacity-70">Posted on <span className="font-bold">{post.date}</span></p>

      <p className="mt-4">{post.content}</p>

      <div className="flex gap-x-3 mt-5 flex-wrap">
        {post.tags.map((tag, index) => {
          return <Link to={`/tags/${tag.replaceAll(" ","-")}`} key={index}><p className="text-blue-500 underline text-sm" >#{tag}</p></Link> 
        })}
      </div>
    </div>
  );
};

export default Post;
