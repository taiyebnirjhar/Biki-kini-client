import React from "react";

function ButtonSmall({ value }) {
  return (
    <>
      <button
        type="button"
        className="py-[6px] px-[12px]  text-xs font-medium text-center text-white rounded custom_border"
      >
        {value}
      </button>
    </>
  );
}

export default ButtonSmall;
