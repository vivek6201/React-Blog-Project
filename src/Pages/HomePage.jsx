import React, { useContext, useEffect } from "react";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Blogs from "../Components/Blogs";
import BlogPage from "./BlogPage";
import TagPage from "./TagPage";
import CategoryPage from "./CategoryPage";
import { AppContext } from "../Context/AppContext";

const HomePage = () => {

  const {page,fetchBlogs} = useContext(AppContext);
  const [searchParams,setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogs(Number(page),tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogs(Number(page),category);
    }
    else{
      fetchBlogs(Number(page));
    }
  }, [location.search,location.pathname]);

  return (
    <div className="w-full h-full">
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/blog/:blogId" element={<BlogPage />} />
        <Route path="/tags/:tag" element={<TagPage />} />
        <Route path="/categories/:category" element={<CategoryPage />} />
      </Routes>
    </div>
  );
};

export default HomePage;
