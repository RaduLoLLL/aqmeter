import React, { useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [fix, setFix] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);
  function setFixed() {
    if (window.scrollY >= 900) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);

  return (
    <div
      className={
        fix
          ? "flex justify-between px-5 items-center md:bg-aqmeter md:fixed w-full top-0 transition-all z-50 "
          : "flex justify-between px-5 items-center transition-all "
      }
    >
      <div
        className="md:hidden mt-3 px-6 py-2 rounded-md bg-gray-50 bg-opacity-40 cursor-pointer"
        onClick={() => setSideMenu(!sideMenu)}
      >
        <FontAwesomeIcon icon={faBars} className="text-white" />
      </div>
      {sideMenu && (
        <div className="min-h-screen w-1/2 fixed top-0 left-0 text-white bg-gray-800 transition-all ">
          <div
            className="md:hidden mt-3 px-6 py-2 rounded-md  bg-opacity-40 cursor-pointer text-right"
            onClick={() => setSideMenu(!sideMenu)}
          >
            <FontAwesomeIcon icon={faXmark} className="text-white" />
          </div>
          <ul className="grid grid-rows-6 grid-cols-1 pt-6 gap-6">
            <li className="border-b-2 border-gray-600 pb-6 pl-6">Home</li>
            <li className="border-b-2 border-gray-600 pb-6 pl-6">Tutorials</li>
            <li className="border-b-2 border-gray-600 pb-6 pl-6">Help</li>
            <li className="border-b-2 border-gray-600 pb-6 pl-6">FAQ</li>
            <li className="border-b-2 border-gray-600 pb-6 pl-6">Contact</li>
            <li className="pl-6">Login</li>
          </ul>
        </div>
      )}
      <img
        src="/Aqmeter_Logo_Small_White.png"
        alt="Logo"
        className="h-24 pt-5 hidden md:block"
      />
      <ul className="hidden md:flex space-x-10 items-center text-white">
        <li>Home</li>
        <li>Tutorials</li>
        <li>Help</li>
        <li>FAQ</li>
        <li>Contact</li>
        <li>
          <Button size="small" light={false} blue={false} text="Login" />
        </li>
      </ul>
    </div>
  );
}

export default Header;
