import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setAuthToken } from "../../api/auth";

import icon from "../../assets/icon-green-trans.png";
import ButtonCapsule from "../../components/Buttons/ButtonCapsule";
import SmallSpinner from "../../components/Spinner/SmallSpinner";

import { AuthContext } from "../../Contexts/FireAuthContext";
import "../Login/Login.css";

function Regester() {
  const [showPassword, SetShowPassword] = useState(false);
  const [showConfirmPassword, SetShowConfirmPassword] = useState(false);
  const [passwordValidate, setPasswordValidate] = useState(true);
  const [role, setRole] = useState("user");

  const show = () => {
    SetShowPassword((prev) => !prev);
  };
  const showConfirm = () => {
    SetShowConfirmPassword((prev) => !prev);
  };
  const roleHandler = (e) => {
    const value = e.target.value;

    setRole(value);
  };
  /********************************/
  const {
    signupUser,
    updateUserProfile,
    loading,
    setLoading,
    loginWithGoogle,
    loginWithGithub,
  } = useContext(AuthContext);
  /********************************/
  const navigate = useNavigate();
  const location = useLocation();
  const from = "/" || location.state?.from?.pathname;

  /**********************************************************************/

  /**********************************************************************/

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const image = form.image.files[0];
    const userRole = role;

    if (password !== confirmPassword) {
      setPasswordValidate(false);
      return;
    } else {
      setPasswordValidate(true);
    }

    const formData = new FormData();
    formData.append("image", image);
    //

    // const url = `https://api.imgbb.com/1/upload?key=f921da089666fd0a310dc9d8ecee1c4a`;
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMAGE_KEY
    }`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())

      .then((data) => {
        const imageURL = data?.data?.display_url;

        signupUser(email, password)
          .then((res) => {
            const user = res.user;

            updateUserProfile({
              displayName: name,
              photoURL: imageURL,
            });

            setAuthToken(res.user, userRole);

            toast.success("Successfully registered 🦄!", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });

            navigate(from, { replace: true });

            form.reset();
          })

          .catch((err) =>
            toast.error(err.message, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            })
          );
      })

      .catch((err) => {
        toast.error(err.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setLoading(false);
      });
  };

  useEffect(() => {
    document.title = "bikikini: signup";
  }, []);

  return (
    <>
      <section className="h-full gradient-form bg-sky-50 md:h-screen ">
        <div className=" py-12 px-12 h-screen flex justify-center items-center mx-auto">
          <div className="flex justify-center items-center flex-wrap  h-full g-6 text-gray-800">
            <div className=" ">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap lg:flex-row  g-0">
                  <div className="  px-4 md:px-0">
                    <div className="min-w-[300px] sm:max-w-[350px]  md:max-w-[550px] xl:max-w-[650px]  md:p-12 md:mx-6">
                      {/************************/}
                      {/************************/}

                      <div className="text-center py-4">
                        <img
                          className="mx-auto   lg:w-24 md:w-24 w-20"
                          src={icon}
                          alt="logo"
                        />
                        <h4 className="  text-xl font-semibold  mb-12 pb-1 mt-2"></h4>
                      </div>
                      {/*****************************/}

                      <form onSubmit={handleSignUp}>
                        <p className="mb-4 font-semibold text-[#179777]  ">
                          Create an account
                        </p>

                        <div className="mb-4">
                          <input
                            type="name"
                            name="name"
                            className="form-control block w-full px-3 py-1.5 text-base  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#179777] focus:outline-none "
                            placeholder="name"
                            required
                          />
                        </div>

                        <div className="mb-4">
                          <input
                            type="file"
                            name="image"
                            accept="image/*"
                            className="form-control block w-full px-3 py-1.5 text-base  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#179777] focus:outline-none opacity-70"
                            placeholder="image"
                            required
                          />
                        </div>

                        <div className="mb-4">
                          <input
                            type="email"
                            name="email"
                            className="form-control block w-full px-3 py-1.5 text-base  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#179777] focus:outline-none "
                            placeholder="email"
                            required
                          />
                        </div>

                        <div className="mb-4 relative">
                          <input
                            name="password"
                            type={!showPassword ? "password" : "text"}
                            className="form-control block w-full px-3 py-1.5 text-base  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#179777] focus:outline-none "
                            placeholder="password"
                            required
                          />
                          {!showPassword ? (
                            <div
                              className="absolute top-1 right-5 py-1"
                              onClick={show}
                            >
                              <i className="fa-regular fa-eye text-gray-700 opacity-60"></i>
                            </div>
                          ) : (
                            <div
                              className="absolute top-1 right-5 py-1"
                              onClick={show}
                            >
                              <i className="fa-regular fa-eye-slash text-gray-700 opacity-60"></i>
                            </div>
                          )}
                        </div>

                        <div className="mb-4 relative">
                          <input
                            name="confirmPassword"
                            type={!showConfirmPassword ? "password" : "text"}
                            className="form-control block w-full px-3 py-1.5 text-base  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#179777] focus:outline-none "
                            placeholder="confirm password"
                            required
                          />
                          {!showConfirmPassword ? (
                            <div
                              className="absolute top-1 right-5 py-1"
                              onClick={showConfirm}
                            >
                              <i className="fa-regular fa-eye text-gray-700 opacity-60"></i>
                            </div>
                          ) : (
                            <div
                              className="absolute top-1 right-5 py-1"
                              onClick={showConfirm}
                            >
                              <i className="fa-regular fa-eye-slash text-gray-700 opacity-60"></i>
                            </div>
                          )}
                          {!passwordValidate && (
                            <p className="text-red-400 text-xs py-2">
                              password doesnt match!
                            </p>
                          )}
                        </div>

                        <div className="mb-4 ">
                          <div className=" text-base flex flex-row justify-around rounded border border-gray-200">
                            <div className="flex items-center pl-4 ">
                              <input
                                defaultChecked
                                type="radio"
                                name="role"
                                id="user"
                                value={"user"}
                                onChange={roleHandler}
                                className={`w-4 h-4 text-[#179777] bg-gray-100 border-gray-300 focus:ring-0`}
                              />
                              <label
                                htmlFor="user"
                                className="py-4 ml-2 w-full font-medium text-gray-600"
                              >
                                user
                              </label>
                            </div>

                            <div className="flex items-center pl-4 ">
                              <input
                                type="radio"
                                id="seller"
                                name="role"
                                value={"seller"}
                                onChange={roleHandler}
                                className={`w-4 h-4 text-[#179777] bg-gray-100 border-gray-300 focus:ring-0`}
                              />
                              <label
                                htmlFor="seller"
                                className="py-4 ml-2 w-full font-medium text-gray-600"
                              >
                                seller
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="text-center pt-1 mb-12 pb-1">
                          <button
                            type="submit"
                            className="inline-block px-6 py-2.5 text-white font-semibold text-base leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 bg-[#179777]  "
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            {loading ? <SmallSpinner /> : "Signup"}
                          </button>
                          <div className="mt-10 grid grid-cols-3 items-center ">
                            <hr className="border-gray-300" />
                            <p className="text-center text-gray-500 primary_font_light text-base font-semibold">
                              OR
                            </p>
                            <hr className="border-gray-300" />
                          </div>
                          <div className="mt-4 flex flex-row justify-center gap-4 2xl:text-2xl text-lg md:text-lg  lg:text-xl text-gray-600 font-bold opacity-90">
                            <div
                              className=" hover:text-green-400"
                              onClick={() =>
                                loginWithGoogle()
                                  .then((res) => {
                                    setAuthToken(res.user);

                                    toast.success(
                                      "Successfully logged in 🦄!",
                                      {
                                        position: "top-center",
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "colored",
                                      }
                                    );
                                    navigate(from, { replace: true });
                                  })
                                  .catch((err) => {
                                    toast.error(err.message, {
                                      position: "top-center",
                                      autoClose: 5000,
                                      hideProgressBar: false,
                                      closeOnClick: true,
                                      pauseOnHover: true,
                                      draggable: true,
                                      progress: undefined,
                                      theme: "light",
                                    });
                                  })
                              }
                            >
                              <i className="fa-brands fa-google"></i>
                            </div>
                            {/* github */}

                            <div
                              className="hover:text-green-400"
                              onClick={() =>
                                loginWithGithub()
                                  .then((res) => {
                                    setAuthToken(res.user);

                                    toast.success(
                                      "Successfully logged in 🦄!",
                                      {
                                        position: "top-center",
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "colored",
                                      }
                                    );
                                    navigate(from, { replace: true });
                                  })
                                  .catch((err) =>
                                    toast.error(err.message, {
                                      position: "top-center",
                                      autoClose: 5000,
                                      hideProgressBar: false,
                                      closeOnClick: true,
                                      pauseOnHover: true,
                                      draggable: true,
                                      progress: undefined,
                                      theme: "light",
                                    })
                                  )
                              }
                            >
                              <i className="fa-brands fa-github"></i>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pb-6 ">
                          <p className="mb-0 mr-2 text-xs sm:text-base text-gray-700 opacity-70 _light font-semibold">
                            Already have an account ?
                          </p>
                          <Link to="/login">
                            <ButtonCapsule value={"Login"} />
                          </Link>
                        </div>
                      </form>

                      {/************************/}
                      {/************************/}
                      {/************************/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Regester;
