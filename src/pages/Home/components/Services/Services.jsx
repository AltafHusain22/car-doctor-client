import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
	const [services , setServices] = useState([])


  useEffect(() => {
	fetch(`http://localhost:5000/allServices`)
	.then(res=> res.json())
	.then(data => {
		setServices(data)
	})
  }, []);

  return (
    <section>
      <h3 className="font-bold text-xl text-red-500 mb-3 mt-20">Services</h3>
      <h1 className="text-4xl lg:text-6xl md:text-4xl font-bold text-center mb-5 ">
        Our Service Area
      </h1>
      <p className="pt-3">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.
      </p>

		<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mr-5">
		{
		services.map(service => <ServiceCard 
		key={service._id}
		service={service}
		></ServiceCard>)
	  }
		</div>
	   <button className="btn btn-outline btn-error mt-10">More Services</button>
    </section>
  );
};

export default Services;
