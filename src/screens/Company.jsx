import React from "react";

const Company = () => {
  return (
    <div className="flex w-full m-auto h-auto lg:h-auto bg-gray-100 justify-center items-center py-10 transition-all duration-700">
      <div className="grid lg:m-auto gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-10">
        <article className="prose lg:prose-xl p-7">
          <img
            src="/images/company_image.jpeg"
            className="block w-full"
            alt="image slider 3"
          />
        </article>

        <article className="prose lg:prose-xl p-7">
          <h2>Coming soon...:</h2>
        </article>
      </div>
    </div>
  );
};

export default Company;
