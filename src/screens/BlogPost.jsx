import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../api/axios";

const BlogPost = () => {
  const [blog_image, setBlogImage] = useState("");
  const [err, setErr] = useState(false);
  const [uploadedFile, setUploadedFile] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [cat, setCat] = useState([]);
  const [succeded, setSucceded] = useState(false);
  const [select, setSelect] = useState(
    "Drag or Select blog image to upload..."
  );

  const { error, USER_INFO } = useSelector((state) => state.user);
  const [user_id] = useState(USER_INFO ? USER_INFO?.data?.user_id : null);
  const IS_POSTED = localStorage.getItem("POSTED");
  const POSTED = localStorage.getItem("POSTED");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { user_id } });

  useEffect(() => {
    axios
      .get("blogcategory")
      .then((response) => {
        setCat(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [IS_POSTED]);
  //if (!cat) return null;

  useEffect(() => {
    if (POSTED) {
      toast.success("Blog created successfully");
      const timer = setTimeout(() => {
        localStorage.removeItem("POSTED");
        setSucceded(false);
        navigate("/blogs");
      }, 7000);

      return () => clearTimeout(timer);
    }
  }, [POSTED, navigate]);

  const submitForm = async (d) => {
    const formData = new FormData();
    formData.append("blog_image", d.blog_image[0]);
    formData.append("blob", d.blob);
    formData.append("blog_title", d.blog_title);
    formData.append("blog_body", d.blog_body);
    formData.append("cat_id", d.cat_id);
    formData.append("user_id", d.user_id);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      if (axios.post("blog/create", formData, config)) {
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
      <div className="formly bg-white w-[100%] md:w-[80%] lg:w-[600px] lg:py-20 ">
        <form onSubmit={handleSubmit(submitForm)} className="form-grid">
          {error && (
            <div className="text-red-600">
              <h3>{error}</h3>
            </div>
          )}
          {succeded && (
            <div className="text-green-600">
              <h3>Blog created successfully</h3>
            </div>
          )}
          <h6 className="justify-center py-4 text-2xl text-gray-700">
            Create a Blog post
          </h6>

          <input
            className="py-3 border-2"
            name="user_id"
            type="hidden"
            defaultValue={user_id}
            {...register("user_id")}
          />
          <select
            className="w-[100%] py-4 text-xl border border-b-green-600"
            {...register("cat_id", { required: true })}
          >
            <option value="" className="w-[100%] py-4 text-2xl">
              Select Blog category
            </option>
            {cat
              ? cat?.categories?.map((ct) => {
                  return (
                    <option key={ct.cat_id} value={ct.cat_id}>
                      {ct.cat_name}
                    </option>
                  );
                })
              : "No category listed"}
          </select>
          <input
            className="py-3"
            name="blob"
            placeholder="blob"
            type="text"
            {...register("blob")}
          />
          <input
            className="py-3"
            name="blog_title"
            placeholder="blog title"
            type="text"
            {...register("blog_title")}
          />

          <br />
          <br />
          <input
            type="file"
            className="upload-file-input cursor-pointer"
            placeholder="Attach Blog Image/photo"
            {...register("blog_image", { required: true })}
            //onChange={onFileSelected}
            onChange={(e) => setSelect("Image Selected")}
            accept="application/pdf,application/msword,
          application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          />
          <label
            className="upload-label"
            htmlFor="attached_file"
            style={{ cursor: "pointer", color: "#09f" }}
          >
            {select}
          </label>

          <label htmlFor="blog_body" style={{ display: "none" }}>
            Blog Contents
          </label>
          <textarea
            type="text"
            cols={60}
            rows={5}
            placeholder="Enter Blog contents"
            {...register("blog_body", { required: true })}
          ></textarea>
          {errors.blog_body && (
            <span className="text-red-600">Please enter Blog contents</span>
          )}
          <br />
          <button
            type="submit"
            className="my-2 px-10 py-3 mx-5 text-gray-800 rounded-md bg-green-300 hover:text-green-600  transition-all duration-500 shadow-lg"
            disabled={isLoading}
          >
            {isLoading ? "Submiting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default BlogPost;
