import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Contexts/FireAuthContext";

function DashAddProd() {
  const { user, logOut } = useContext(AuthContext);
  const [prodCat, setProdCat] = useState(null);
  const [prodCondition, setProdCondition] = useState(null);
  const navigate = useNavigate();

  const handleAddNewProd = (e) => {
    e.preventDefault();
    const form = e.target;
    const modelName = form.prodName.value;
    const originPrice = form.prodOGprice.value;
    const sellerPrice = form.prodSellerPrice.value;
    const location = form.sellerLocation.value;
    const sellerPhoneNumber = form.seller_phone.value;
    const image = form.prodImage.files[0];
    const used = form.usageTime.value;
    console.log(used);

    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMAGE_KEY
    }`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const productImage = data?.data?.display_url;

        const productData = {
          modelName,
          productImage,
          category: prodCat,
          condition: prodCondition,
          originPrice,
          sellerPrice,
          location,
          sellerPhoneNumber,
          used,
          active: "true",
          postDate: new Date().toLocaleDateString(),
          seller: {
            name: user.displayName,
            email: user.email,
            uid: user.uid,
            image: user.photoURL,
            verified: "true",
          },
        };

        fetch(`${import.meta.env.VITE_API_URL}/seller/add-product`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem("biki-kini-token")}`,
          },
          body: JSON.stringify(productData),
        })
          .then((res) => res.json())
          .then((data) => {
            toast.success("added product Successfully 🦄!", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });

            navigate("/dashboard/seller/my-products");
            form.reset();
          })
          .then();

        console.log(productData);
      });
  };
  useEffect(() => {
    document.title = "bikikini: add products";
  }, []);

  return (
    <>
      {" "}
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
                  <Link to={"/dashboard/seller/my-products"}>
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
                    </div>
                  </Link>
                </li>
                <li>
                  <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    <div className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                      <i className="fa-solid fa-cart-plus"></i>
                    </div>
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Add new product
                    </span>
                  </div>
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
              <div className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <h1 className="text-start text-lg font-semibold py-4">
                  Product Form
                </h1>
                <form onSubmit={handleAddNewProd}>
                  {/* prodname */}
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="text"
                      name="prodName"
                      id="prodName"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="prodName"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Product Name
                    </label>
                  </div>

                  <div className="grid md:grid-cols-2 md:gap-6">
                    {/* prod original price */}
                    <div className="relative z-0 mb-6 w-full group">
                      <input
                        type="number"
                        name="prodOGprice"
                        id="prodOGprice"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="prodOGprice"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Product Original Price
                      </label>
                    </div>
                    {/* prod seller price */}
                    <div className="relative z-0 mb-6 w-full group">
                      <input
                        type="number"
                        name="prodSellerPrice"
                        id="prodSellerPrice"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="prodSellerPrice"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Product Seller Price
                      </label>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 md:gap-6">
                    {/* seller phone */}
                    <div className="relative z-0 mb-6 w-full group">
                      <input
                        type="tel"
                        // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        name="seller_phone"
                        id="seller_phone"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="seller_phone"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Phone number
                      </label>
                    </div>
                    {/* seller Location */}
                    <div className="relative z-0 mb-6 w-full group">
                      <input
                        type="text"
                        name="sellerLocation"
                        id="sellerLocation"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="sellerLocation"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Location
                      </label>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                      <label htmlFor="underline_select" className="sr-only">
                        Underline select
                      </label>
                      <select
                        onChange={(e) => setProdCat(e.target.value)}
                        id="underline_select"
                        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                      >
                        <option selected>Choose Product Category</option>
                        <option value="performance">performance</option>
                        <option value="flagship">flagship</option>
                        <option value="budget-friendly">budget-friendly</option>
                        <option value="gaming">gaming</option>
                        <option value="button">button</option>
                        <option value="minimal">minimal</option>
                      </select>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                      <label htmlFor="underline_select" className="sr-only">
                        Underline select
                      </label>
                      <select
                        onChange={(e) => setProdCondition(e.target.value)}
                        id="underline_select"
                        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                      >
                        <option selected>Choose Product Condition</option>
                        <option value="Used - like new">Used - like new</option>
                        <option value="Used - Good">Used - Good</option>
                        <option value="Used - fair">Used - fair</option>
                      </select>
                    </div>
                  </div>
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="text"
                      name="usageTime"
                      id="usageTime"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="usageTime"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      How long have you used it? (ex: 1 year , half year , six
                      month etc)
                    </label>
                  </div>

                  {/* file */}
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="file"
                      name="prodImage"
                      accept="image/*"
                      id="prodImage"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="prodImage"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Product Image
                    </label>
                  </div>
                  <div className="py-6">
                    <button
                      type="submit"
                      className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashAddProd;
