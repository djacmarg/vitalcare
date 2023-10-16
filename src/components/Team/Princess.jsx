import { Link } from "react-router-dom";
const Princess = () => {
  return (
    <div className="flex w-full m-auto h-auto lg:h-auto bg-gray-100 justify-center items-center py-10 transition-all duration-700">
      <div className="grid lg:m-auto gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-10">
        <article className="prose lg:prose-xl p-7  flex justify-end">
          <img
            src="team/princess.jpg"
            className="block w-full  md:w-[350px] lg:w-[390px] lg:h-[520px]"
            alt="princess"
          />
        </article>

        <article className="prose lg:prose-xl p-7">
          <p>
            <b>
              Princess Kukua Ahedor MSN, APRN, FNP-C, PMHNP-BC <br />
              Clinical Director{" "}
            </b>
            <br />
            Princess was born and raised in Accra, Ghana. She relocated to the
            US with a business education and a dream. Today, with over a decade
            of nursing experience under her belt, Princess is a dedicated and
            compassionate dual board-certified family nurse practitioner and a
            psychiatric and mental health nurse practitioner.
            <br />
            <br />
            She is proudly educated at Albany State University in Georgia,
            Chamberlain College of Nursing in Chicago, University of Texas at El
            Paso as well as University of Texas, Rio Grande Valley. She has
            experience in the areas of hospice, acute care, home health, skilled
            nursing, psychiatric/mental health, and primary care. Princess is
            also a humanitarian healthcare provider. She is currently a
            candidate in the Doctor of Nursing Practice (advanced practice
            track) program at Wilmington University, where she is working on a
            project titled "Multidisciplinary Pressure Ulcer Prevention
            Protocol: A Quality Improvement Project in a Long-Term Care Unit.".
            <br />
            <br />
            <b>Areas of Expertise</b>
            <br />
            • Strategic Planning <br />
            • Vision Setting and Policy
            <br />
            • Scientific foundation of advanced practice nursing leadership
            <br />
            • Quality of clinical practice inquiry
            <br />
            • Healthcare Models and delivery systems
            <br />
            • Ethics
            <br />
            • Executive Nursing Leadership
            <br />
            • Clinical Practice Leadership Skills
            <br />
            • Technology and information literacy
            <br />
            • Healthcare Management
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

export default Princess;
