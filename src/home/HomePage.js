import { useRef } from "react";
import "./HomePage.css";
import { IoSearch } from "react-icons/io5";
import { BsChevronDoubleDown } from "react-icons/bs";

export default function HomePage() {
  const bodyRef = useRef(null);

  return (
    <div>
      <div className="flex items-center justify-center bg-image relative font-sans">
        <div className="border-gray-400 border-2 text-2xl h-14 w-1/3 rounded-full py-2 px-6 bg-neutral-200 flex items-center justify-start">
          <IoSearch size={28} color="#555" />
          <input
            className="ml-4 w-full focus:outline-none bg-neutral-200"
            placeholder="Search News"
          ></input>
        </div>
        <BsChevronDoubleDown
          size={42}
          color="rgb(229 229 229)"
          className="absolute animate"
        />
      </div>
      <div className="body" ref={bodyRef}></div>
    </div>
  );
}
