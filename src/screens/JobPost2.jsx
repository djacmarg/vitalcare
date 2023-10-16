import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postJob } from "../features/user/userAction";
const JobPost = () => {
  const POSTED = localStorage.getItem("POSTED");
  const { loading, error, cat_msg, USER_INFO } = useSelector(
    (state) => state.user
  );
  const [user_id] = useState(USER_INFO ? USER_INFO?.data?.user_id : null);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { user_id } });

  const navigate = useNavigate();

  useEffect(() => {
    if (POSTED) {
      toast.success("Job posted");
      const timer = setTimeout(() => {
        navigate("/jobs");
        localStorage.removeItem("POSTED");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [navigate, POSTED]);

  const submitForm = (data) => {
    dispatch(postJob(data));
  };

  return (
    <section id="CardForm" className="form-container w-[100%] justify-center">
      <div className="formly bg-white w-[100%] md:w-[80%] lg:w-[600px] lg:pt-20 lg:pb-40">
        <form onSubmit={handleSubmit(submitForm)} className="form-grid">
          <h6 className="justify-center py-4 text-2xl text-gray-700">
            Post a new job / vacancy
          </h6>
          <div className="flashResponse">
            {error && <h3 className="alert-warning">{error}</h3>}

            {POSTED && <h3 className="alert-success">{cat_msg}</h3>}
          </div>

          <input
            type="hidden"
            placeholder="User ID"
            defaultValue={user_id}
            {...register("user_id", { required: true })}
          />
          <label htmlFor="job_title" style={{ display: "none" }}>
            Job title
          </label>

          <input
            type="text"
            placeholder="Job title"
            {...register("job_title", { required: true })}
          />
          {errors.job_title && (
            <span className="text-red-600">Please enter Job title</span>
          )}
          <label htmlFor="job_location" style={{ display: "none" }}>
            Job Qualification
          </label>

          <input
            type="text"
            placeholder="Job qualification"
            {...register("job_qualification", { required: true })}
          />
          {errors.job_qualification && (
            <span className="text-red-600">Please enter Job qualification</span>
          )}
          <label htmlFor="job_location" style={{ display: "none" }}>
            Job Location
          </label>
          <input
            type="text"
            placeholder="Job Location"
            {...register("job_location", { required: true })}
          />
          {errors.job_location && (
            <span className="text-red-600">Please enter Job Location</span>
          )}

          <label htmlFor="job_body" style={{ display: "none" }}>
            Job Body
          </label>
          <textarea
            type="text"
            cols={60}
            rows={5}
            placeholder="Enter Job description/contents"
            {...register("job_body", { required: true })}
          ></textarea>
          {errors.job_body && (
            <span className="text-red-600">Please enter Description</span>
          )}

          {/* <MyEditor /> */}
          <br />
          <button
            type="submit"
            className="my-2 px-10 py-3 mx-5 text-gray-800 rounded-full bg-green-200 hover:text-green-600  transition-all duration-500 shadow-lg"
            disabled={loading}
          >
            {loading ? "Submiting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default JobPost;
