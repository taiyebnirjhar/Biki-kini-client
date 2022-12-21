import React from "react";

function SearchHero() {
  return (
    <div className="bg-[#149777] ">
      <div className="min-h-[186px]">
        <div className="w-[95%] sm:max-w-xl mx-auto pt-8">
          <div className="flex justify-center">
            <div className="bg-[#10846f] rounded-[30px] text-white py-[4px] pr-[12px] pl-[8px]">
              <i className="fa-solid fa-location-dot pr-2"></i>
              <span>বাংলাদেশ-এর সবগুলো</span>
            </div>
          </div>
          <div className="mt-4">
            <form
              className=" flex w-full bg-white rounded-[60px] overflow-hidden"
              action=""
            >
              <input
                className="border-none w-full md:text-[16px] px-[12px] py-[20px]  outline-0 align-middle"
                type="search"
                placeholder="আপনি কী খুঁজছেন?"
              />
              <div className="p-[4px]">
                <div className="p-[13px] outline-[0] bg-[#ffc800] rounded-[50%] flex self-center items-center text-[#424e4e] border-[none]">
                  <div className="text-[#673500]  w-[24px] h-[24px] align-middle">
                    <i className="fa-solid fa-magnifying-glass text-2xl -mt-1"></i>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchHero;
