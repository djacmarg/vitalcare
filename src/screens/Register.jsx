import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../features/user/userAction";
import { toast } from "react-toastify";
// form styles
import "./AddCard.css";
const Register = () => {
  // const [email, setEmail] = useState(
  //   localStorage.getItem("UEMAIL") ? localStorage.getItem("UEMAIL") : ""
  // );
  // const [firstname, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");
  // const [password, setPassword] = useState("");
  // const [password_confirm, setPasswordConfirm] = useState("");
  //const [veri_key, setVerikey] = useState("");

  const REG_SUCCESS = localStorage.getItem("REG_SUCCESS")
    ? localStorage.getItem("REG_SUCCESS")
    : false;
  const { loading, error, REG_INFO } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    if (REG_SUCCESS) toast.success(REG_INFO?.message);
    const timer = setTimeout(() => {
      navigate("/");
    }, 6000);
    localStorage.removeItem("REG_SUCCESS");
    return () => clearTimeout(timer);
  }, [REG_SUCCESS, navigate]);

  const submitForm = (data) => {
    data.email = data.email.toLowerCase();
    dispatch(userRegister(data));
  };

  return (
    <section id="CardForm" className="form-container">
      <div className="formly">
        <form onSubmit={handleSubmit(submitForm)} className="form-grid">
          <h6 className="justify-center py-4 text-2xl text-gray-700">
            Sign Up for an Account
          </h6>
          <div className="flashResponse">
            {error && <h3 className="alert-warning">{error}</h3>}

            {REG_SUCCESS && (
              <h3 className="alert-success">{REG_INFO.message}</h3>
            )}
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
            <span className="text-red-600">Please your email address</span>
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
            <span className="text-red-600">Please enter password</span>
          )}
          <label htmlFor="password_confirm" style={{ display: "none" }}>
            Confirm Password
          </label>
          <input
            type="password"
            id="password_confirm"
            name="password_confirm"
            placeholder="Confirm Password"
            {...register("password_confirm", { required: true })}
          />
          {errors.password && (
            <span className="text-red-600">Please enter password</span>
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
            <span className="text-red-600">Please enter FN</span>
          )}
          <label htmlFor="lastname" style={{ display: "none" }}>
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Enter Last Name"
            {...register("lastname", { required: true })}
          />
          {errors.lastname && (
            <span className="text-red-600">Please enter Last Name</span>
          )}
          <br />
          <button
            className="my-5 px-10 py-3 mx-0 text-gray-800 rounded-full bg-green-200 hover:text-green-600  transition-all duration-500 shadow-lg"
            type="submit"
            disabled={loading}
          >
            {loading ? "Creating..." : "Register"}
          </button>
          {/* <Link to="/">Already have a profile? Login instead</Link> */}
        </form>
      </div>
    </section>
  );
};

export default Register;
