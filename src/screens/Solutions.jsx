import { Link } from "react-router-dom";

const Solutions = () => {
  return (
    <div className="flex w-full m-auto h-auto lg:h-auto bg-gray-100 justify-center items-center py-10 transition-all duration-700">
      <div className="grid lg:m-auto gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-10">
        <article className="flex justify-end prose lg:prose-xl p-7">
          <img
            src="/svgs/4.svg"
            className="block w-full md:w-[400px] lg:w-[600px]"
            alt="image slider 3"
          />
        </article>

        <article className="prose lg:prose-xl p-7">
          <h2>Flexible Solutions:</h2>
          <p>
            Whether you require temporary staffing, long-term placements, or
            home health services, VitalCare offers flexible solutions tailored
            to your unique requirements.
          </p>
          <p>
            We understand that each client and facility has specific needs, and
            we strive to accommodate them efficiently and effectively.
          </p>
          <br />
          <br />
          <Link
            to="/"
            className="rounded-md bg-green-500 text-white cursor-pointer px-5 py-2"
          >
            Back{" "}
          </Link>
        </article>
      </div>
    </div>
  );
};

export default Solutions;
