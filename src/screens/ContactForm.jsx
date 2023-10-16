import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../features/user/userAction";
import { toast } from "react-toastify";
// form styles
import "./AddCard.css";
const ContactForm = () => {
  const [email, setEmail] = useState(
    localStorage.getItem("UEMAIL") ? localStorage.getItem("UEMAIL") : ""
  );

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [grant_type, setGrantType] = useState("password");
  const MSG = localStorage.getItem("MSG_SENT");
  const { loading, error, MSG_SENT } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { grant_type } });

  const navigate = useNavigate();

  useEffect(() => {
    if (MSG) {
      toast.success("Message sent successfully!");
      const timer = setTimeout(() => {
        navigate("/"), 5000;
        localStorage.removeItem("MSG_SENT");
      });
      return () => clearTimeout(timer);
    }
  }, [navigate, MSG]);

  const submitForm = (data) => {
    data.email = data.email.toLowerCase();
    dispatch(sendMessage(data));
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="CardForm" className="form-container w-[100%] justify-center">
      <div className="formly bg-white w-[100%] md:w-[80%] lg:w-[800px]">
        <form onSubmit={handleSubmit(submitForm)} className="form-grid">
          <h3 className="justify-center">Send us A Message</h3>
          <div className="flashResponse">
            {error && <h3 className="alert-warning">{error}</h3>}

            {MSG && <h3 className="alert-success">Message sent</h3>}
          </div>
          <label htmlFor="name" style={{ display: "none" }}>
            Your Name
          </label>
          <input
            className="p-2"
            type="text"
            placeholder="Enter Your Name"
            {...register("name", { required: true })}
          />
          {errors.name ? (
            <span className="text-red-600">Please enter your name</span>
          ) : (
            ""
          )}

          <label htmlFor="email" style={{ display: "none" }}>
            Your email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            {...register("email", { required: true })}
            onChange={(e) => e.target.value}
            onFocus={(e) => e.target.value}
          />
          {errors.email ? (
            <span className="text-red-600">Please your email</span>
          ) : (
            ""
          )}

          <label htmlFor="message" style={{ display: "none" }}>
            Your Message
          </label>
          <textarea
            type="text"
            cols={60}
            rows={5}
            placeholder="Enter Message"
            {...register("message", { required: true })}
          ></textarea>
          {errors.message && (
            <span className="text-red-600">Please enter Message</span>
          )}
          <div className="flex w-[100%] justify-between">
            <h1></h1>
            <button
              type="submit"
              className="my-2 px-10 py-3 mx-5 text-gray-800 rounded-full bg-green-200 hover:text-green-600  transition-all duration-500 shadow-lg"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
