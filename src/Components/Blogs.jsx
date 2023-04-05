import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Post from "./Post";
import { ClockLoader } from "react-spinners";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="w-full max-w-[720px] mx-auto flex flex-col gap-y-5 ">
      {loading ? (
        <div className="grid h-full w-full place-items-center">
          <ClockLoader loading={loading} color="rgb(0,0,255)"/>
        </div>
      ) : (
        posts.map((post) => {
          return <Post post={post} key={post.id} />;
        })
      )}
    </div>
  );
};

export default Blogs;
