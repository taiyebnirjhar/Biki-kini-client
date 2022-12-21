import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoDark from "../../assets/bikikini-dark.png";
import logo from "../../assets/bikikini.png";
import { AuthContext } from "../../Contexts/FireAuthContext";
import "./Nav.css";

function AltNav() {
  const [navToggler, setNavToggler] = useState(false);
  const [userDropDown, setUserDropDown] = useState(false);

  const { logOut, user, role, setRole } = useContext(AuthContext);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/role?UID=${user.uid}`)
      .then((res) => res.json())
      .then((data) => {
        return setRole(data[0]?.role);
      });
  }, [user]);

  const navToggleHandler = () => {
    setNavToggler((prev) => !prev);
  };
  return (
    <>
      <div className="bg-[#149777] w-full">
        <div className="min-h-[64px] max-w-[1536px]  mx-auto p-4">
          <div className="px-4 sm:px-8  flex  items-center  top-0">
            <div className="flex justify-between  text-[12px] custome_nav_parent w-full  ">
              <div className="flex self-center flex-row ml-0 mr-[12px]">
                <div
                  className=" flex self-center text-white mr-6"
                  onClick={navToggleHandler}
                >
                  <i className="fa-solid fa-bars text-xl sm:text-2xl -mt-3 "></i>
                </div>
                {navToggler && (
                  <div className="overlay_custome">
                    <div className="overlay_conatiner lg:w-[50%] px-8 py-4 md:px-16 md:py-6  ">
                      {/*********************/}
                      <div className="flex justify-between">
                        <div>
                          <img src={logoDark} className="h-12 sm:h-14" alt="" />
                        </div>
                        <div
                          className="flex self-center text-white"
                          onClick={navToggleHandler}
                        >
                          <i className="fa-solid fa-xmark text-xl -mt-2"></i>
                        </div>
                      </div>
                      {/*********************/}
                      <div className="my-8 mx-4 max-w-xl font-medium ">
                        <div className="py-2">
                          <div className="py-3 my-2">
                            <div className=" text-gray-400 flex gap-4">
                              <div className="text-xl md:text-2xl">
                                <i className="fa-solid fa-tag"></i>
                              </div>
                              <div className="text-sm md:text-base flex self-center">
                                Biki-kini এ সমস্ত বিজ্ঞাপন
                              </div>
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
                                <i className="fa-solid fa-circle-question"></i>
                              </div>
                              <div className="text-sm md:text-base flex self-center">
                                এফএকিউ
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
                                onClick={() => logOut()}
                              >
                                লগআউট
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AltNav;
