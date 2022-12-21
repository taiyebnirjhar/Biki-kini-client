import React from "react";
import revenue from "../../assets/Mobile Marketing-pana.png";
import customer from "../../assets/Mobile Marketing-rafiki.png";

function SubService() {
  return (
    <div className="">
      <div className="my-4 flex flex-col lg:flex-row gap-8 justify-around border bg-white  border-gray-200 rounded-lg">
        <div className="lg:w-1/2 ">
          <div className=" md:w-[90%] md:mx-auto flex flex-row justify-center ">
            <div className=" flex self-center ">
              <div className="max-w-[125px] min-w-[125px] max-h-[125px] min-h-[125px]">
                <img className=" h-full w-full" src={revenue} alt="" />
              </div>
            </div>
            <div className="block max-w-sm p-6 bg-white  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="flex justify-center flex-col">
                <h5 className="mb-2 text-lg font-bold  text-gray-700 dark:text-white">
                  অর্থ উপার্জন শুরু করুন!
                </h5>
                <p className="font-normal pb-2 text-sm text-gray-700 dark:text-gray-400">
                  আপনার প্রথম বিজ্ঞাপনটি পোস্ট করুন এবং অর্থ আয় করুন!
                </p>
                <div>
                  <button
                    type="button"
                    className="inline-block mx-1.5 px-4 py-1 border-2 rounded-[25px] border-[#179777] text-[#179777] primary_font_light font-semibold text-xs leading-tight uppercase  hover:text-white hover:bg-[#179777] focus:outline-none focus:ring-0 transition duration-150 ease-in-out "
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    আরো জানুন
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 ">
          <div className="  md:w-[90%] md:mx-auto flex flex-row justify-center">
            <div className=" flex self-center ">
              <div className="max-w-[125px] min-w-[125px] max-h-[125px] min-h-[125px]">
                <img className=" h-full w-full" src={customer} alt="" />
              </div>
            </div>
            <div className="  block max-w-sm p-6 bg-white  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-lg font-bold  text-gray-700 dark:text-white">
                আপনার সেলার মেনেজ করুন
              </h5>
              <p className="font-normal text-sm text-gray-700 dark:text-gray-400 pb-2">
                আপনার যাবতীয় ট্রানসাকশান ম্যানেজ করুন সহজেই
              </p>
              <button
                type="button"
                className="inline-block mx-1.5 px-4 py-1 border-2 rounded-[25px] border-[#179777] text-[#179777] primary_font_light font-semibold text-xs leading-tight uppercase  hover:text-white hover:bg-[#179777] focus:outline-none focus:ring-0 transition duration-150 ease-in-out "
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                আরো জানুন
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubService;
