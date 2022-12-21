import React from "react";
import massenger from "../../assets/Revenue-bro.png";
import "../Subsections/AboutService.css";
function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900 mt-4">
      <div className="flex justify-around items-center py-8 px-4 mx-auto max-w-screen-lg ">
        <div className="max-w-screen-lg mx-4  flex flex-col md:flex-row self-center justify-center items-center">
          <div className="px-4 md:w-1/2 ">
            <h2 className="mb-4 text-3xl tracking-normal font-extrabold  dark:text-white">
              <span className="text-[#0773BA]"> বিকি-কিনি তে </span>
              <span className="text-gray-700">
                সেকেন্ডহ্যান্ড মোবাইল কেনা বেচা করুন সহজে
              </span>
            </h2>
            <p className="text-gray-500 sm:text-base  dark:text-gray-400">
              পছন্দের পণ্য থেকে খুঁজে নিন সেরা ডিল যা পৌঁছে যাবে আপনার
              দোরগোড়ায়।
            </p>
          </div>
          <div className=" md:w-1/2">
            <img
              className="max-w-lg h-72  md:h-full md:w-full"
              src={massenger}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
