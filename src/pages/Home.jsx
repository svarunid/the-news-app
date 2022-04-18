import { useEffect, useRef, useState } from "react";
import "./Home.css";
import { IoSearch } from "react-icons/io5";
import { BsChevronDoubleDown } from "react-icons/bs";
import Article from "../components/Article";

export default function Home() {
  const bodyRef = useRef(null);

  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY === 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }

    document.addEventListener("scroll", handleScroll);

    document.title = "Home";

    return function cleanup() {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  function scrollBtnClik() {
    if (bodyRef.current) {
      bodyRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }

  function ArticleSection(props){
    return (
      <div>
        <div className="flex flex-row place-content-between pb-4">
          <p className="text-3xl font-medium text-slate-800">{props.title}</p>
          <div className="self-center">
            <label htmlFor="filter-for-headlines">Sort by: </label>
            <select id="filter-for-headlins" name="headline">
              <option value="relavancy">relevance</option>
              <option value="popularity">popularity</option>
              <option value="publishedAt">publish date</option>
            </select>
          </div>
        </div>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {props.articles}
        </div>
      </div>
    );
  }

  function Header(){
    return (
      <header className="hidden lg:flex items-center justify-center bg-image relative font-sans">
        <div className="border-gray-400 border-2 text-2xl h-14 w-1/3 rounded-full drop-shadow-xl py-2 px-6 bg-neutral-200 flex items-center justify-start">
          <IoSearch size={28} color="#555" />
          <input
            className="ml-4 w-full focus:outline-none bg-neutral-200"
            placeholder="Search News"
          ></input>
        </div>
        <BsChevronDoubleDown
          id="scrollDownIcon"
          size={42}
          color="rgb(229 229 229)"
          className={`absolute ${scroll ? "animate" : "hidden"}`}
          onClick={scrollBtnClik}
        />
      </header>
    );
  }

  return (
    <div>
      <Header />
      <div className="py-4 mx-8" ref={bodyRef}>
        {/*This is hidden in large screens*/}
        <div className="lg:hidden border-gray-400 border-2 text-2xl h-14 m-6 lg:w-1/3 rounded-full drop-shadow-lg py-2 px-6 bg-white lg:bg-neutral-200 flex items-center justify-start">
          <IoSearch size={28} color="#555" />
          <input
            className="ml-4 w-full focus:outline-none bg-white lg:bg-neutral-200"
            placeholder="Search News"
          ></input>
        </div>
        <ArticleSection title="Headlines"/>
      </div>
    </div>
  );
}
