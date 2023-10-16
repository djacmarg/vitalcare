import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import { Link, useParams } from "react-router-dom";
import { scrollToView } from "../utils/scroller";
import dateFormat from "dateformat";
const BlogSingle = () => {
  const params = useParams();
  const [data, setData] = useState(null);
  const [id, setID] = useState(params.id);
  useEffect(() => {
    axios
      .get(`blog/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(data);
  if (!data) return null;
  return (
    <div className="flex w-full m-auto h-auto lg:h-auto bg-gray-100 justify-center items-center py-10 transition-all duration-700">
      <div className="grid lg:m-auto gap-2  pt-10">
        <div className="blog-cont w-[100%] md:w-[95%] lg:w-[1300px]">
          <img
            src={`http://vapi.local/assets/uploads/${data.blog_image}`}
            className="max-w-[600px]"
            alt={data.blog_title}
          />
          <div className="mt-4">
            <h3>
              Featured Post: {dateFormat(data.created_at, " mmmm, dS yyyy")}
            </h3>
            <h2>{data.blog_title}</h2>
          </div>
          <p className="p-contents p-10">{data.blog_body}</p>
        </div>

        <div className="top">
          <Link
            to="/blogs"
            className="rounded-md bg-green-400 cursor-pointer px-5 py-2"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogSingle;
