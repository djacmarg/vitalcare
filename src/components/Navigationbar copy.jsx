import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsPerson } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
//import Logo from "../assets/frontend/images/logo.png";
//import Logo from "../assets/react.svg";
import Logo2 from "../assets/images/logo_white.png";
import Logo from "../assets/images/logo_green.png";
import { Link, useNavigate } from "react-router-dom";
//import swal from "@sweetalert/with-react";
import { logout } from "../features/user/userSlice";
import AuthSessionLogout from "../components/AuthSessionLogout";
import { scrollToView } from "../utils/scroller";
//Modal
import Popup from "./Modals/Popup";
import Register from "../screens/Register";
import Login from "../screens/Login";
import { toast } from "react-toastify";
import axios from "../api/axios";
const Navigationbar = () => {
  const { LOGIN, USER_INFO } = useSelector((state) => state.user);

  //const auth = localStorage.getItem("user");
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const [sticky, setSticky] = useState(false);
  // const [dropDown, setDropDown] = useState(false);
  const [dropNav, setDropNav] = useState(false);
  const [data, setData] = useState(null);
  //modal
  const [registrationForm, setRegistrationForm] = useState(false);
  const [loginForm, setLoginForm] = useState(false);
  //modal functions
  const toggleRegistrationForm = () => {
    setRegistrationForm(!registrationForm);
  };
  //check for active login
  //const isLoggedIn = localStorage.getItem("LOGIN");
  const toggleLoginForm = () => {
    setLoginForm(!loginForm);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    toast.success("You are logged out");
    dispatch(logout(navigate("/")));
  };

  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };
  // const handleDropDown = () => {
  //   setDropDown(!dropDown);
  // };

  const handleDropNav = () => {
    setDropNav(!dropNav);
  };

  const changeSticky = () => {
    if (window.scrollY > 199) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  window.addEventListener("scroll", changeSticky);
  // handle any click event outside of dropdown nav
  const dropNavRef = useRef();
  const buttonNavRef = useRef();
  window.addEventListener("click", (e) => {
    if (e.target !== dropNavRef.current && e.target !== buttonNavRef.current) {
      setDropNav(false);
    }
  });

  useEffect(() => {
    if (LOGIN) {
      axios
        .get(`apps/${USER_INFO?.data?.email}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get("apps")
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [LOGIN, USER_INFO?.data?.email]);

  //if (!data) return null;

  return (
    <div
      className={
        !sticky
          ? "flex w-full h-32 top-0 sticky  transition-all duration-500 ease-in-out z-10"
          : "flex w-full h-28 top-0 sticky bg-green-600 text-white transition-all duration-500 ease-in-out z-10"
      }
    >
      <div
        className={
          !sticky
            ? "flex w-full lg:max-w-[80%] mx-auto justify-between items-center h-20 px-4 z-20 transition-all duration-500 ease-in"
            : "flex w-full lg:max-w-[80%] mx-auto justify-between items-center bg-green-600 text-white  h-20 px-4 z-20  transition-all duration-500 ease-out"
        }
      >
        <div>
          <h1 onClick={handleNav} className={!Logo ? "hidden" : "block"}></h1>
          <Link
            className={
              !sticky
                ? "flex items-center gap-2 text-green-600 text-3xl transition-all duration-500"
                : "flex items-center gap-2 text-white text-2xl transition-all duration-500"
            }
            to="/"
          >
            <div className="w-[270px] pt-10">
              <img src={!sticky ? Logo : Logo2} alt="VitCareLLC" />
            </div>
            {/* <span className="hidden md:block">VitCareLLC</span> */}
          </Link>
        </div>
        <div className="grid p-0 m-0">
          <ul className="w-[100%] flex justify-between lg:justify-end px-0  pt-5 text-sm font-normal ">
            <li className="hover:underline">
              <Link onClick={scrollToView} to="/jobseekers">
                Job Seekers
              </Link>
            </li>
            <li className="hover:underline">
              <Link onClick={scrollToView} to="/company">
                Company
              </Link>
            </li>
          </ul>
          <ul
            className={
              !sticky
                ? "hidden md:flex text-md text-black uppercase border-t border-t-gray-700"
                : "hidden md:flex text-md text-white uppercase border-t border-t-green-500 "
            }
          >
            <li className="hover:text-green-800 hover:transition-all hover:duration-150">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Who We Are</Link>
            </li>
            <li>
              <Link to="/jobseekers">Job Seekers</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>

            {USER_INFO?.access_token ? (
              <li>
                <div className="relative">
                  <button
                    ref={buttonNavRef}
                    className="flex"
                    onClick={() => handleDropNav()}
                  >
                    BLOGS{" "}
                    <MdOutlineKeyboardArrowDown
                      className={
                        !sticky
                          ? " text-2xl text-gray-600"
                          : " text-2xl text-white"
                      }
                    />
                  </button>
                  {dropNav && (
                    <div
                      ref={dropNavRef}
                      className="absolute w-48 shadow-lg -left-14 top-16 bg-green-300 py-2 my-[-1px]"
                    >
                      <ul className="justify-center px-2 ">
                        <li
                          onClick={() => setDropNav(false)}
                          className="cursor-pointer hover:rounded-lg hover:bg-green-100 transition-all duration-500"
                        >
                          <Link className="flex" to="/blogs">
                            View Blogs
                          </Link>
                        </li>
                        <li
                          onClick={() => setDropNav(false)}
                          className="cursor-pointer hover:rounded-lg hover:bg-green-100 transition-all duration-500"
                        >
                          <Link className="flex" to="/blog/post">
                            Post a Blog
                          </Link>
                        </li>
                        <li
                          onClick={() => setDropNav(false)}
                          className="cursor-pointer hover:rounded-lg hover:bg-green-100 transition-all duration-500"
                        >
                          <Link className="flex" to="/category/form">
                            Categories
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            ) : (
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
            )}
            {/* check if user is an admin */}
            {USER_INFO?.data?.user_id <= 2 ? (
              <li>
                <Link to="/job/post">Post Job</Link>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="hidden md:flex">
          {USER_INFO?.access_token ? (
            <div className="relative">
              <Link to="/my/applications">
                My Applications({data ? data.count : 0})
              </Link>
              <Link
                className={
                  !sticky
                    ? "px-4 mx-5  transition-all duration-500 hover:text-green-600"
                    : "px-6 py-3 mx-5 text-gray-800 rounded-full bg-white hover:text-green-600   transition-all duration-500"
                }
              >
                {USER_INFO?.access_token
                  ? USER_INFO?.data?.firstname
                  : USER_INFO?.data?.email}
              </Link>

              <Link
                className={
                  !sticky
                    ? "px-5 py-3 text-white rounded-full bg-green-500 hover:bg-green-800 transition-all duration-500"
                    : "px-6 py-3 text-white rounded-full bg-green-700 hover:bg-green-800 transition-all duration-500"
                }
                onClick={handleLogout}
              >
                Logout (<BsPerson className="text-white inline" size={20} />)
              </Link>
            </div>
          ) : (
            <div className="relative">
              <Link
                className={
                  !sticky
                    ? "px-4 mx-5  transition-all duration-500 hover:text-green-600"
                    : "px-6 py-3 mx-5 text-gray-800 rounded-full bg-white hover:text-green-600   transition-all duration-500"
                }
                to="/login"
              >
                Login
              </Link>

              <Link
                className={
                  !sticky
                    ? "px-5 py-3 text-white rounded-full bg-green-500 hover:bg-green-800 transition-all duration-500"
                    : "px-6 py-3 text-white rounded-full bg-green-700 hover:bg-green-800 transition-all duration-500"
                }
                onClick={toggleRegistrationForm}
              >
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Hamburger */}
        <div onClick={handleNav} className="md:hidden lg:hidden z-10">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        {/* Mobile menu dropdown */}
        <div
          onClick={handleNav}
          className={
            nav
              ? "fixed left-0 top-0 w-[100%] md:w-[80%] h-full bg-green-300 px-4 mt-20 flex flex-col transition-all ease-in-out duration-500 z-20"
              : "absolute left-[-100%] top-0 bottom-0 w-[100%]  h-[100%] bg-white px-4 mt-20 flex flex-col transition-all ease-in-out duration-500 z-20 "
          }
        >
          <ul className="pt-0 text-lg text-black">
            <li className="border-b  text-2xl text-green-700">
              <Link to="/">Home</Link>
            </li>
            <li className="border-b  text-2xl text-green-700">
              <Link to="/services">Who We Are</Link>
            </li>

            <li className="border-b  text-2xl text-green-700">
              <Link to="/jobseekers">Job Seekers</Link>
            </li>

            <li className="border-b  text-2xl text-green-700">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="border-b  text-2xl text-green-700">
              <Link to="/blogs">Blogs</Link>
            </li>
            {USER_INFO?.access_token ? (
              <>
                <li className="border-b  text-2xl text-green-700">
                  <Link to="/blog/post">Post a Blog</Link>
                </li>
                <li className="border-b  text-2xl text-green-700">
                  <Link to="/category/form">Categories</Link>
                </li>
              </>
            ) : (
              ""
            )}

            <div className="flex flex-col">
              {USER_INFO?.access_token ? (
                <Link
                  onClick={handleLogout}
                  className="my-2 px-6 py-3 mx-5 text-gray-800 rounded-full bg-green-300 hover:text-green-600   transition-all duration-500"
                >
                  Logout (<BsPerson className="text-black inline" size={20} />){" "}
                </Link>
              ) : (
                <div className="pt-3">
                  <button
                    onClick={toggleLoginForm}
                    className="my-2 px-6 py-3 mx-5 text-gray-800 rounded-full bg-white hover:text-green-600   transition-all duration-500"
                  >
                    Login
                  </button>

                  <button
                    onClick={toggleRegistrationForm}
                    className="my-2 px-6 py-3 mx-5 text-gray-800 rounded-full bg-white hover:text-green-600   transition-all duration-500"
                  >
                    Register
                  </button>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
      {/* Modals */}
      {registrationForm && (
        <Popup content={<Register />} handleClose={toggleRegistrationForm} />
      )}
      {loginForm && <Popup content={<Login />} handleClose={toggleLoginForm} />}
      {/* loggeg in session variable set */}
      {LOGIN ? <AuthSessionLogout /> : ""}
    </div>
  );
};

export default Navigationbar;
