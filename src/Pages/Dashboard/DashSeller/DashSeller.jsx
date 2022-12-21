import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import DashMyProducts from "../../../components/DashFields/DashMyProducts";
import { AuthContext } from "../../../Contexts/FireAuthContext";

function DashSeller() {
  const { user, logOut } = useContext(AuthContext);
  const [myorders, setMyorders] = useState([]);
  const [reFETCH, setREFETCH] = useState(false);

  const handleRefetch = () => {
    setREFETCH((prev) => !prev);
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products/myproducts/${user?.uid}`)
      .then((res) => res.json())
      .then((data) => setMyorders(data));
  }, [reFETCH]);

  useEffect(() => {
    document.title = "bikikini: my products";
  }, []);

  const handleDelete = (id) => {
    fetch(`${import.meta.env.VITE_API_URL}/products/myproducts/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("biki-kini-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(" product deleted Successfully 🦄!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        handleRefetch();
      });
  };

  const handleAdvertise = (data) => {
    const productData = { ...data, advertised: "true" };
    delete productData._id;
    console.log(productData);

    fetch(`${import.meta.env.VITE_API_URL}/product/advertise`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("biki-kini-token")}`,
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("added to home page Successfully 🦄!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  console.log(myorders);
  return (
    <>
      <div className="max-w-[1536px] mx-auto px-8 py-6">
        <div className="flex flex-col md:flex-row w-full gap-8">
          <aside className="w-full md:w-64" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
              <ul className="space-y-2">
                <li>
                  <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
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
                  <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    <svg
                      aria-hidden="true"
                      className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      My products
                    </span>
                    <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                      {/* {selling && selling.length} */}
                      {myorders ? myorders.length : "0"}
                    </span>
                  </div>
                </li>
                <li>
                  <Link to={"/dashboard/seller/add-products"}>
                    <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                      <div className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                        {" "}
                        <i className="fa-solid fa-cart-plus"></i>
                      </div>
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Add new product
                      </span>
                    </div>
                  </Link>
                </li>

                <li>
                  <div
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                    onClick={logOut}
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
                      <span className="">Image</span>
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Product
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Status
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Price
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {myorders &&
                    myorders.map((items, index) => {
                      return (
                        <DashMyProducts
                          key={index}
                          rowData={items}
                          handleDelete={handleDelete}
                          handleAdvertise={handleAdvertise}
                        />
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashSeller;
