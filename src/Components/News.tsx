import React from "react";

function News({ image }: { image: string }) {
  return (
    <div className="bg-white flex flex-col items-center text-c777">
      <img src={image} className="w-full" alt="Eoliene" />
      <div className="w-3/4">
        <h3 className="text-3xl mt-12 text-center">Sed lorem adipiscing</h3>
        <p className="text-lg mt-6 text-center">
          Integer volupat ante et accumsan commophasellus sed aliquam fugiat
          lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna
          aliquam veroeros.
        </p>
      </div>
    </div>
  );
}

export default News;
