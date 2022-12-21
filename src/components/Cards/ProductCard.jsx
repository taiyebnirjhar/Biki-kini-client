import React from "react";

function ProductCard({
  productImage,
  modelName,
  used,
  originPrice,
  sellerPrice,
  location,
  division,
  setModalData,
  setToggleModal,
  setToggleReportModal,
  seller,
  fullData,
  postDate,
}) {
  const bookNowHandler = () => {
    setModalData(fullData);

    setToggleModal(true);
  };
  const ReportHandler = () => {
    setModalData(fullData);
    setToggleReportModal(true);
  };

  const { name, uid, email, verified, image } = seller;

  return (
    <>
      <div className="card md:max-w-[47%] md:flex-[0 0 47%]" id="title">
        <div className="pointer w-full ">
          <div className="relative  overflow-hidden ">
            <div className="sm:max-w-[250px] sm:max-h-[320px] min-h-[330px] flex items-center">
              <img
                className="w-full h-full rounded align-middle card-img"
                src={productImage}
                alt="productImage"
              />
            </div>
          </div>
          <div className="pt-4 px-4  pb-5">
            <a>
              <h5 className="py-2 text-base font-semibold tracking-tight text-gray-700 dark:text-white opacity-90">
                {modelName}
              </h5>
            </a>

            <div className="flex items-center font-normal  py-2 text-gray-700">
              original price
              <span className="bg-green-100 text-[#179777] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                {originPrice}
              </span>
            </div>
            <div className="flex items-center font-normal  py-2 text-gray-700">
              used:
              <span className="bg-green-100 text-[#179777] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                {used}
              </span>
            </div>
            <div className="flex items-center font-normal  py-2 text-gray-700">
              Location:
              <span className="bg-green-100 text-[#179777] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                {location}
              </span>
            </div>
            <div className="flex items-center font-normal  py-2 text-gray-700">
              posted on
              <span className="bg-green-100 text-[#179777] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                {postDate}
              </span>
            </div>
            <div
              className="flex text-[10px] items-center font-normal  py-2 cursor-pointer"
              onClick={ReportHandler}
            >
              <span className="text-red-500 underline"> Report to admin</span>

              <span className="px-2 text-red-400 mt-[2.5px]">
                <i className="fa-solid fa-circle-info"></i>
              </span>
            </div>

            {/* <div className="text-gray-600 font-normal  py-2 ">
              {location}, {division}
            </div> */}
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center space-x-4">
                <img
                  className="w-7 h-7 rounded-full"
                  src={image}
                  alt="Jese Leos avatar"
                />
                <span className="font-medium text-gray-600 dark:text-white">
                  {name}
                </span>
              </div>
              {verified === "true" && (
                <a className="inline-flex items-center rounded-full  font-medium text-primary-600 dark:text-primary-500 hover:underline">
                  <i className="fa-regular fa-circle-check text-blue-600 rounded-full text-base  "></i>
                </a>
              )}
            </div>
            {/* <div className="flex items-center font-normal text-xs py-2 text-gray-700">
              Report To admin
              <span className="bg-green-100 text-[#179777] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                {location}
              </span>
            </div> */}
            <div className="flex items-center justify-between">
              <span
                className="text-base font-medium
                text-gray-600 dark:text-white"
              >
                BDT <span>{sellerPrice}</span>
              </span>
              <div
                onClick={bookNowHandler}
                className="text-[#179777] border-[3px] border-[#179777] bg-white hover:bg-[#179777] hover:text-white focus:ring-4 focus:outline-none font-medium rounded-md text-xs px-3 py-1.5 text-center cursor-pointer"
              >
                buy now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
