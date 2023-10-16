import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../api/axios";

const Application = () => {
  // const [cat, setCat] = useState([]);
  // const [err, setErr] = useState(false);
  // const [uploadedFile, setUploadedFile] = useState({});
  // const [filename, setFilename] = useState(
  //   localStorage.getItem("FILE_NAME")
  //   ? localStorage.getItem("FILE_NAME")
  //   : "zurepay_zero_avatar.png"
  //   );
  //const [resume, setResume] = useState("");
  const [select, setSelect] = useState("Click to attach resume...");
  const [isLoading, setIsLoading] = useState(false);
  const [succeded, setSucceded] = useState(false);
  const { loading, error, USER_INFO } = useSelector((state) => state.user);

  const [job_title] = useState(
    localStorage.getItem("JOB_TITLE") ? localStorage.getItem("JOB_TITLE") : ""
  );
  const [job_location] = useState(
    localStorage.getItem("JOB_LOCATION")
      ? localStorage.getItem("JOB_LOCATION")
      : ""
  );
  const POSTED = localStorage.getItem("POSTED");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { job_title, job_location } });

  useEffect(() => {
    if (POSTED) {
      toast.success("Your application was successfully submitted");
      const timer = setTimeout(() => {
        localStorage.removeItem("POSTED");
        localStorage.removeItem("JOB_LOCATION");
        localStorage.removeItem("JOB_TITLE");
        setSucceded(false);
        navigate("/jobs");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [POSTED, navigate]);

  const submitForm = async (d) => {
    const formData = new FormData();
    formData.append("resume", d.resume[0]);
    formData.append("job_title", d.job_title);
    formData.append("firstname", d.firstname);
    formData.append("lastname", d.lastname);
    formData.append("email", d.email);
    formData.append("phone", d.phone);
    formData.append("job_location", d.job_location);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      if (axios.post("application/create", formData, config)) {
        localStorage.setItem("POSTED", true);
        setSucceded(true);
      }
    } catch (error) {
      if (error) {
        return new Error(error);
      }
    }
  };

  return (
    <section id="CardForm" className="form-container w-[100%] justify-center">
      <div className="formly bg-white w-[100%] md:w-[80%] lg:w-[450px] lg:py-20 ">
        <form onSubmit={handleSubmit(submitForm)} className="form-grid">
          <h6 className="bg-green-200  p-1 text-sm">
            <b>Your are applying for: </b>
            {job_title ? job_title : "Apply for this Job"}
          </h6>
          {error && (
            <div className="text-red-600">
              <h3>{error}</h3>
            </div>
          )}
          {succeded && (
            <div className="text-green-600">
              <h3>Your Application has been submitted</h3>
            </div>
          )}

          <label htmlFor="job_title" style={{ display: "none" }}>
            Job Title
          </label>
          <input
            type="hidden"
            defaultValue={job_title}
            placeholder="Enter Job Title"
            {...register("job_title", { required: true })}
          />

          {errors.job_title && (
            <span className="text-red-600">Please enter job title</span>
          )}

          <label htmlFor="job_location" style={{ display: "none" }}>
            Job Location
          </label>
          <input
            type="hidden"
            defaultValue={job_location}
            placeholder="Enter Job Location"
            {...register("job_location", { required: true })}
          />

          {errors.job_location && (
            <span className="text-red-600">Please enter job location</span>
          )}

          <label htmlFor="firstname" style={{ display: "none" }}>
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Enter First Name"
            {...register("firstname", { required: true })}
          />

          {errors.firstname && (
            <span className="text-red-600">Please enter First Name</span>
          )}
          <label htmlFor="lastname" style={{ display: "none" }}>
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Enter  Last Name"
            {...register("lastname", { required: true })}
          />
          {errors.lastname && (
            <span className="text-red-600">
              Please enter Last Name(Family Name)
            </span>
          )}
          <label htmlFor="email" style={{ display: "none" }}>
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-600">Please your email address</span>
          )}
          <label htmlFor="phone" style={{ display: "none" }}>
            Your Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter Phone"
            {...register("phone", { required: true })}
          />
          {errors.password && (
            <span className="text-red-600">Please enter phone Number</span>
          )}

          <br />
          <div className=" text-red-500 p-2 mt-2 mb-5 text-sm">
            Acceptable formats [Pdf, Doc and Docx]
          </div>
          <input
            type="file"
            className="upload-file-input pt-3 cursor-pointer"
            {...register("resume", { required: true })}
            onChange={(e) => setSelect("Resume Selected")}
            accept="application/pdf,application/msword,
          application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          />

          {errors.resume && (
            <span className="text-red-600 py-5">
              Please attach your Resume in [Pdf, Doc and Docx]
            </span>
          )}
          <label
            className="upload-label"
            htmlFor="attached_file"
            style={{ cursor: "pointer", color: "#09f" }}
          >
            {select}
          </label>

          <br />
          <button
            type="submit"
            className="my-2 px-10 py-3 mx-5 text-gray-800 rounded-md bg-green-300 hover:text-green-600  transition-all duration-500 shadow-lg"
            disabled={isLoading}
          >
            {isLoading ? "Submiting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Application;
