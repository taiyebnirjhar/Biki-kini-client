import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const baseUrl = `${import.meta.env.VITE_API_URL}/products/all`;

function CategoryHome() {
  const [allProducts, setAllProducts] = useState([]);

  /*************************************************************/
  useEffect(() => {
    axios.get(baseUrl).then((res) => setAllProducts(res.data));
  }, []);
  /*************************************************************/

  return (
    <div className="mt-8 mb-8 mx-4 p-8 bg-white">
      <div className="text-[#2f3432] font-extrabold px-4 text-lg">
        ক্যাটাগরি অনুযায়ী ব্রাউজ করুন
      </div>
      <div className="w-full">
        <div className="flex flex-row flex-wrap justify-around gap-4 text-base font-medium">
          <div className="px-4 mt-4 w-[27%]">
            <Link to={"/products/performance"}>
              <div className="flex flex-col justify-center cursor-pointer ">
                <div className="text-[#2f3432] text-[16px]">
                  পারফরম্যান্স ফোকাসড
                </div>
                <div className="text-[#707676] text-[14px]">
                  সর্বমোট
                  <span className="text-[#0773BA] px-1.5 opacity-95">
                    {allProducts.length}
                  </span>
                  টি বিজ্ঞাপন
                </div>
              </div>
            </Link>
          </div>
          <div className="px-4 mt-4 w-[27%]">
            <Link to={"/products/flagship"}>
              <div className="flex flex-col justify-center cursor-pointer ">
                <div className="text-[#2f3432] text-[16px]"> ফ্ল্যাগ শিপ</div>
                <div className="text-[#707676] text-[14px]">
                  সর্বমোট
                  <span className="text-[#0773BA] px-1.5 opacity-95">
                    {allProducts.length}
                  </span>
                  টি বিজ্ঞাপন
                </div>
              </div>
            </Link>
          </div>
          <div className="px-4 mt-4 w-[27%]">
            <Link to={"/products/budget-friendly"}>
              <div className="flex flex-col justify-center cursor-pointer">
                <div className="text-[#2f3432] text-[16px]">
                  বাজেট ফ্রেন্ডলি{" "}
                </div>
                <div className="text-[#707676] text-[14px]">
                  সর্বমোট
                  <span className="text-[#0773BA] px-1.5 opacity-95">
                    {allProducts.length}
                  </span>
                  টি বিজ্ঞাপন
                </div>
              </div>
            </Link>
          </div>
          <div className="px-4 mt-4 w-[27%]">
            <Link to={"/products/gaming"}>
              <div className="flex flex-col justify-center cursor-pointer">
                <div className="text-[#2f3432] text-[16px]">গেমিং ফোন </div>
                <div className="text-[#707676] text-[14px]">
                  সর্বমোট
                  <span className="text-[#0773BA] px-1.5 opacity-95">
                    {allProducts.length}
                  </span>
                  টি বিজ্ঞাপন
                </div>
              </div>
            </Link>
          </div>

          <div className="px-4 mt-4 w-[27%]">
            <Link to={"/products/button"}>
              <div className="flex flex-col justify-center cursor-pointer ">
                <div className="text-[#2f3432] text-[16px]">বাটন ফোন </div>
                <div className="text-[#707676] text-[14px]">
                  সর্বমোট
                  <span className="text-[#0773BA] px-1.5 opacity-95">
                    {allProducts.length}
                  </span>
                  টি বিজ্ঞাপন
                </div>
              </div>
            </Link>
          </div>
          <div className="px-4 mt-4 w-[27%]">
            <Link to={"/products/minimal"}>
              <div className="flex flex-col justify-center cursor-pointer ">
                <div className="text-[#2f3432] text-[16px]">মিনিমাল </div>
                <div className="text-[#707676] text-[14px]">
                  সর্বমোট
                  <span className="text-[#0773BA] px-1.5 opacity-95">
                    {allProducts.length}
                  </span>
                  টি বিজ্ঞাপন
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryHome;
