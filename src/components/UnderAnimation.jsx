import { Link } from "react-router-dom";

const UnderAnimation = () => {
  return (
    <div className="grid m-auto lg:flex w-full h-auto p-2 justify-center content-center items-center bg-white shadow-lg transition-all duration-700">
      {/* <div className="w-[100%] p-0 lg:p-5 lg:w-auto justify-center md:justify-start">
        <span className="text-3xl text-green-500">LOOKING FOR TALENT?</span>
        <button className="min-w-[160px] p-4 m-4 justify-center text-white br-2 rounded-full bg-orange-600 transition-all duration-500 hover:bg-orange-400">
          Employers
        </button>
      </div> */}

      <div className="w-[100%] p-0 lg:p-5 lg:w-auto justify-center md:justify-start">
        <span className="text-3xl text-green-500">LOOKING FOR A NEW JOB?</span>
        <button className="min-w-[160px] p-4 m-4 justify-center text-white br-2 rounded-full bg-orange-400 transition-all duration-500 hover:bg-orange-600">
          <Link to="/jobs">Job Seekers</Link>
        </button>
      </div>
    </div>
  );
};

export default UnderAnimation;
