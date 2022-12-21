import React from "react";
import icon from "../../assets/icon-green-trans.png";
function Loader() {
  return (
    <div className="w-full h-screen">
      <div className="flex justify-center items-center h-[90%] -mt-8">
        <div></div>
        <div className="animate-pulse  rounded-full ">
          <img src={icon} className="w-36 h-36 inline opacity-50 " alt="" />
        </div>
      </div>
    </div>
  );
}

export default Loader;
