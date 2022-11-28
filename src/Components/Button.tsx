import React from "react";

function Button({
  size = "medium",
  light = true,
  blue = false,
  text,
  border = "white",
}: {
  size?: string;
  light?: boolean;
  blue?: boolean;
  text: string;
  border?: string;
}) {
  const buttonSize =
    size === "small"
      ? "text-sm px-6 py-2"
      : size === "medium"
      ? "text-md px-10 py-5"
      : size === "large"
      ? "text-lg px-24 py-5"
      : size === "form"
      ? "text-md px-10 py-3"
      : "";
  const buttonLight =
    light === true
      ? "bg-white text-c777 border-2 border-solid border-radius rounded-md border-white hover:bg-transparent hover:text-white transition-all"
      : "bg-transparent text-white border-2 border-solid border-radius rounded-md border-white hover:bg-white hover:text-c777 transition-all";
  const textColor = blue ? "text-aqmeter" : "";
  const borderColor =
    border === "gray"
      ? "border-gray-200 hover:bg-gray-200 hover:text-c777"
      : "";
  return (
    <button
      className={buttonSize + " " + buttonLight + " " + textColor + borderColor}
    >
      {text}
    </button>
  );
}

export default Button;
