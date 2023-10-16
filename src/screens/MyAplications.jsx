import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import dateFormat from "dateformat";
import { BarLoader } from "react-spinners";
import { BiSearch } from "react-icons/bi";
const MyApplications = () => {
  const [data, setData] = useState(false);
  const [search, setSearch] = useState("");
  const { USER_INFO } = useSelector((state) => state.user);
  useEffect(() => {
    axios
      .get(`apps/${USER_INFO?.data?.email}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [USER_INFO?.data?.email]);
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
          {/* <div className="job-left w-[300px] bg-white shadow-sm  border-x-neutral-300 p-5">
            <h6>Sidebar</h6>
          </div> */}
          {/* Rightbar main */}
          <div className="job-right w-[100%] px-5">
            <div className="flex justify-center">
              <h2 className="text-xl">
                {data ? data.message : "Job Applied for..."}
              </h2>
            </div>
            {/* Job card starts here */}
            {data ? (
              data?.applications
                ?.filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item?.job_title?.toLowerCase().includes(search) ||
                        item?.job_location?.toLowerCase().includes(search);
                })
                .map((item) => {
                  return (
                    <Link key={item.application_id} to>
                      <div className="job-card grid w-[100%] h-44 bg-white shadow-sm m-2 px-5 py-4 hover:bg-gray-100 transition-all duration-500 ">
                        <div className="flex  max-h-[50px] justify-between border-b-2 pb-2">
                          <h5 className="text-xl text-green-500">
                            {item?.job_title?.slice(0, 50)}
                          </h5>
                          <div className="job-btn flex gap-5">
                            <span className="border-2 rounded-md bg-gray-100 py-1 px-1">
                              {item?.job_location}
                            </span>

                            <span className="border-2 rounded-md bg-gray-100 py-1 px-1">
                              {dateFormat(item?.created_at, " mmmm dS, yyyy")}
                            </span>
                          </div>
                        </div>
                        <div className="pt-2 text-gray-500">{item?.resume}</div>
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
export default MyApplications;
