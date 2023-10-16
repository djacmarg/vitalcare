import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { passwordLink } from "../features/user/userAction";
import { toast } from "react-toastify";
// form styles
//import "./AddCard.css";
const Forgotpass = () => {
  const [email, setEmail] = useState(
    localStorage.getItem("UEMAIL") ? localStorage.getItem("UEMAIL") : ""
  );
  const POSTED = localStorage.getItem("POSTED");
  const { loading, error, USER_INFO } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    if (POSTED) {
      toast.success(USER_INFO?.message);
      const timer = setTimeout(() => {
        navigate("/");
      }, 6000);
      localStorage.removeItem("POSTED");
      return () => clearTimeout(timer);
    }
  }, [navigate, POSTED, USER_INFO]);
  const submitForm = (data) => {
    data.email = data.email.toLowerCase();
    dispatch(passwordLink(data));
    setEmail("");
  };

  return (
    <section id="CardForm" className="form-container">
      <div className="formly sm:5 md:10 lg:py-20">
        <form onSubmit={handleSubmit(submitForm)} className="form-grid">
          <h6 className="justify-center py-4 text-2xl text-gray-700">
            Password reset
          </h6>
          <br />
          <div className="flashResponse">
            {error && <h3 className="alert-warning">{error}</h3>}

            {POSTED && <h3 className="alert-success">{USER_INFO?.message}</h3>}
          </div>
          <label htmlFor="email" style={{ display: "none" }}>
            Enter your account email
          </label>
          <input
            type="email"
            placeholder="Enter Your Account Email"
            {...register("email", { required: true })}
          />
          {errors.email ? (
            <span className="text-red-600">
              Please enter your email address
            </span>
          ) : (
            ""
          )}

          <br />
          <div className="flex w-[100%] justify-between items-center">
            <Link to="/login" className="px-10">
              Remember Password? Login
            </Link>

            <button
              className="my-5 px-10 py-3 mx-0 text-gray-800 rounded-full bg-green-200 hover:text-green-600  transition-all duration-500 shadow-lg"
              type="submit"
              disabled={loading}
            >
              {loading ? "Requesting..." : "Request"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Forgotpass;
