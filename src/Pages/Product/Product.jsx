import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ProductCard from "../../components/Cards/ProductCard";
import Modal from "../../components/Modal/Modal";
import ReportModal from "../../components/Modal/ReportModal";
import ProductHero from "../../components/ProductHero/ProductHero";
import SearchHero from "../../components/SearchHero/SearchHero";
import { AuthContext } from "../../Contexts/FireAuthContext";

function Product() {
  const [allProducts, setAllProducts] = useState([]);
  const {
    toggleModal,
    setToggleModal,
    toggleReportModal,
    setToggleReportModal,
  } = useContext(AuthContext);
  const [modalData, setModalData] = useState(null);

  const product_DATA = useLoaderData();

  useEffect(() => {
    document.title = "bikikini: products";
  }, []);

  return (
    <>
      {toggleModal && (
        <div className="overflow-y-hidden ">
          <Modal modalData={modalData} />
        </div>
      )}
      {toggleReportModal && (
        <div className="overflow-y-hidden ">
          <ReportModal modalData={modalData} />
        </div>
      )}
      <SearchHero />

      <div className="max-w-7xl mx-auto xl:mt-4">
        <ProductHero />
        <div className="mt-4  md:flex  justify-between gap-10 px-6  ">
          <div>
            <aside
              className=" lg:min-w-[300px]  flex-auto sticky"
              aria-label="Sidebar"
            >
              <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                <ul className="space-y-2">
                  <li>
                    <Link to={"/products/all"}>
                      <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <span className="flex-shrink-0  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white text-xl">
                          <i className="fa-brands fa-android"></i>
                        </span>
                        <span className="flex-1 ml-3 whitespace-nowrap font-semibold text-gray-600">
                          সকল বিজ্ঞাপন
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/products/performance"}>
                      <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <span className=" text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                          <i className="fa-solid fa-fire-flame-curved text-xl"></i>
                        </span>
                        <span className="flex-1 ml-3 whitespace-nowrap font-semibold text-gray-600">
                          পারফরম্যান্স ফোকাসড
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/products/flagship"}>
                      <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <span className=" text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                          <i className="fa-solid fa-leaf text-xl"></i>
                        </span>
                        <span className="flex-1 ml-3 whitespace-nowrap font-semibold text-gray-600">
                          ফ্ল্যাগ শিপ
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/products/budget-friendly"}>
                      <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <span className="flex-shrink-0  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                          <i className="fa-solid fa-heart text-xl"></i>
                        </span>
                        <span className="flex-1 ml-3 whitespace-nowrap font-semibold text-gray-600">
                          বাজেট ফ্রেন্ডলি
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/products/gaming"}>
                      <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <span className="flex-shrink-0  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                          <i className="fa-solid fa-gamepad text-xl"></i>
                        </span>
                        <span className="flex-1 ml-3 whitespace-nowrap font-semibold text-gray-600">
                          গেমিং ফোন
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/products/button"}>
                      <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <span className="flex-shrink-0  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                          <i className="fa-solid fa-mobile-retro text-xl"></i>
                        </span>
                        <span className="flex-1 ml-3 whitespace-nowrap font-semibold text-gray-600">
                          বাটন ফোন
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/products/minimal"}>
                      <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <span className="flex-shrink-0  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                          <i className="fa-solid fa-mobile text-xl"></i>
                        </span>
                        <span className="flex-1 ml-3 whitespace-nowrap font-semibold text-gray-600">
                          মিনিমাল
                        </span>
                      </div>
                    </Link>
                  </li>
                </ul>
                <div
                  id="dropdown-cta"
                  className="p-4 mt-6 bg-blue-50 rounded-lg md:max-w-sm"
                  role="alert"
                >
                  <div className="flex items-center mb-3">
                    <span className="text-pink-800  text-sm font-semibold mr-2  py-0.5 rounded ">
                      আপনার বিজ্ঞাপন দিন
                    </span>
                    <button
                      type="button"
                      className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 "
                      data-collapse-toggle="dropdown-cta"
                      aria-label="Close"
                      onClick={() => setAds(false)}
                    >
                      <span className="sr-only">Close</span>
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      {/* <i className="fa-solid fa-wand-magic-sparkles"></i> */}
                    </button>
                  </div>
                  <p className="mb-3 text-sm text-blue-900 ">
                    আপনার প্রথম বিজ্ঞাপনটি পোস্ট করুন এবং অর্থ আয় করুন! আপনার
                    যাবতীয় ট্রানসাকশান ম্যানেজ করুন সহজেই .
                  </p>
                </div>
              </div>
            </aside>
          </div>
          <div className="flex-auto w-full">
            <div className="flex flew-row flex-wrap justify-center gap-4 px-4 md:justify-between  ">
              {product_DATA.map((items, index) => {
                // console.log(items);
                return (
                  <ProductCard
                    fullData={items}
                    postDate={items.postDate}
                    setToggleModal={setToggleModal}
                    setToggleReportModal={setToggleReportModal}
                    seller={items.seller}
                    setModalData={setModalData}
                    key={index}
                    productImage={items.productImage}
                    modelName={items.modelName}
                    used={items.used}
                    originPrice={items.originPrice}
                    sellerPrice={items.sellerPrice}
                    location={items.location}
                    division={items.division}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
