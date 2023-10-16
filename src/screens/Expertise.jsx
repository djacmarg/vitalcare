import { Link } from "react-router-dom";

const Expertise = () => {
  return (
    <div className="flex w-full h-auto justify-center content-center items-center bg-gray-200 my-0 py-10 clear-both border-y-2 transition-all duration-700">
      <article className="prose lg:prose-xl p-7">
        <h2> Industry Expertise:</h2>
        <p>
          With years of experience in the health industry, we possess
          comprehensive knowledge and a deep understanding of the evolving
          healthcare landscape.
        </p>
        <p>
          We stay up-to-date with the latest industry trends, regulations, and
          best practices to ensure that our services align with the highest
          standards of care.
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
  );
};

export default Expertise;
