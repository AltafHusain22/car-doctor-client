import React from "react";

const SingleDetails = ({ singleDetails }) => {
  const { _id, img, description, facility, price, title } = singleDetails;
  console.log(singleDetails)

  return (
    <div className="text-start mt-10 md:mt-0">
      <img
        className="rounded-xl h-72 md:w-11/12 w-full object-cover"
        src={img}
      />
      <h2 className="text-4xl font-bold mt-10 "> {title}</h2>
      <p className="mr-5 mt-10">{description}</p>
	 	<div className=" grid lg:grid-cols-2 md:grid-cols-2 gap-5 mt-10 md:mr-10">
			{
				facility.map(facilities => <>
				<div key={_id} className="bg-slate-100 border-t-orange-400 border-t-4 rounded-md p-8">
					<h2 className="font-bold text-xl mb-5">{facilities.name}</h2>
					<p>{facilities.details}</p>
				</div>
				
				</>)
			}
		</div>

		<p className="mr-5 mt-10">{description}</p>
    </div>
  );
};

export default SingleDetails;
