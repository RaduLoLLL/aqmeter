import React from "react";
import News from "./News";
import CardGroup from "./CardGroup";

function Body() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-200">
      <div className="w-3/5 bg-white rounded-lg mb-12 -mt-48">
        <div className="flex justify-center text-c777 pt-24">
          <div className="w-3/4">
            <h2 className="text-5xl text-center">
              Sed mauris ex, varius non iaculis elementum dignissim eget dolor
              praesent accumsan
            </h2>
            <div className="flex justify-center">
              <div className="w-3/4">
                <hr className="border-t-2 mt-12 " />
                <p className="text-2xl text-center mt-12">
                  Ut turpis tellus, feugiat at egestas eget, luctus vitae
                  turpis. Vestibulum eleifend ultricies eros, vitae malesuada
                  lectus laoreet vitae
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <img src="/pic01.jpg" className="w-full rounded-b-md" alt="" />
        </div>
      </div>
      <div className="w-3/5 bg-white rounded-lg mb-12 pb-12 px-12 pt-12">
        <div className="flex flex-col items-center justify-center">
          <CardGroup />
        </div>
      </div>
      <div className="w-3/5 bg-white rounded-lg min-h-screen grid grid-cols-2">
        <News image="/pic02.jpg" />
      </div>
    </div>
  );
}

export default Body;
