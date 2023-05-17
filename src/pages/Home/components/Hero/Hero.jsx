import React from "react";
import slide1 from "../../../../../public/assets/images/banner/1.jpg";
import slide2 from "../../../../../public/assets/images/banner/2.jpg";
import slide3 from "../../../../../public/assets/images/banner/3.jpg";

const Hero = () => {
  return (
    <div className="carousel w-full mt-10 rounded-xl  ">
      {/* slide-1 */}
      <div id="slide1" className="carousel-item relative w-full h-[600px]  ">
        <img src={slide1} className="w-full object-cover" />

        {/* slide-controller */}
        <div className=" absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] h-full w-full">
          <div className="absolute top-1/3 md:ml-20 ml-4 ">
            <div className="md:w-1/2 w-11/12 ">
              <h2 className="text-4xl lg:text-6xl md:text-4xl text-white font-bold text-start mb-5 ">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-white text-start mb-5">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>

              <div className="flex gap-4">
                <button className="btn btn-primary">Discover More</button>
                <button className="btn btn-outline btn-error">
                  Latest Project
                </button>
              </div>
            </div>
            <div className="absolute flex gap-5 md:right-0 right-3 mt-10 md:bottom-10 ">
              <a href="#slide1" className="btn bg-orange-400 btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle bg-orange-400">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* slide-2 */}
      <div id="slide2" className="carousel-item relative w-full h-[600px]  ">
        <img src={slide2} className="w-full object-cover" />

        {/* slide-controller */}
        <div className=" absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] h-full w-full">
          <div className="absolute top-1/3 md:ml-20 ml-4 ">
            <div className="md:w-1/2 w-11/12 ">
              <h2 className="text-4xl lg:text-6xl md:text-4xl text-white font-bold text-start mb-5 ">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-white text-start mb-5">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>

              <div className="flex gap-4">
                <button className="btn btn-primary">Discover More</button>
                <button className="btn btn-outline btn-error">
                  Latest Project
                </button>
              </div>
            </div>
            <div className="absolute flex gap-5 md:right-0 right-3 mt-10 md:bottom-10 ">
              <a href="#slide1" className="btn bg-orange-400 btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle bg-orange-400">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* slide-3 */}
      <div id="slide3" className="carousel-item relative w-full h-[600px]  ">
        <img src={slide3} className="w-full object-cover" />

        {/* slide-controller */}
        <div className=" absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] h-full w-full">
          <div className="absolute top-1/3 md:ml-20 ml-4 ">
            <div className="md:w-1/2 w-11/12 ">
              <h2 className="text-4xl lg:text-6xl md:text-4xl text-white font-bold text-start mb-5 ">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-white text-start mb-5">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>

              <div className="flex gap-4">
                <button className="btn btn-primary">Discover More</button>
                <button className="btn btn-outline btn-error">
                  Latest Project
                </button>
              </div>
            </div>
            <div className="absolute flex gap-5 md:right-0 right-3 mt-10 md:bottom-10 ">
              <a href="#slide2" className="btn bg-orange-400 btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle bg-orange-400">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
