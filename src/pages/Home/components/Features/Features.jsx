import React from "react";
import support from "../../../../../public/assets/icons/person.svg";
import delivery from "../../../../../public/assets/icons/deliveryt.svg";
import check from "../../../../../public/assets/icons/check.svg";
import group from "../../../../../public/assets/icons/group.svg";
import wranch from "../../../../../public/assets/icons/Wrench.svg";
const Features = () => {
  return (
    <section>
      <h3 className="font-bold text-xl text-red-500 mb-3 mt-20">
        Core Features
      </h3>
      <h1 className="text-4xl lg:text-6xl md:text-4xl font-bold text-center mb-5 ">
        Why Choose Us
      </h1>
      <p className="pt-3">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 md:gap-10 mt-10 md:w-full gap-4 ">
        <div className="border border-slate-200 border-1 p-5 shadow rounded-md">
          <img className="items-center mx-auto" src={support} alt="" />
          <h3 className="font-bold text-xl text-slate-800 mt-7 ">
            Core Features
          </h3>
        </div>
        <div className="border border-slate-200 border-1 p-5 shadow rounded-md">
          <img className="items-center mx-auto" src={delivery} alt="" />
          <h3 className="font-bold text-xl text-slate-800 mt-7 ">
            Core Features
          </h3>
        </div>
        <div className="border border-slate-200 border-1 p-5 shadow rounded-md">
          <img className="items-center mx-auto" src={group} alt="" />
          <h3 className="font-bold text-xl text-slate-800 mt-7 ">
            Core Features
          </h3>
        </div>
        <div className="border border-slate-200 border-1 p-5 shadow rounded-md">
          <img className="items-center mx-auto" src={check} alt="" />
          <h3 className="font-bold text-xl text-slate-800 mt-7 ">
            Core Features
          </h3>
        </div>
        <div className="border border-slate-200 border-1 p-5 shadow rounded-md">
          <img className="items-center mx-auto" src={wranch} alt="" />
          <h3 className="font-bold text-xl text-slate-800 mt-7 ">
            Core Features
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Features;
