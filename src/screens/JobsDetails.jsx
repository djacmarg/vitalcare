import { useState, useEffect } from "react";
import axios from "../api/axios";
import { Link, useParams } from "react-router-dom";
import Popup from "../components/Modals/Popup";
import Application from "./Application";
import parse from "html-react-parser";
const JobsDetails = () => {
  const params = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const id = useState(params.id);
  const [applicationForm, setApplicationForm] = useState(false);
  //modal function
  const toggleApplicationForm = () => {
    setApplicationForm(!applicationForm);
  };

  useEffect(() => {
    axios
      .get(`job/${id}`)
      .then((response) => {
        setData(response.data);
        localStorage.setItem("JOB_TITLE", response.data.job_title);
        localStorage.setItem("JOB_LOCATION", response.data.job_location);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  if (!data) return null;

  return (
    <div className="flex w-full m-auto h-auto lg:h-auto bg-gray-100 justify-center items-center py-10 transition-all duration-700">
      <div className="grid lg:m-auto gap-2 pt-10">
        {loading ? (
          <div className="text-red-600 h-[500px]">Loading...</div>
        ) : (
          ""
        )}
        <div className="top">
          <Link
            to="/jobs"
            className="rounded-md bg-green-500 text-white cursor-pointer px-5 py-2"
          >
            Back to all Jobs
          </Link>
        </div>
        <div className="max-w-[800px] lg:m-auto gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-10">
          <article className="prosed lg:prose-xxl p-7 bg-white border-2">
            <h5>
              {" "}
              <b>Position:</b>&nbsp;
              {data.job_title}
            </h5>
            <br />
            <b>SUMMARY:</b> <br />
            {data.job_summary}
            <br />
            <br />
            <h5>
              {" "}
              <b>Location:</b> {data.job_location}
            </h5>
            <br />
            <h5>
              {" "}
              <b>ESSENTIAL DUTIES AND RESPONSIBILITIES: </b>
            </h5>
            {parse(data.job_responsibility)}
            <br /> <br />
            <h5>
              <b>REQUIREMENTS/QUALIFICATIONS:</b>
            </h5>
            {parse(data.job_qualification)}
          </article>
        </div>
        <div className="bottom w-full flex justify-between">
          <Link
            className="rounded-md bg-green-500 text-white cursor-pointer px-5 py-2"
            onClick={toggleApplicationForm}
          >
            {" "}
            SUBMIT APPLICATION
          </Link>
        </div>
        {/* Modals */}
        {applicationForm && (
          <Popup
            content={<Application />}
            handleClose={toggleApplicationForm}
          />
        )}
      </div>
    </div>
  );
};
export default JobsDetails;
