import React from "react";
import Button from "./Button";

function Header() {
  return (
    <div className="flex justify-between px-5 items-center">
      <img
        src="/Aqmeter_Logo_Small_White.png"
        alt="Logo"
        className="h-24 pt-5"
      />

      <ul className="flex space-x-10 items-center text-white">
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
