function ItemsCard({ data }) {
  console.log(data);
  const { productImage, modelName, originPrice, sellerPrice, location, used } =
    data;
  return (
    <>
      <div
        href="#"
        className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full h-fit rounded-t-lg md:h-full md:w-28 md:rounded-none md:rounded-l-lg"
          src={productImage}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-base font-bold tracking-tight text-gray-700 dark:text-white">
            {modelName}
          </h5>
          <div className="flex ">
            <div className="flex items-center font-normal text-xs py-1 text-gray-700">
              original price
              <span className="bg-green-100 text-[#179777] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                {originPrice}
              </span>
            </div>
            <div className="flex items-center font-normal text-xs py-1 text-gray-700">
              seller price
              <span className="bg-green-100 text-[#179777] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                {sellerPrice}
              </span>
            </div>
          </div>
          <div className="flex ">
            <div className="flex items-center font-normal text-xs py-1 text-gray-700">
              Location
              <span className="bg-green-100 text-[#179777] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                {location}
              </span>
            </div>
            <div className="flex items-center font-normal text-xs py-1 text-gray-700">
              used for
              <span className="bg-green-100 text-[#179777] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                {used}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center space-x-4">
              <img
                className="w-6 h-6 rounded-full"
                src={data.seller.image}
                alt="Jese Leos avatar"
              />
              <span className="font-medium text-sm text-gray-600 dark:text-white">
                {data.seller.name}
              </span>
            </div>
            {data.seller.verified === "true" && (
              <a className="inline-flex items-center rounded-full  font-medium text-primary-600 dark:text-primary-500 hover:underline">
                <i className="fa-regular fa-circle-check text-blue-600 rounded-full text-xs  "></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemsCard;
