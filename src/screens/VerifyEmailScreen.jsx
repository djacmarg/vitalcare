import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userEmailVerify } from "../features/user/userAction";
//import { toast } from "react-toastify";
// form styles
import "./AddCard.css";
const VerifyEmail = () => {
  const params = useParams();
  const [email] = useState(
    localStorage.getItem("REG_USER_EMAIL")
      ? localStorage.getItem("REG_USER_EMAIL")
      : "NO_EMAIL_FOUND"
  );
  const [id] = useState(params.id);
  const [veri_key] = useState(params.veri_key);

  const dispatch = useDispatch();
  const { loading, error, EMAIL_VERIFIED } = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email, id, veri_key } });
  const navigate = useNavigate();

  useEffect(() => {
    if (EMAIL_VERIFIED) {
      const timer = setTimeout(() => {
        localStorage.removeItem("EMAIL_VERIFIED");
        navigate("/");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [id, veri_key, EMAIL_VERIFIED, navigate]);

  const submitForm = (data) => {
    // check if email is present to ensure user is authenticated
    if (email !== "") {
      if (data.email !== email) {
        return new Error("User's Email Error");
      }
    }
    // transform email string to lowercase to avoid case sensitivity issues in login
    data.email = data.email.toLowerCase();
    dispatch(userEmailVerify(data));
    console.log(data);
  };

  return (
    <section id="CardForm" className="form-container">
      <div className="formly py-10">
        <h6 className="justify-center py-4 text-2xl text-gray-700">
          Verify Your Email
        </h6>
        <div className="alert-success">
          Almost done, please click Verify My Email button below to finish up
          <hr />
          <br />
        </div>

        <form onSubmit={handleSubmit(submitForm)} className="form-grid">
          {error && <h3 className="alert-warning">{error}</h3>}
          {EMAIL_VERIFIED && (
            <h3 className="alert-success">Your Email Has been verified</h3>
          )}
          <input
            type="email"
            placeholder="Enter Email"
            defaultValue={email}
            disabled
            className="alert-display"
            {...register("email", { required: true })}
          />
          {errors.email && <span>Email is required</span>}
          <input
            type="hidden"
            defaultValue={id}
            {...register("id", { required: true })}
          />
          {errors.id && <span>Account ID is required</span>}
          <input
            type="hidden"
            defaultValue={veri_key}
            {...register("veri_key", { required: true })}
          />
          {errors.veri_key && <span>verification code is required</span>}

          <button type="submit" className="r-btn">
            {loading ? "Verifying..." : "Verify My Email"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default VerifyEmail;
