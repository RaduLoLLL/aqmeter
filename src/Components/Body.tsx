import React from "react";
import News from "./News";
import CardGroup from "./CardGroup";
import Table from "./Table";
import Button from "./Button";

function Body() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-200">
      <div className="md:w-3/5 bg-white md:rounded-lg mb-12 -mt-48">
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
          <img src="/pic01.jpg" className="w-full md:rounded-b-md" alt="" />
        </div>
      </div>
      <div className="md:w-3/5 bg-white md:rounded-lg mb-12 pb-12 px-12 pt-12">
        <div className="flex flex-col items-center justify-center">
          <CardGroup />
        </div>
      </div>
      <div className="md:w-3/5 rounded-lg  grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-8">
        <News
          image="/pic02.jpg"
          title="Sed lorem adipiscing"
          content="Integer volupat ante et accumsan commophasellus sed aliquam fugiat
          lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna
          aliquam veroeros."
          buttonText="Learn More"
        />
        <News
          image="/pic03.jpg"
          title="Accumsan integer"
          content="Integer volupat ante et accumsan commophasellus sed aliquam fugiat
          lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna
          aliquam veroeros."
          buttonText="Learn More"
        />
      </div>
      <div className="md:w-3/5  md:rounded-lg">
        <Table />
      </div>
      <div className="bg-aqmeter w-full text-white flex flex-col items-center py-16 mb-12">
        <h3 className="text-3xl">Signup for beta access</h3>
        <p className="text-lg mt-12 text-center">
          Cras quis cursus, vel fermentum ex. Praesent gravida commodo fringilla
        </p>
        <div className="flex flex-col space-y-4 px-6 md:px-0 md:space-y-0 md:flex-row md:space-x-4 mt-12 w-full md:justify-center">
          <input
            type="text"
            placeholder="Email Address"
            className="rounded-md bg-blue-50 bg-opacity-20 placeholder-gray-300 p-3 "
          />
          <Button size="form" text="Sign Up" blue />
        </div>
      </div>
      <div className="w-full md:w-3/5 flex flex-col items-center text-c777 mb-12">
        <h2 className="text-3xl">Contact Us</h2>
        <hr className="border-t-2 mt-6 border-gray-300 w-1/2" />
        <p className="text-lg mt-3 text-center">
          Phasellus pretium justo nec saggitis tincidunt
        </p>
        <div className="bg-white p-12 my-6 md:rounded-md md:w-3/4 w-full">
          <form
            action=""
            className="flex flex-col space-y-6 items-center w-full"
          >
            <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-6 w-full">
              <input
                type="text"
                className="w-full md:w-1/2 bg-gray-100 border-2 border-gray-300 rounded-md p-3"
                placeholder="Name"
              />
              <input
                type="email"
                className="w-full md:w-1/2 bg-gray-100 border-2 border-gray-300 rounded-md p-3"
                placeholder="E-mail"
              />
            </div>
            <input
              type="text"
              className="w-full bg-gray-100 border-2 border-gray-300 rounded-md p-3"
              placeholder="Subject"
            />
            <textarea
              className="w-full bg-gray-100 border-2 border-gray-300 rounded-md p-3"
              placeholder="Enter your message"
              rows={8}
            />
            <button
              type="submit"
              className="bg-gray-500 text-white py-3 w-full md:w-1/3 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Body;
