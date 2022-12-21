import React from "react";
import massenger from "../../assets/Messenger-bro.png";
import "./AboutService.css";
function AboutService() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 mt-4">
        <div className="flex justify-around items-center py-8 px-4 mx-auto max-w-screen-lg ">
          <div className="max-w-screen-lg mx-4  flex flex-col md:flex-row self-center justify-center items-center">
            <div className=" md:w-1/3">
              <img
                className="w-full h-72  md:h-full md:w-full"
                src={massenger}
                alt=""
              />
            </div>
            <div className="px-4 md:w-2/3 ">
              <h2 className="mb-4 text-lg tracking-normal font-extrabold  dark:text-white">
                <span className="text-[#0773BA]"> ডোরস্টেপ ডেলিভারি </span>
                <span className="text-gray-700">
                  এর মাধ্যমে কাঙ্খিত পণ্য হোম ডেলিভারি নিন
                </span>
              </h2>
              <p className="text-gray-500 sm:text-sm  dark:text-gray-400">
                ৪,৪০০ টি পণ্য থেকে খুঁজে নিন সেরা ডিল যা পৌঁছে যাবে আপনার
                দোরগোড়ায়। অনলাইনে অর্ডার করুন ও আমাদের
                <span className="font-bold text-gray-600">ক্রেতা সুরক্ষা</span>
                পলিসি উপভোগ করুন, যার ফলে পণ্য বিজ্ঞাপন বর্ণনার সাথে মিল না
                থাকলে আইটেমটির ফ্রি রিপ্লেসমেন্ট পাবেন!
              </p>
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
}

export default AboutService;
