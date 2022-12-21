import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoDark from "../../assets/bikikini-dark.png";
import logo from "../../assets/bikikini.png";
import { AuthContext } from "../../Contexts/FireAuthContext";
import ButtonSmall from "../Buttons/ButtonSmall";
import ButtonYellow from "../Buttons/ButtonYellow";
import "./Nav.css";

function Navbar() {
  const [navToggler, setNavToggler] = useState(false);
  const [userDropDown, setUserDropDown] = useState(false);

  const { logOut, user, role, setRole } = useContext(AuthContext);
  // console.log(role);

  const navToggleHandler = () => {
    setNavToggler((prev) => !prev);
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/role?UID=${user?.uid}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role && !role) {
          return setRole(data[0]?.role);
        }
      });
  }, [user]);
  // useEffect(() => {}, [role]);
  console.log(role);

  return (
    <>
      <div className="bg-[#149777] w-full">
        <div className="min-h-[64px] max-w-5xl mx-auto p-4">
          <div className="px-4 sm:px-8  flex  items-center  top-0">
            <div className="flex justify-between  text-[12px] custome_nav_parent w-full  ">
              <div className="flex self-center flex-row ml-0 mr-[12px]">
                <div
                  className="lg:hidden flex self-center text-white mr-6"
                  onClick={navToggleHandler}
                >
                  <i className="fa-solid fa-bars text-xl sm:text-2xl -mt-3 "></i>
                </div>
                {navToggler && (
                  <div className="overlay_custome">
                    <div className="overlay_conatiner w-[80%]">
                      <div className="px-4 py-2 flex justify-between">
                        <Link to={"/"}>
                          <div onClick={navToggleHandler}>
                            <img
                              src={logoDark}
                              className="h-12 sm:h-14"
                              alt=""
                            />
                          </div>
                        </Link>
                        <div
                          className="flex self-center text-white"
                          onClick={navToggleHandler}
                        >
                          <i className="fa-solid fa-xmark text-xl -mt-2"></i>
                        </div>
                      </div>

                      <div className="my-8 mx-4 max-w-md font-medium ">
                        <div className="py-2">
                          <div className="py-3 my-2">
                            <div className=" text-gray-400 flex gap-4">
                              <div className="text-xl md:text-2xl">
                                <i className="fa-solid fa-tag"></i>
                              </div>
                              <Link to={"/products/all"}>
                                <div
                                  className="text-sm md:text-lg flex self-center pt-1"
                                  onClick={navToggleHandler}
                                >
                                  Biki-kini এ সমস্ত বিজ্ঞাপন
                                </div>
                              </Link>
                            </div>
                          </div>
                          <hr className="w-full mx-auto   opacity-40 " />
                          <div className="py-3 my-2">
                            <div className=" text-gray-400 flex gap-4">
                              <div className="text-xl md:text-2xl">
                                <i className="fa-solid fa-user"></i>
                              </div>
                              <div className="text-sm md:text-base flex self-center">
                                ড্যাশবোর্ড
                              </div>
                            </div>
                          </div>
                          <hr className="w-full mx-auto   opacity-40 " />
                          <div className="py-3 my-2">
                            <Link to={"/blog"}>
                              <div
                                className=" text-gray-400 flex gap-4"
                                onClick={navToggleHandler}
                              >
                                <div className="text-xl md:text-2xl">
                                  <i className="fa-solid fa-circle-question"></i>
                                </div>
                                <div className="text-sm md:text-base flex self-center  ">
                                  আমাদের <span className="px-2"> ব্লগ</span>
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div className="py-3 my-2">
                            <div className=" text-gray-400 flex gap-4">
                              <div className="text-xl md:text-2xl">
                                <i className="fa-solid fa-shield-halved"></i>
                              </div>
                              <div className="text-sm md:text-base flex self-center">
                                নিরাপদ থাকুন!
                              </div>
                            </div>
                          </div>

                          <div className="py-3 my-2">
                            <div className=" text-gray-400 flex gap-4">
                              <div className="text-xl md:text-2xl">
                                <i className="fa-solid fa-sack-dollar"></i>
                              </div>
                              <div className="text-sm md:text-base flex self-center">
                                কিভাবে দ্রুত যায় করা যায়?
                              </div>
                            </div>
                          </div>
                          <div className="py-3 my-2">
                            <div className=" text-gray-400 flex gap-4">
                              <div className="text-xl md:text-2xl">
                                <i className="fa-solid  fa-ellipsis"></i>
                              </div>
                              <div className="text-sm md:text-base flex self-center">
                                আরও
                              </div>
                            </div>
                          </div>
                          <hr className="w-full mx-auto   opacity-40 " />
                          <div className="py-3 my-2">
                            <div className=" text-gray-400 flex justify-center gap-4">
                              <button
                                type="button"
                                className="text-gray-400 border-[3px]  border-gray-400  font-medium rounded-full text-sm px-4 py-2 text-center mr-2 mb-2 "
                              >
                                লগইন / সাইনআপ
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="">
                  <Link to={"/"}>
                    <img src={logo} className="h-12 sm:h-14" alt="" />
                  </Link>
                </div>

                <div className="hidden lg:flex self-center text-white  gap-3 px-6">
                  <Link to={"/products/all"}>
                    <div className="menu_btn text-[16px] cursor-pointer">
                      সকল বিজ্ঞাপন
                    </div>
                  </Link>
                  <div className="cursor-pointer">
                    <Link to={"/blog"}>
                      <ButtonSmall value={"Blogs"} />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-4">
                <div className="flex self-center flex-row ml-0 mr-[12px] gap-4">
                  <div className="text-white text-[20px] md:text-[16px] font-medium cursor-pointer">
                    <i className="fa-solid fa-comments  "></i>
                    <span className="px-2 hidden md:inline">চ্যাট</span>
                  </div>
                  <div className="text-white text-[20px] md:text-[16px] font-medium cursor-pointer">
                    {user && user.uid ? (
                      <div
                        className="rounded-full  border-[3.2px] border-white lg:-mt-1"
                        onClick={() => setUserDropDown((prev) => !prev)}
                      >
                        <img
                          className="h-7 w-7 rounded-full "
                          src={user?.photoURL}
                          alt=""
                        />
                      </div>
                    ) : (
                      <Link to={"/login"}>
                        <div>
                          <i className="fa-solid fa-user  "></i>
                          <span className="px-2 hidden md:inline">লগ ইন</span>
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
                <div className="hidden lg:inline cursor-pointer">
                  <ButtonYellow value={"আপনার বিজ্ঞাপন দিন"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:max-w-2xl lg:mx-auto ">
        <div className="relative ">
          <div className=" absolute right-0 z-10  w-48 origin-top-right rounded-md  py-1   focus:outline-none transition ease-out duration-100">
            <div
              style={{ display: `${userDropDown ? "block" : "none"}` }}
              className=" mr-[10px] text-base list-none divide-y rounded shadow-xl glassMorphism cursor-pointer"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <div
                  className="pb-1 text-end text-sm  text-gray-200 hover:text-white"
                  onClick={() => setUserDropDown((prev) => !prev)}
                >
                  <i className="fa-solid fa-xmark"></i>
                </div>
                <span className="block text-sm text-white opacity-90">
                  User: {user?.displayName}
                </span>
              </div>
              <ul className="py-1 pb-2" aria-labelledby="user-menu-button">
                {/* {console.log(role)} */}
                {role && role === "admin" ? (
                  <>
                    <li>
                      <Link to={"/dashboard/admin/user/all"}>
                        <div className="block px-4 py-2 text-sm hover:bg-[#FFC800] text-gray-200 hover:text-[#673500] cursor-pointer">
                          All users
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/dashboard/admin/user/user"}>
                        <div className="block px-4 py-2 text-sm hover:bg-[#FFC800] text-gray-200 hover:text-[#673500] cursor-pointer">
                          All buyers
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/dashboard/admin/user/seller"}>
                        <div className="block px-4 py-2 text-sm hover:bg-[#FFC800] text-gray-200 hover:text-[#673500] cursor-pointer">
                          All sellers
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/dashboard/admin/reportedItems"}>
                        <div className="block px-4 py-2 text-sm hover:bg-[#FFC800] text-gray-200 hover:text-[#673500] cursor-pointer">
                          Reported Items
                        </div>
                      </Link>
                    </li>
                  </>
                ) : role && role === "user" ? (
                  <>
                    {" "}
                    <li>
                      <Link to={"/dashboard"}>
                        <div className="block px-4 py-2 text-sm hover:bg-[#FFC800] text-gray-200 hover:text-[#673500] cursor-pointer">
                          My orders
                        </div>
                      </Link>
                    </li>
                  </>
                ) : role && role === "seller" ? (
                  <>
                    <li>
                      <Link to={"/dashboard/seller/my-products"}>
                        <div className="block px-4 py-2 text-sm hover:bg-[#FFC800] text-gray-200 hover:text-[#673500] cursor-pointer">
                          My products
                        </div>
                      </Link>
                    </li>
                  </>
                ) : (
                  ""
                )}

                <li onClick={() => logOut()}>
                  <div className="block px-4 py-2 text-sm hover:bg-[#FFC800] text-gray-200 hover:text-[#673500] cursor-pointer">
                    Sign out
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
