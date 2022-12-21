import React from "react";

function DashMyProducts({ rowData, handleDelete, handleAdvertise }) {
  const { productImage, modelName, active, buyerLocation, sellerPrice, _id } =
    rowData;

  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="p-4 w-32">
          <img src={productImage} alt="productImage" />
        </td>
        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
          {modelName}
        </td>
        <td className="py-4 px-6">
          <div className="flex items-center ">
            {active ? "available" : "sold"}
          </div>
        </td>
        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
          {sellerPrice}
        </td>

        <td className="py-4 px-6">
          <div
            className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer "
            onClick={() => handleDelete(_id)}
          >
            delete
          </div>
        </td>

        {active && (
          <td className="py-4 px-6" onClick={() => handleAdvertise(rowData)}>
            <a className="font-medium text-red-600 dark:text-red-500 hover:underline">
              advertise
            </a>
          </td>
        )}
      </tr>
    </>
  );
}

export default DashMyProducts;
