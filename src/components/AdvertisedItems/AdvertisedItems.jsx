import React from "react";
import ItemsCard from "./ItemsCard";

function AdvertisedItems({ adsData }) {
  return (
    <div>
      <div className="mt-8 mb-8 mx-4 p-8 bg-white">
        <div className="text-[#2f3432] font-extrabold px-4 text-lg">
          এডভার্টাইজড আইটেমস
        </div>
        <div className="w-full">
          <div className="px-8 py-4 flex flex-row flex-wrap flex-auto gap-6 ">
            {adsData.map((items) => {
              return <ItemsCard data={items} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvertisedItems;
