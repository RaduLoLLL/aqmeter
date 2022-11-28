import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({
  icon,
  title,
  content,
  border = "none",
}: {
  icon: any;
  title: string;
  content: string;
  border?: string;
}) {
  const style =
    border === "rb"
      ? "border-b-2 md:border-r-2  border-solid border-c777"
      : border === "b"
      ? "border-b-2 border-solid border-c777"
      : border === "r"
      ? "border-b-2 md:border-b-0 md:border-r-2 border-solid border-c777"
      : "";
  return (
    <div className={"flex flex-col items-center text-c777 py-12 " + style}>
      <FontAwesomeIcon
        icon={icon}
        className="h-14 w-10 text-white bg-aqmeter px-10 py-8 rounded-full"
      />
      <h3 className="mt-6 text-3xl">{title}</h3>
      <p className="w-2/3 text-center mt-6 text-lg">{content}</p>
    </div>
  );
}

export default Card;
