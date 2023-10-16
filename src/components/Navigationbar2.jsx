import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsLockFill, BsPerson } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
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
import Login from "../screens/Login";
import { toast } from "react-toastify";
import axios from "../api/axios";
//import AnchorNav from "./Anchornav";
const Navigationbar = () => {
  const { LOGIN, USER_INFO } = useSelector((state) => state.user);

  //const auth = localStorage.getItem("user");
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [dropNav, setDropNav] = useState(false);
  const [dropNav2, setDropNav2] = useState(false);
  const [data, setData] = useState(null);
  //modal
  //const [registrationForm, setRegistrationForm] = useState(false);
  const [loginForm, setLoginForm] = useState(false);
  //modal functions
  // const toggleRegistrationForm = () => {
  //   setRegistrationForm(!registrationForm);
  // };
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

  const handleDropNav = () => {
    setDropNav(!dropNav);
  };

  const handleDropNav2 = () => {
    setDropNav2(!dropNav2);
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
  const dropNavRef2 = useRef();
  const buttonNavRef2 = useRef();
  window.addEventListener("click", (e) => {
    if (e.target !== dropNavRef.current && e.target !== buttonNavRef.current) {
      setDropNav(false);
    }
  });
  window.addEventListener("click", (e) => {
    if (
      e.target !== dropNavRef2.current &&
      e.target !== buttonNavRef2.current
    ) {
      setDropNav2(false);
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
              <Link onClick={() => scrollToView()} to="/services">
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
              <Link onClick={() => scrollToView()} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={() => scrollToView()} to="/team">
                Our Team
              </Link>
            </li>
            <li>
              <Link onClick={() => scrollToView()} to="/jobs">
                Jobs
              </Link>
            </li>

            {/* check if user is an admin */}
            {USER_INFO?.data?.user_id <= 2 ? (
              <li>
                <Link onClick={() => scrollToView()} to="/job/post">
                  Post Job
                </Link>
              </li>
            ) : (
              ""
            )}
            <li>
              <Link onClick={() => scrollToView()} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex">
          {USER_INFO?.access_token ? (
            <div className=" flex gap-0">
              <div>
                <button
                  className={
                    !sticky
                      ? "px-3 py-2 rounded-lg mx-0  transition-all duration-500 hover:text-green-600 border-green-300 border-[1px]"
                      : "px-6 py-3 mx-5 text-gray-800 rounded-full bg-white hover:text-green-600   transition-all duration-500"
                  }
                  ref={buttonNavRef2}
                  onClick={() => handleDropNav2()}
                >
                  <BsPerson className="text-balck inline" size={20} />
                  &nbsp; &nbsp;
                  {USER_INFO?.access_token
                    ? USER_INFO?.data?.firstname
                    : USER_INFO?.data?.email}
                </button>

                {dropNav2 && (
                  <div
                    ref={dropNavRef2}
                    className="absolute bg-green-300 shadow-lg mt-3 justify-start px-2 py-0 list-none"
                  >
                    <li onClick={() => setDropNav2(false)}>
                      {" "}
                      <Link
                        onClick={() => scrollToView()}
                        to="/my/applications"
                      >
                        My Applications({data ? data.count : 0})
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link
                        className={
                          !sticky
                            ? "px-5 py-3 text-white rounded-full bg-green-500 hover:bg-green-800 transition-all duration-500"
                            : "px-6 py-3 text-white rounded-full bg-green-700 hover:bg-green-800 transition-all duration-500"
                        }
                        onClick={handleLogout}
                      >
                        (
                        <BsLockFill className="text-white inline" size={20} />)
                        Logout
                      </Link>
                    </li>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="relative">
              <Link
                className={
                  !sticky
                    ? "px-6 mx-5 py-3 transition-all duration-500 rounded-full text-white  bg-green-500  hover:bg-green-800"
                    : "px-6 py-3 mx-5 text-gray-800 rounded-full bg-white hover:text-green-600   transition-all duration-500"
                }
                to="/login"
              >
                Login
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
              <Link to="/team">Our Team</Link>
            </li>

            <li className="border-b  text-2xl text-green-700">
              <Link to="/jobs">Jobs</Link>
            </li>

            <li className="border-b  text-2xl text-green-700">
              <Link to="/contact">Contact</Link>
            </li>

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
                  <button className="my-2 px-6 py-3 mx-5 text-gray-800 rounded-full bg-white hover:text-green-600   transition-all duration-500">
                    <Link to="/login">Login</Link>
                  </button>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
      {/* Modals */}

      {loginForm && <Popup content={<Login />} handleClose={toggleLoginForm} />}
      {/* loggeg in session variable set */}
      {LOGIN ? <AuthSessionLogout /> : ""}
    </div>
  );
};

export default Navigationbar;
