import React from "react";
import { useLoaderData } from "react-router-dom";
import topimage from "../../../public/assets/images/banner/4.jpg";
import SingleDetails from "./SingleDetails";
import { FiArrowRight } from "react-icons/fi";

const ServiceDetails = () => {
  const loadedService = useLoaderData();
  const { price } = loadedService;
  return (
    <section className="mt-10">
      {/* heading  */}
      <div className="relative">
        <img className="h-48 w-full object-cover" src={topimage} alt="" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div>
            <h2 className="text-white text-4xl font-bold mt-20">
              Service Details
            </h2>
          </div>
        </div>
      </div>

      {/* Details or main content  */}
      <div className="mt-20 flex lg:flex md:flex ">
        {/* main content  */}
        <div className="md:w-3/4 w-full">
          <SingleDetails singleDetails={loadedService}></SingleDetails>
        </div>

        {/* sidebar */}
        <div className="md:w-1/4 w-full bg-[#F3F3F3] rounded-xl ">
          <h2 className=" text-4xl font-bold mt-4 mb-5 "> Services </h2>
          <button className="btn btn-wide bg-white text-slate-900 border-0 hover:bg-red-500 mt-5 hover:text-white">
            Full Car Repair{" "}
            <FiArrowRight className="text-xl text-slate-900 ml-5 hover:text-white"></FiArrowRight>
          </button>

          <button className="btn btn-wide bg-white text-slate-900 border-0 hover:bg-red-500 mt-5 hover:text-white">
             Engine Repair
            <FiArrowRight className="text-xl text-slate-900 ml-5 hover:text-white"></FiArrowRight>
          </button>

          <button className="btn btn-wide bg-white text-slate-900 border-0 hover:bg-red-500 mt-5 hover:text-white">
          Automatic Services
            <FiArrowRight className="text-xl text-slate-900 ml-5 hover:text-white"></FiArrowRight>
          </button>

          <button className="btn btn-wide bg-white text-slate-900 border-0 hover:bg-red-500 mt-5 hover:text-white">
          Engine Oil Change
            <FiArrowRight className="text-xl text-slate-900 ml-5 hover:text-white"></FiArrowRight>
          </button>

          <div className="bg-white m-5 py-10 rounded-xl">
            <h2 className=" text-3xl font-bold mt-8 mb-8">Price : ${price}</h2>
            <button className="btn btn-primary mx-3 bg-red-500 text-slate-100 border-0">
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
