import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setLogin } from "../../api/adminLogin";
import { setAuthToken } from "../../api/auth";
import icon from "../../assets/icon-green-trans.png";
import ButtonCapsule from "../../components/Buttons/ButtonCapsule";
import SmallSpinner from "../../components/Spinner/SmallSpinner";
import { AuthContext } from "../../Contexts/FireAuthContext";
import "./Login.css";

function LoginPage() {
  const [showPassword, SetShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    loginUser,
    loginWithGoogle,
    loginWithGithub,
    user,
    loading,
    setLoading,
  } = useContext(AuthContext);
  /********************************/
  const show = () => {
    SetShowPassword((prev) => !prev);
  };
  /**********************************************************************/

  /**********************************************************************/

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((res) => {
        // setAuthToken(res.user);
        setLogin(res.user);
        form.reset();
        toast.success("Successfully logged in 🦄!", {
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
    form.reset();
  };

  /********************************/

  useEffect(() => {
    document.title = "bikikini: login";
  }, []);
  /********************************/

  return (
    <>
      <section className="h-full gradient-form bg-sky-50 md:h-screen ">
        <div className=" py-12 px-12 h-screen flex justify-center items-center mx-auto">
          <div className="flex justify-center items-center flex-wrap  h-full g-6 text-gray-800">
            <div className=" ">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap lg:flex-row  g-0">
                  <div className=" px-4 md:px-0">
                    <div className="p-4 min-w-[300px] sm:max-w-[350px]  md:max-w-[600px] xl:max-w-[700px]   md:mx-6">
                      <div className="text-center py-4">
                        <img
                          className="mx-auto   lg:w-24 md:w-24 w-20"
                          src={icon}
                          alt="logo"
                        />
                        <h4 className=" primary_font text-xl font-semibold  mb-12 pb-1 mt-2"></h4>
                      </div>
                      {/*  */}
                      <form onSubmit={handleLogin} className="">
                        <p className="mb-4 font-semibold  brandGreen primary_font">
                          Please login to your account
                        </p>
                        <div className="mb-4">
                          <input
                            type="email"
                            name="email"
                            className="form-control block w-full px-6 py-1.5 text-base  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#179777] focus:outline-none primary_font"
                            id="exampleFormControlInput1"
                            placeholder="email"
                            required
                            // onChange={userNameHandler}
                          />
                        </div>
                        <div className="mb-4 relative">
                          <input
                            name="password"
                            type={!showPassword ? "password" : "text"}
                            className="form-control block w-full px-6 py-1.5 text-base  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#179777] focus:outline-none primary_font"
                            placeholder="password"
                            required
                            // onChange={passwordHandler}
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
                        <div className="text-center pt-1 mb-12 pb-1">
                          <button
                            type="submit"
                            className="inline-block px-6 py-2.5 text-white font-semibold text-base leading-tight uppercase rounded shadow-md bg-[#179777]  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 custome_style_btn "
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            {loading ? <SmallSpinner /> : "Log in"}
                            {/* {loading ? "Log in" : <SmallSpinner />} */}
                          </button>
                          <a
                            className="text-gray-700 primary_font_light font-semibold opacity-70"
                            href="#!"
                          >
                            forget password ?
                          </a>
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
                                    setLoading(false);

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
                          <p className="mb-0 mr-2 text-xs sm:text-base  text-gray-700 opacity-70 primary_font_light font-semibold">
                            Dont have an account ?
                          </p>
                          <Link to="/regester">
                            <ButtonCapsule value="Signup" />
                          </Link>
                        </div>
                      </form>
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

export default LoginPage;
