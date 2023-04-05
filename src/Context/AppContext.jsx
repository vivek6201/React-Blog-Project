import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [posts,setPosts] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPages,setTotalPages] = useState(null);
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    
    const fetchBlogs = async (page=1,tag = null, category = null) =>{
        let url = `${baseUrl}?page=${page}`;
        if(tag){
            url += `&tag=${tag}`
        }
        if(category){
            url += `&category=${category}`
        }
        try{
            setLoading(true);
            const {data} = await axios.get(url);
            setPosts(data.posts);
            setTotalPages(data.totalPages)
            setLoading(false);
        }
        catch(e){
            console.log(e);
        }
    }

    const handlePageChange = (page) =>{
        navigate({search : `?page=${page}`});
        setPage(page)
    }

    const value = {
        posts,
        page,
        totalPages,
        loading,
        setLoading,
        handlePageChange,
        fetchBlogs
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
} 