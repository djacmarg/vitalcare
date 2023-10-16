import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import axios from "../api/axios";
//https://refine.dev/blog/how-to-multipart-file-upload-with-react-hook-form/#how-to-multipart-file-upload-with-refine-and-react-hook-form
const Form3 = () => {
  const [blob, setBlob] = useState("");
  const [blog_body, setBlogBody] = useState("");
  const [blog_title, setBlogTitle] = useState("");
  const [cat_id, setCatID] = useState("");
  const [cat, setCat] = useState([]);
  const [blog_image, setFile] = useState("");

  const { loading, error, USER_INFO } = useSelector((state) => state.user);
  const [user_id] = useState(USER_INFO ? USER_INFO.data.user_id : null);
  const IS_POSTED = localStorage.getItem("POSTED");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { user_id } });

  const submitForm = async (d) => {
    const formData = new FormData();
    formData.append("blog_image", d.blog_image[0]);
    formData.append("blob", d.blob);
    formData.append("blog_title", d.blog_title);
    formData.append("blog_body", d.blog_body);
    formData.append("cat_id", d.cat_id);
    formData.append("user_id", d.user_id);

    const res = await fetch("http://vapi.local/blog/create", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
    alert(JSON.stringify(`${res.message}, status: ${res.status}`));
  };
  useEffect(() => {
    axios
      .get("category")
      .then((response) => {
        setCat(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [IS_POSTED]);
  if (!cat) return null;
  return (
    <section id="CardForm" className="form-container w-[100%] justify-center">
      <div className="formly bg-white w-[100%] md:w-[80%] lg:w-[600px] lg:py-20 ">
        <form onSubmit={handleSubmit(submitForm)} className="form-grid">
          <h3 className="justify-center">Create a Blog post</h3>
          <input
            className="py-3 border-2"
            name="user_id"
            placeholder="blob"
            type="text"
            defaultValue={user_id}
            {...register("user_id")}
          />
          <select {...register("cat_id", { required: true })}>
            <option value="">Select Blog category</option>
            {cat
              ? cat?.categories?.map((ct) => {
                  return (
                    <option key={ct.cat_id} value={ct.cat_id}>
                      {ct.name}
                    </option>
                  );
                })
              : "No category listed"}
          </select>
          <input
            className="py-3 border-2"
            name="blob"
            placeholder="blob"
            type="text"
            {...register("blob")}
          />
          <input
            className="py-3 border-2"
            name="blog_title"
            placeholder="blog title"
            type="text"
            {...register("blog_title")}
          />
          {/* 
          <input
            className="py-3 border-2"
            name="blog_body"
            placeholder="blog body"
            type="text"
            {...register("blog_body")}
          /> */}

          <input
            type="file"
            {...register("blog_image")}
            onChange={(e) => setFile(e.target.blog_image)}
            accept="application/pdf,application/msword,
          application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          />

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

export default Form3;
