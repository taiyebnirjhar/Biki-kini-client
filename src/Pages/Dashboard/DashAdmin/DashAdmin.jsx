import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import DashAllUsersRow from "../../../components/DashFields/DashAllUsersRow";
import { AuthContext } from "../../../Contexts/FireAuthContext";

function DashAdmin() {
  const { user, role, logOut } = useContext(AuthContext);
  const user_DATA = useLoaderData();
  const [reFETCH, setREFETCH] = useState(false);

  const handleRefetch = () => {
    setREFETCH((prev) => !prev);
  };

  const location = useLocation();
  const path = location.pathname;
  // console.log(path);

  const handleDeleteUsers = (id) => {
    fetch(`${import.meta.env.VITE_API_URL}/user/delete/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("biki-kini-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        handleRefetch();
      });
  };

  // useEffect(() => {}, [reFETCH]);
  useEffect(() => {
    document.title = "bikikini: admin";
  }, []);
  return (
    <div className="max-w-[1536px] mx-auto px-8 py-6">
      <div className="flex flex-col md:flex-row w-full gap-8">
        <aside className="w-full md:w-64" aria-label="Sidebar">
          <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
            <ul className="space-y-3">
              <li>
                <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <div className="flex-shrink-0 w-7 h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                    <img
                      src={user.photoURL}
                      alt=""
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    {user.displayName}
                  </span>
                </div>
              </li>
              <li>
                <Link to={"/dashboard/admin/user/all"}>
                  <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    <div className="flex-shrink-0  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                      <span className="h-full w-full">
                        <i className="text-lg fa-solid fa-users-viewfinder"></i>
                      </span>
                    </div>
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      All users
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={"/dashboard/admin/user/seller"}>
                  <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    <div className="flex-shrink-0  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                      <span className="h-full w-full">
                        <i className="text-lg fa-solid fa-address-card"></i>
                      </span>
                    </div>
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      All sellers
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={"/dashboard/admin/user/user"}>
                  <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    <div className="flex-shrink-0  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                      <span className="h-full w-full">
                        <i className="text-lg fa-solid fa-users"></i>
                      </span>
                    </div>
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      All buyers
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={"/dashboard/admin/reportedItems"}>
                  <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    <div className="flex-shrink-0  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                      <span className="h-full w-full">
                        <i className="text-lg fa-solid fa-bug"></i>
                      </span>
                    </div>
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Reported Items
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <div
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  onClick={() => logOut()}
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Sign out
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </aside>
        <div className="w-full mt-6">
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    Name
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Position
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Status
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* {allusers.map((items, index) => {
                  return  />;
                })} */}

                {user_DATA.map((items) => (
                  <DashAllUsersRow
                    key={items._id}
                    userData={items}
                    handleDeleteUsers={handleDeleteUsers}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashAdmin;
