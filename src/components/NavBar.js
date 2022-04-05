import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Menu } from "../icons/menu.svg";
import "./../App.css";

export default function NavBar() {
  const [menuState, setMenuState] = useState(false);

  function menuBtnClick() {
    setMenuState(!menuState);
  }
  return (
    <nav
      className={`z-50 bg-black py-6 px-12 flex flex-col lg:flex-row ${
        menuState ? "gap-y-3.5" : ""
      } drop-shadow-xl font-sans font-light text-slate-300 text-lg sticky top-0`}
    >
      <div className="flex flex-row mr-auto">
        <Menu className="lg:hidden mr-5 mt-1" onClick={menuBtnClick} />
        <p className="font-normal text-2xl text-slate-300 hover:text-slate-50 font-sans">
          THE NEWS APP
        </p>
      </div>
      <Link to="/">
        <p
          className={`${
            menuState ? "" : "hidden"
          } lg:block mx-14 hover:text-white ml-auto`}
        >
          Home
        </p>
      </Link>
      <Link to="/saved">
        <p
          className={`${
            menuState ? "" : "hidden"
          } lg:block mx-14 hover:text-white ml-auto`}
        >
          Saved
        </p>
      </Link>
      <Link to="/">
        <p
          className={`${
            menuState ? "" : "hidden"
          } lg:block mr-7 hover:text-white ml-auto`}
        >
          Account
        </p>
      </Link>
    </nav>
  );
}
