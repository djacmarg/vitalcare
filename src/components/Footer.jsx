import { Link } from "react-router-dom";
import Copyright from "./Copyright";
import MyCalendar from "./MyCalendar";
//import Logo from "../assets/images/60x60_white.png";
import Logo from "../assets/images/logo_white.png";
import {
  BsEnvelopeFill,
  BsEnvelopePlusFill,
  BsHouseAddFill,
  BsPhoneFill,
} from "react-icons/bs";
import { scrollToView } from "../utils/scroller";

const Footer = () => {
  return (
    <>
      <div className="flex w-full m-auto h-[100%] lg:h-[100%] bg-green-500 justify-center items-start px-5 pb-10">
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10">
          <div className="grid w-[100%] h-auto md:w-[90%] md:h-auto lg:w-[400px] lg:h-auto p-5 m-5">
            <article className="prose lg:prose-xl ">
              <h6 className="text-green-200 text-2xl">LOCATION ADDRESS</h6>
              <span className="flex items-center gap-3">
                <BsHouseAddFill className="text-white text-2xl" />
                2712 Tierra Murcia St
                <br />
                El Paso Texas, 79938
              </span>
            </article>
            <p className="grid prose lg:prose-xl ">
              <span className="flex items-center gap-3">
                <BsPhoneFill className="text-white text-2xl" /> Phone: +1
                915-955-2238
              </span>

              <span className="flex items-center gap-3">
                <BsEnvelopeFill className="text-white text-2xl" /> Email:
                info@vitcarellc.com
              </span>
            </p>
            <p className="lg:py-5 flex gap-3 text-white text-2xl items-center">
              <img src={Logo} alt="logo" className="w-[75%] " />
            </p>
          </div>

          <div className="grid w-[100%] h-auto md:w-[90%] md:h-auto lg:w-[400px] lg:h-auto p-5 m-5 text-gray-800 bold">
            <div>
              <h6 className="text-green-200 text-2xl">SITEMAP</h6>
              <ul className="list-none">
                <li>
                  <Link onClick={() => scrollToView()} to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link onClick={() => scrollToView()} to="/services">
                    Who We Are
                  </Link>
                </li>
                <li>
                  <Link onClick={() => scrollToView()} to="/jobs">
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link onClick={() => scrollToView()} to="/contact">
                    Contact
                  </Link>
                </li>
                {/* <li>
                  <Link onClick={() => scrollToView()} to="/blogs">
                    Blogs
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>

          <div className="grid w-[100%] h-auto md:w-[90%] md:h-auto lg:w-[400px] lg:h-auto p-0 m-0 md:p-5 md:m-5 lg:p-5 lg:m-5 text-white">
            <div className="grid prose lg:prose-xl "></div>
            <div className="w-[100%] md:w-[90%] lg:w-[100%] justify-center bg-green-700 rounded-md">
              <MyCalendar />
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </>
  );
};

export default Footer;
