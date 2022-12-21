import React from "react";

function ProductHero() {
  return (
    <div className="bg-[#0773BA] text-white w-full lg:rounded">
      <div className="py-2 px-4 flex flex-col gap-y-4 md:flex-row flex-wrap justify-center items-center lg:justify-between">
        <div></div>
        <div className="flex items-center self-center">
          <div>
            <span className="px-2">
              <i className="fa-regular fa-compass text-base md:text-lg"></i>
            </span>
            <span className="font-medium text-base md:text-lg">
              ডোরস্টেপ ডেলিভারি
            </span>

            <span className="px-2 font-black text-base md:text-base">
              এর মাধ্যমে যেকোনো পণ্য নিরাপদে ও নিশ্চিন্তে ডেলিভারি নিন
            </span>
          </div>
        </div>

        <div>
          <button
            type="button"
            className="inline-block mx-1.5 px-[7px] py-[3px] md:px-[14px] md:py-[6px] border-[3px] rounded-[25px] bg-white border-white text-[#0773BA]  font-semibold text-sm  uppercase  hover:text-[#05446f] focus:outline-none focus:ring-0 transition duration-150 ease-in-out "
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <div className="ml-2">
              এক্সপ্লোর করুন
              <span className="px-2">
                <i className="fa-solid fa-circle-chevron-right"></i>
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductHero;
