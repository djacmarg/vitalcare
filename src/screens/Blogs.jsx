import { useState, useEffect } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import { scrollToView } from "../utils/scroller";
import dateFormat from "dateformat";
import ReactPaginate from "react-paginate";
const Blogs = () => {
  const assetsURL = "https://vitcarellc.com/assets/uploads/";
  //const assetsURL = "http://vapi.local/assets/uploads/";
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const size = 12;
  useEffect(() => {
    const getBlogs = async () => {
      await axios
        .get(`blog?page=1&size=${size}`)
        .then((response) => {
          setData(response.data);
          setPageCount(
            Math.ceil(response.data.pagination.totalElements / size)
          );
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getBlogs();
  }, []);

  const fetchBlogs = async (currentPage) => {
    axios
      .get(`blog?page=${currentPage}&size=${size}`)
      .then((response) => {
        setData(response.data);
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlePageClick = async (d) => {
    console.log(d.selected);
    let currentPage = d.selected + 1;
    const blogsServerResponse = await fetchBlogs(currentPage);
    setData(blogsServerResponse);
  };
  return (
    <div className="flex w-full m-auto h-auto lg:h-auto bg-gray-100 justify-center items-center py-10 transition-all duration-700">
      <div className="grid lg:m-auto gap-2  pt-10">
        <div className="blog-cont w-[100%] md:w-[95%] lg:w-[1200px]">
          {/* <img
            src={`${assetsURL}${
              data?.blogs[data?.blogs?.length - 1].blog_image
            }`}
            className="max-w-[600px]"
            alt={data.blogs[data.blogs.length - 1].blog_title}
          />
          <h3>
            Featured Post:{" "}
            {dateFormat(
              data.blogs[data.blogs.length - 1].created_at,
              " mmmm, dS yyyy"
            )}
          </h3>
          <h2>{data.blogs[data.blogs.length - 1].blog_title}:</h2>
          <p className="p-contents p-10">
            {data.blogs[data.blogs.length - 1].blog_body}
          </p> */}
        </div>
        <div className="flex w-full m-auto h-auto lg:h-auto justify-center items-center py-10 transition-all duration-700">
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10">
            {data
              ? data?.blogs?.map((item) => {
                  return (
                    <Link
                      key={item.blog_id}
                      to={`/blog/${item.blog_id}`}
                      onClick={() => scrollToView()}
                    >
                      <div className="grid m-auto p-auto h-auto sm:w-[96%] md:w-[90%] lg:w-[300px] lg:h-[400px] justify-center items-start hover:bg-gray-100 hover:translate-y-1 transition-all duration-700 shadow-lg">
                        <div className="w-[100%] rounded-t-lg">
                          <img
                            src={`${assetsURL}${item.blog_image}`}
                            className="rounded-t-lg w-[100%] h-[200px]"
                            alt={item.blog_title}
                          />
                        </div>
                        <div className="w-[100%] py-5 px-2 justify-center m-auto md:max-w-[500px]">
                          <h3>{item.blog_title}</h3>
                          <div className="pt-3 blog_body max-h-[175px] border-b-2 justify-start items-start">
                            {/* {item.blog_body.slice(0, 40) + "..."} */}
                          </div>
                          <div className="flex justify-between content-center items-center pt-3">
                            <div className="cat"></div>
                            <div className="cat">
                              {dateFormat(item.created_at, " mmmm, dS yyyy")}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })
              : "No Blog Item Found"}
          </div>
        </div>
        <div className="pagination justify-center">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={3}
            pageRangeDisplayed={6}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"activ"}
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
