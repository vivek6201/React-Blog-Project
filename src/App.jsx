import { useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Pagination from "./Components/Pagination";
import HomePage from "./Pages/HomePage";

function App() {

  const location = useLocation();
  return (
    <div className="w-full h-screen relative">
      <Header />
      <div className="py-20">
        <HomePage/>
      </div>
      <div className={`${location.pathname.includes("blog")? "hidden": "block"}`}>
        <Pagination />
      </div>
    </div>
  );
}

export default App;
