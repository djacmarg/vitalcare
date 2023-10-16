import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import dateFormat from "dateformat";
import { BarLoader } from "react-spinners";
import { BiSearch } from "react-icons/bi";
import { FaLocationArrow } from "react-icons/fa";
const Jobs = () => {
  const [data, setData] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get("job")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(data);
  if (!data) return null;
  return (
    <div className="flex w-full m-auto h-auto lg:h-auto bg-gray-100 justify-center items-center py-10 transition-all duration-700">
      <div className="grid lg:w-[1200px]">
        <div className="flex w-full py-10 justify-center items-center">
          <div className="flex justify-center items-center w-[600px] bg-white py-2 px-4 shadow rounded-full hover:shadow-xl transition-all duration-500">
            <BiSearch className="text-green-500 text-2xl" />
            <input
              className="w-[100%] py-1 px-10 bg-transparent rounded-full justify-center items-center hover:outline-none focus:outline-none"
              type="text"
              placeholder="Enter search criteria here"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="flex h-auto min-h-[800px]">
          {/* Sidebar */}
          <div className="job-left w-[300px] bg-white shadow-sm  border-x-neutral-300 p-5 hidden lg:block">
            <h2 className="text-xl text-green-500">
              Nurses and Allied Health Staff
            </h2>
            <h2 className="text-xl">
              <u>Job Types:</u>
            </h2>
            Full-Time, Part-Time, PRN.
            <h2 className="text-xl">
              <u>Shifts and Schedules:</u>
            </h2>
            Extended Hours, Overtime, Weekends as needed. Day shift, Night
            shift, Monday to Friday, Holidays, 8 and 12 hour shifts.
            <br />
            <br />
            Are you a morally upright and sympathetic person who values giving
            our patients high-quality care that benefits them? Do you have a
            minimum of one year experience in your respective filed? If yes,
            then visit our career page and apply to join our growing team.
            <br />
            <br /> We at Vital Care LLC are motivated to provide both our
            patients and workers with amazing experiences. Our goal is to offer
            chances for professional development and growth in a collaborative
            setting that prioritizes patient care.
          </div>
          {/* Rightbar main */}
          <div className="job-right w-[100%] px-5">
            <div className="flex justify-center">
              <h2 className="text-xl">
                {data ? data.message : "Current Jobs.."}
              </h2>
            </div>
            {/* Job card starts here */}
            {data ? (
              data?.jobs
                ?.filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.job_title.toLowerCase().includes(search) ||
                        item.job_body.toLowerCase().includes(search) ||
                        item.job_location.toLowerCase().includes(search);
                })
                .map((item) => {
                  return (
                    <Link key={item.job_id} to={`/job/${item.job_id}`}>
                      <div className="job-card grid w-[100%] h-44 bg-white shadow-sm m-2 px-5 py-4 hover:bg-gray-100 transition-all duration-500 ">
                        <div className="flex  max-h-[50px] justify-between border-b-2 pb-2">
                          <h5 className="text-xl text-green-500">
                            {item.job_title.slice(0, 50)}
                          </h5>
                          <div className="job-btn flex gap-5">
                            <span className="flex gap-2 items-center border-2 rounded-md bg-gray-100 py-1 px-1">
                              <FaLocationArrow />
                              {item.job_location.slice(0, 15) + "..."}
                            </span>

                            <span className="border-2 rounded-md bg-gray-100 py-1 px-1">
                              {dateFormat(item.created_at, " mmmm dS, yyyy")}
                            </span>
                          </div>
                        </div>
                        <div className="pt-2 text-gray-500">
                          {item.job_summary.slice(0, 300) + "..."}
                        </div>
                      </div>
                    </Link>
                  );
                })
                .reverse()
            ) : (
              <div className="flex pt-10 justify-center items-start">
                <BarLoader
                  size={50}
                  thickness={200}
                  speed={50}
                  color="#1bdb64"
                />
              </div>
            )}
            {/* Job card starts here */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Jobs;
