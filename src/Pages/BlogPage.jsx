import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import axios from "axios";
import { ClockLoader } from "react-spinners";
import Post from "../Components/Post";

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { loading, setLoading } = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/get-blog";

  const fetchRelatedBlogs = async () => {
    setLoading(true);
    let url = `${newBaseUrl}?blogId=${blogId}`;
    try {
      const {data} = await axios.get(url);
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (e) {
      console.log(e);
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  console.log(blog);

  return (
    <div className='flex w-full h-full max-w-[720px] flex-col mx-auto items-start'>
      <button onClick={() => navigation(-1)} className='border my-4 rounded-lg py-2 px-4'>Back</button>
      {loading ? (
        <div className="grid w-full h-full place-content-center">
          <ClockLoader loading={loading} />
        </div>
      ) : blog ? (
        <div className="flex flex-col gap-y-5">
          <Post post={blog}/>
          <h2 className="font-bold text-2xl mt-4 text-center">Related Blogs</h2>
          {
            relatedBlogs.map((post) =>{
              return <Post post={post} key={post.id}/>
            })
          }
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <p>No Post found</p>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
