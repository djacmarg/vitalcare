import { Link } from "react-router-dom";
const Staffing = () => {
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
          <h2> Quality Staffing:</h2>
          <p>
            Our stringent recruitment process ensures that we only hire skilled
            professionals with the necessary qualifications and experience.
          </p>
          <p>
            We carefully screen and interview candidates to ensure they possess
            the right expertise, compassion, and dedication required to deliver
            exceptional care.
          </p>
          <b className="text-2xl">
            <u>Nurses and Allied Health Staff</u>
          </b>
          <br />
          <b className="text-xl">Job Types: </b>
          Full-Time, Part-Time, PRN.
          <br />
          <br />
          <b className="text-xl">
            <u>Shifts and Schedules:</u>
          </b>
          <br />
          Extended Hours, Overtime, Weekends as needed. Day shift, Night shift,
          Monday to Friday, Holidays, 8 and 12 hour shifts.
          <br />
          Are you a morally upright and sympathetic person who values giving our
          patients high-quality care that benefits them? Do you have a minimum
          of one year experience in your respective filed? If yes, then visit
          our career page and apply to join our growing team.
          <br />
          <br /> We at Vital Care LLC are motivated to provide both our patients
          and workers with amazing experiences. Our goal is to offer chances for
          professional development and growth in a collaborative setting that
          prioritizes patient care.
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

export default Staffing;
