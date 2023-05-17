import React from "react";
import {  FiArrowRight } from 'react-icons/fi';
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-between items-center mt-5">
           <h3 className="text-start font-bold text-red-600 text-xl"> Price : $ {price}</h3>
          <Link to={`/serviceDetails/${_id}`}><FiArrowRight className="text-xl text-red-500"></FiArrowRight></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
