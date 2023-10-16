import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../features/user/userAction";
import { toast } from "react-toastify";
// form styles
//import "./AddCard.css";
const Login = () => {
  const [email, setEmail] = useState(
    localStorage.getItem("UEMAIL") ? localStorage.getItem("UEMAIL") : ""
  );
  const [password, setPassword] = useState("");
  const [grant_type] = useState("password");

  const LOGIN_TEST = localStorage.getItem("LOGIN_TEST");
  const { loading, error, LOGIN, USER_INFO } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { grant_type } });

  const navigate = useNavigate();

  useEffect(() => {
    if (LOGIN_TEST) {
      toast.success(USER_INFO?.message);
      const timer = setTimeout(() => {
        navigate("/");
      }, 6000);
      localStorage.removeItem("LOGIN_TEST");
      return () => clearTimeout(timer);
    }
  }, [navigate, LOGIN_TEST, USER_INFO?.message]);
  const submitForm = (data) => {
    data.email = data.email.toLowerCase();
    dispatch(userLogin(data));
    setEmail("");
    setPassword("");
  };

  return (
    <section id="CardForm" className="form-container">
      <div className="formly sm:5 md:10 lg:py-20">
        <form onSubmit={handleSubmit(submitForm)} className="form-grid">
          <h6 className="justify-center py-4 text-2xl text-gray-700">
            Login to your account
          </h6>
          <br />
          <div className="flashResponse">
            {error && <h3 className="alert-warning">{error}</h3>}

            {LOGIN && <h3 className="alert-success">{USER_INFO?.message}</h3>}
          </div>
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
          {errors.email ? (
            <span className="text-red-600">Please your email to login</span>
          ) : (
            ""
          )}
          <label htmlFor="password" style={{ display: "none" }}>
            Your Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-red-600">Please enter password to login</span>
          )}

          <label htmlFor="grant_type" style={{ display: "none" }}>
            grant_type
          </label>
          <input
            type="hidden"
            id="grant_type"
            name="grant_type"
            defaultValue={grant_type}
            placeholder="Enter grant_type"
            {...register("grant_type", { required: true })}
          />
          {errors.grant_type && <span>Please enter grant_type</span>}
          <br />
          <div className="flex w-[100%] justify-between items-center">
            <Link to="/forgotpass" className="px-10">
              Forgot Password?
            </Link>

            <button
              className="my-5 px-10 py-3 mx-0 text-gray-800 rounded-full bg-green-200 hover:text-green-600  transition-all duration-500 shadow-lg"
              type="submit"
              disabled={loading}
            >
              {loading ? "Login in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
