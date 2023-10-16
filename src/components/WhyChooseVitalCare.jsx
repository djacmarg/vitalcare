import { Link } from "react-router-dom";
import { scrollToView } from "../utils/scroller";
import { FaUserNurse, FaFileContract, FaIndustry } from "react-icons/fa";
import { SiSolus } from "react-icons/si";
import { GiTelepathy } from "react-icons/gi";

const WhyChooseVitalCare = () => {
  return (
    <div className="grid w-full  bg-green-100 justify-center pt-8">
      <div className="grid w-full  bg-green-100 justify-center p-10 md:pt-8 lg:pt-10">
        <h2>Why Choose VitalCare?</h2>
      </div>
      <div className="flex w-full m-auto h-auto lg:h-auto bg-green-100 justify-center items-center py-10 transition-all duration-700">
        <div className="grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:grid-rows-2 pt-10">
          <Link to="/staffing" onClick={() => scrollToView()}>
            <div className="grid w-[100%] h-[100%] md:w-46 md:h-46 lg:w-64 lg:h-66 justify-center items-center p-5 m-5 bg-green-400 opacity-1 text-white text-4xl hover:bg-green-500 hover:translate-y-1 transition-all duration-700">
              <FaUserNurse size={150} className="text-green-300" />
              Quality Staffing
            </div>
          </Link>
          <Link to="/solutions" onClick={() => scrollToView()}>
            <div className="grid w-[100%] h-[100%] md:w-46 md:h-46 lg:w-64 lg:h-66 justify-center items-center p-5  m-5 bg-green-400 text-white  text-4xl hover:bg-green-500 hover:translate-y-1 transition-all duration-700">
              <SiSolus size={150} className="text-green-300" />
              Flexible Solutions
            </div>
          </Link>
          <Link to="/continuity" onClick={() => scrollToView()}>
            <div className="grid w-[100%] h-[100%] md:w-46 md:h-46 lg:w-64 lg:h-66 justify-center items-center  p-5 m-5 bg-green-400 text-white text-4xl hover:bg-green-500 hover:translate-y-1 transition-all duration-700">
              <FaFileContract size={150} className="text-green-300" />
              Reliability and Continuity
            </div>
          </Link>
          <Link to="/approach" onClick={() => scrollToView()}>
            <div className="grid w-[100%] h-[100%] md:w-46 md:h-46 lg:w-64 lg:h-66 justify-center items-center  p-5 m-5 bg-green-400 text-white text-4xl hover:bg-green-500 hover:translate-y-1 transition-all duration-700">
              <GiTelepathy size={150} className="text-green-300" />
              Client-Centered Approach
            </div>
          </Link>
          <Link to="/services" onClick={() => scrollToView()}>
            <div className="grid w-[100%] h-[100%] md:w-46 md:h-46 lg:w-64 lg:h-66 justify-center items-center  p-5 m-5 bg-green-400 text-white text-4xl hover:bg-green-500 hover:translate-y-1 transition-all duration-700">
              <FaIndustry size={150} className="text-green-300" />
              Industry Expertise
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseVitalCare;
