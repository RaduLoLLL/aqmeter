import React from "react";
import Header from "./Header";
import Button from "./Button";

function Hero() {
  return (
    <div
      className="min-h-screen min-w-screen "
      style={{
        backgroundImage: `url(./water-unsplash-2.jpg)`,
        backgroundSize: "cover",
      }}
    >
      <Header />
      <div className="text-white flex flex-col justify-center items-center mt-64">
        <h1 className="text-5xl">Aqmeter</h1>
        <h3 className="text-lg mt-8">
          Acces online account of utilities companies
        </h3>
        <div className="flex flex-col md:flex-row mt-8 md:space-x-8 space-y-8 md:space-y-0">
          <Button size="large" light blue={false} text="Register" />
          <Button size="large" light={false} blue={false} text="Learn More" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
