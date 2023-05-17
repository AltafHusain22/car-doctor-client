import React from "react";
import { BsCalendar3, BsTelephoneFill } from 'react-icons/bs';
import { BiMap} from 'react-icons/bi';

const CallToAction = () => {
  return (
    <div className="card w-full bg-slate-800 text-neutral-content mt-10">
      <div className="card-body grid md:grid-cols-3 gap-5 py-20">
			<div className="flex gap-4 ">
			     <BsCalendar3 className="mt-5 text-3xl"></BsCalendar3>
			   <div>
				 <p className="text-white">We are open monday-friday</p>
				 <h2 className="text-white font-bold md:text-3xl sm:text-xl text-xl">7:00 am - 9:00 pm</h2>
			   </div>
			</div>
			<div className="flex gap-4 my-10 md:my-0">
			     <BsTelephoneFill className="mt-5 text-3xl"></BsTelephoneFill>
			   <div>
				 <p className="text-white"> Have a question?</p>
				 <h2 className="text-white font-bold md:text-3xl text-xl sm:text-xl sm:mt-5 md:mt-0">+2546 251 2658</h2>
			   </div>
			</div>
			<div className="flex gap-4 ">
			     <BiMap className="mt-5 text-3xl"></BiMap>
			   <div>
				 <p className="text-white">Need a repair? our address</p>
				 <h2 className="text-white font-bold md:text-3xl text-xl sm:text-xl">Liza Street, New York</h2>
			   </div>
			</div>
      </div>
    </div>
  );
};

export default CallToAction;
