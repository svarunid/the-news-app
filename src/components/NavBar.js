import * as React from "react";
import { ReactComponent as Menu } from "../icons/menu.svg";
import "./../App.css";

function NavBtn({ title, onClick }) {
  return (
    <button className="sm:hidden md:hidden lg:block mx-8 hover:text-slate-50" onClick={onClick}>
      {title}
    </button>
  );
}

export default function NavBar() {
  return (
    <div className="z-50 bg-black py-6 px-12 flex flex-row drop-shadow-xl font-sans font-light text-slate-300 text-lg sticky top-0">
      <Menu className="lg:hidden mr-5 mt-1" />
      <button className="font-normal text-2xl text-slate-300 hover:text-slate-50 font-sans mr-auto">
        THE NEWS APP
      </button>
      <NavBtn title="Home"/>
      <NavBtn title="Saved"/>
      <NavBtn title="Account"/>
    </div>
  );
}
