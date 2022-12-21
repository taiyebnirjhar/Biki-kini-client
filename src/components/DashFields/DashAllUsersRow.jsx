import React from "react";

function DashAllUsersRow({ userData, handleDeleteUsers }) {
  const { email, role, userId, verified } = userData;
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th
          scope="row"
          className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
        >
          <div className="pl-3">
            <div className="text-base font-semibold opacity-80">{userId}</div>
            <div className="font-normal text-gray-500">{email}</div>
          </div>
        </th>
        <td className="py-4 px-6">{role}</td>

        <td className="py-4 px-6">
          <div className="flex items-center">
            <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>
            {verified ? verified : "not verified"}
          </div>
        </td>

        {role !== "admin" && (
          <td className="py-4 px-6 cursor-pointer">
            <div
              onClick={() => handleDeleteUsers(userId)}
              className="font-medium text-red-600 dark:text-red-500 hover:underline"
            >
              Delete user
            </div>
          </td>
        )}

        {role === "seller" && (
          <td className="py-4 px-6">
            <a
              href="#"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              verify
            </a>
          </td>
        )}
      </tr>
    </>
  );
}

export default DashAllUsersRow;
