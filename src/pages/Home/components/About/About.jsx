import React from "react";
import imageAbout1 from "../../../../../public/assets/images/about_us/person.jpg";
import imageAbout2 from "../../../../../public/assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen mt-10 ">
      <div className="hero-content flex-col lg:flex-row md:flex-col ">
        <div className=" relative w-full md:w-full lg:w-1/2">
          <img
            src={imageAbout1}
            className=" rounded-lg shadow-2xl relative md:max-w-xs"
          />
          <img
            src={imageAbout2}
            className="w-72 rounded-lg shadow-2xl absolute md:left-48 left-10 top-32 md:top-20 sm:top-72 sm:w-1/2 sm:left-48 border-8 border-slate-100"
          />
        </div>
        <div className="md:w-full lg:w-1/2 text-start mt-48">
		      <h3 className="font-bold text-xl text-red-500 mb-5">About Us</h3>
          <h1 className="text-4xl lg:text-6xl md:text-4xl font-bold text-start mb-5 ">We are qualified & of experience in this field</h1>
          <p className="py-6">
		  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <p className="py-3">
		  the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <button className="btn btn-error text-white font-bold">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
