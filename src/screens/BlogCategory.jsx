import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { blogCategory } from "../features/user/userAction";
import { toast } from "react-toastify";
import axios from "../api/axios";
// form styles
import "./AddCard.css";

const BlogCategory = () => {
  const [grant_type] = useState("password");
  const [cat, setCat] = useState(null);
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
  } = useForm({ defaultValues: { grant_type } });

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("blogcategory")
      .then((response) => {
        setCat(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [POSTED]);
  console.log(cat);
  useEffect(() => {
    if (POSTED) {
      toast.success("Blog category created");
      const timer = setTimeout(() => {
        navigate("/blogs");
        localStorage.removeItem("POSTED");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [navigate, POSTED]);

  const submitForm = (data) => {
    dispatch(blogCategory(data));
    // setName("");
  };

  return (
    <section id="CardForm" className="form-container w-[100%] justify-center">
      <div className="formly bg-white w-[100%] md:w-[80%] lg:w-[600px] lg:pt-20 lg:pb-40">
        <form onSubmit={handleSubmit(submitForm)} className="form-grid">
          <h6 className="justify-center py-4 text-2xl text-gray-700">
            Create a new Blog category
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

          <select>
            <option value="null">Existing Blog categories</option>
            {cat
              ? cat?.categories?.map((ct) => {
                  return (
                    <>
                      <option value={ct?.cat_id}>{ct?.cat_name}</option>;
                    </>
                  );
                })
              : "No category listed"}
          </select>

          <label htmlFor="cat_name" style={{ display: "none" }}>
            Blog Category
          </label>
          <input
            type="text"
            placeholder="Enter Blog Category name"
            {...register("cat_name", { required: true })}
          />
          {errors.cat_name && (
            <span className="text-red-600">
              Please enter Blog Category name
            </span>
          )}
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

export default BlogCategory;
