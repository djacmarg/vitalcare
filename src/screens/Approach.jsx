import { Link } from "react-router-dom";

const Approach = () => {
  return (
    <div className="flex w-full m-auto h-auto lg:h-auto bg-gray-100 justify-center items-center py-10 transition-all duration-700">
      <div className="grid lg:m-auto gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-10">
        <article className="prose lg:prose-xl p-7">
          <img
            src="/svgs/3.svg"
            className="block w-full"
            alt="image slider 3"
          />
        </article>
        <article className="prose lg:prose-xl p-7">
          <h2>Client-Centered Approach:</h2>
          <p>
            At VitalCare, we prioritize the well-being and satisfaction of our
            clients. We listen attentively to your needs, address any concerns
            promptly, and strive to exceed your expectations at every step.
          </p>
          <p>
            Your comfort, safety, and overall wellness are our top priorities.
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

export default Approach;
