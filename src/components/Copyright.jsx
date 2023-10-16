import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsFillArrowUpSquareFill,
} from "react-icons/bs";
import { scrollToView } from "../utils/scroller";

const Copyright = () => {
  return (
    <div className="flex w-full mt-auto  h-auto lg:h-[120px] bg-green-600 justify-center items-center pb-10">
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 pt-10">
        <div className="w-[100%] justify-normal items-center p-0 lg:py-3 m-5 lg:px-52 text-green-200 ">
          &copy; 2023 VitCareLLC. All Rights Reserved
        </div>
        <div className="flex w-[100%]  lg:h-auto justify-around lg:justify-center items-center lg:gap-5  text-green-200">
          <a href="https://facebook.com/vitcarellc" target="_blank">
            <BsFacebook size={30} />
          </a>
          <a href="https://Twitter.com/vitcarellc" target="_blank">
            <BsTwitter size={30} />
          </a>
          <a href="https://instagram.com/vitcarellc" target="_blank">
            <BsInstagram size={30} />
          </a>
          <a href="https://linkedin.com/vitcarellc" target="_blank">
            <BsLinkedin size={30} />
          </a>
        </div>
      </div>
      <div
        onClick={scrollToView}
        className="cursor-pointer text-green-200 animate-bounce transition-all duration-500"
      >
        <BsFillArrowUpSquareFill size={30} />
      </div>
    </div>
  );
};

export default Copyright;
