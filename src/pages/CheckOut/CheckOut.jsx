import React from "react";
import topimage from "../../../public/assets/images/banner/4.jpg";

const CheckOut = () => {
  return (
    <section className="mt-10">
      {/* heading  */}
      <div className="relative">
        <img className="h-48 w-full object-cover" src={topimage} alt="" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div>
            <h2 className="text-white text-4xl font-bold mt-20">CheckOut</h2>
          </div>
        </div>
      </div>

      {/* checkout form */}
      <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="max-w-5xl mx-auto mt-12 sm:mt-16">
            <div class="mt-6 overflow-hidden bg-white rounded-xl">
              <div class="px-6 py-12 sm:p-12">
                <form class="mt-14">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                    <div>
                      <div class="mt-2.5 relative">
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <div class="mt-2.5 relative">
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name "
                          class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <div class="mt-2.5 relative">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <div class="mt-2.5 relative">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div class="sm:col-span-2 ">
                      <div class="mt-2.5 relative">
                        <textarea
                          name="message"
                          placeholder="Your Message"
                          class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                          rows="4"
                        ></textarea>
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <button
                        type="submit"
                        class="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-red-600 border border-transparent rounded-md focus:outline-none hover:bg-red-700 focus:bg-blue-700"
                      >
                        Confirm Order
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CheckOut;
