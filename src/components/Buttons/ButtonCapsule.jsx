import React from "react";

function ButtonCapsule({ value = "" }) {
  return (
    <>
      <button
        type="button"
        className="inline-block mx-1.5 px-6 py-2 border-2 rounded-[25px] border-[#179777] text-[#179777] primary_font_light font-semibold text-sm leading-tight uppercase  hover:text-white hover:bg-[#179777] focus:outline-none focus:ring-0 transition duration-150 ease-in-out "
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        {value}
      </button>
    </>
  );
}

export default ButtonCapsule;
