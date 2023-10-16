import { Link } from "react-router-dom";
const Paul = () => {
  return (
    <div className="flex w-full m-auto h-auto lg:h-auto bg-gray-100 justify-center items-center py-10 transition-all duration-700">
      <div className="grid lg:m-auto gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-10">
        <article className="prose lg:prose-xl p-7 flex justify-end">
          <img
            src="team/paul.jpg"
            className="block w-full  md:w-[350px] lg:w-[390px] lg:h-[520px]"
            alt="paul"
          />
        </article>

        <article className="prose lg:prose-xl p-7">
          <p>
            <b>
              Paul Koku MBA, MA, PGD & BSc <br />
              Operations, Marketing & Finance Director
            </b>
            <br />
            Paul has over 20 years of working experience in Leadership and
            Business Management. He started his career as an Educator and slowly
            transitioned into leadership and management in the business world.
            He has a rich experience in the not-for-profit sector as well.
            <br />
            <br />
            Paul is a proud graduate of Lulea University of Technology in
            Sweden, Horizon College and Seminary in Canada, University of Cape
            Coast, and GIMPA in Ghana. He takes pride in optimizing
            multicultural workforce solutions for clients and building effective
            teams. He has a relentless drive for success, building people up,
            and creating long-term relationships with our clients that
            positively impact their business, our reputation, growth, and
            stability.
            <br />
            <br />
            <b>Areas of Expertise</b>
            <br />
            • Business Management
            <br />
            • Leadership
            <br />
            • Human Resources Management <br />
            • E-commerce & Marketing
            <br />
            • Finance and Administration
            <br />
            • Counselling
            <br />
          </p>
          <Link
            to="/team"
            className="rounded-md bg-green-500 text-white cursor-pointer px-5 py-2"
          >
            Back to Team
          </Link>
        </article>
      </div>
    </div>
  );
};

export default Paul;
