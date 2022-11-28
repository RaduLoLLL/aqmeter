import React from "react";
import Button from "./Button";

function News({
  image,
  title,
  content,
  buttonText,
}: {
  image: string;
  title: string;
  content: string;
  buttonText: string;
}) {
  return (
    <div className="bg-white flex flex-col items-center text-c777 pb-12 mb-12 rounded-md">
      <img src={image} className="w-full rounded-t-md" alt="Eoliene" />
      <div className="w-3/4 flex flex-col items-center">
        <h3 className="text-3xl mt-12 text-center">{title}</h3>
        <p className="text-lg mt-6 mb-6 text-center">{content}</p>
        <Button size="medium" text={buttonText} border="gray" />
      </div>
    </div>
  );
}

export default News;
