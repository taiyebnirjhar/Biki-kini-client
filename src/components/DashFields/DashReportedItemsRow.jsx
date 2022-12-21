import React from "react";

function DashReportedItemsRow({
  userData,
  handleDeleteReportedItems,
  handleDeleteREPORTE,
}) {
  const { productImage, modelName, productId, buyeruid, buyerMessage } =
    userData;

  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th
          scope="row"
          className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
        >
          <img
            className="w-10 h-10 rounded-full"
            src={productImage}
            alt="productImage"
          />
          <div className="pl-3">
            <div className="text-base font-semibold opacity-80">
              {modelName}
            </div>
            <div className="font-normal text-gray-500">{productId}</div>
          </div>
        </th>
        <td className="py-4 px-6">{buyeruid}</td>
        <td className="py-4 px-6">
          <div className="flex items-center">{buyerMessage}</div>
        </td>
        <td className="py-4 px-6">
          <div
            onClick={() => {
              console.log(productId);
              handleDeleteReportedItems(productId);
            }}
            className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer"
          >
            Delete product
          </div>
        </td>
        <td className="py-4 px-6">
          <div
            onClick={() => {
              console.log(productId);
              handleDeleteREPORTE(productId);
            }}
            className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer"
          >
            Delete report
          </div>
        </td>
      </tr>
    </>
  );
}

export default DashReportedItemsRow;
