import React from "react";

function Button({
  size,
  light,
  blue,
  text,
}: {
  size: string;
  light: boolean;
  blue: boolean;
  text: string;
}) {
  const buttonSize =
    size === "small"
      ? "text-sm px-6 py-2"
      : size === "medium"
      ? "text-md px-10 py-5"
      : size === "large"
      ? "text-lg px-24 py-5"
      : "";
  const buttonLight =
    light === true
      ? "bg-white text-c777 border-2 border-solid border-radius rounded-md border-white hover:bg-transparent hover:text-white transition-all"
      : "bg-transparent text-white border-2 border-solid border-radius rounded-md border-white hover:bg-white hover:text-c777 transition-all";
  const textColor = blue ? "text-aqmeter" : "";
  return (
    <button className={buttonSize + " " + buttonLight + " " + textColor}>
      {text}
    </button>
  );
}

export default Button;
