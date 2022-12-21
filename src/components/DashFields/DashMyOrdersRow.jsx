import React from "react";

function DashMyOrdersRow({ rowData }) {
  const { productImage, modelName, buyerLocation, sellerPrice } = rowData;

  console.log(rowData);
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
            {buyerLocation ? buyerLocation : "dhaka"}
          </div>
        </td>
        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
          {sellerPrice}
        </td>
        <td className="py-4 px-6">
          <a
            href="#"
            className="font-medium text-red-600 dark:text-red-500 hover:underline"
          >
            pay
          </a>
        </td>
      </tr>
    </>
  );
}

export default DashMyOrdersRow;
