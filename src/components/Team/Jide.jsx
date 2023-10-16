import { Link } from "react-router-dom";
const Jide = () => {
  return (
    <div className="flex w-full m-auto h-auto lg:h-auto bg-gray-100 justify-center items-center py-10 transition-all duration-700">
      <div className="grid lg:m-auto gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-10">
        <article className="prose lg:prose-xl p-7  flex justify-end">
          <img
            src="team/jide.jpg"
            className="block w-full  md:w-[350px] lg:w-[480px] lg:h-[500px]"
            alt="jide"
          />
        </article>

        <article className="prose lg:prose-xl p-7">
          {/* <h2>Babajide Ajao</h2> */}
          <p>
            <b>
              Babajide Ajao DPH, RN, B.Ed. & MPH <br />
              President
            </b>
            <br />
            Babajide is a seasoned healthcare professional with an impressive
            career in Public Health programming, clinical nursing, Leadership,
            and Administration which culminated into 22 years of active service.
            His dedication and commitment have made a lasting impact on the
            healthcare landscape. Notably, Babajide's career spans 14 years in
            the nursing field, with a remarkable 9-year tenure in academic
            nursing.
            <br />
            <br />
            As a Registered Nurse, Babajide excelled in the Home Health sector,
            culminating in a role as Clinical Community Manager for ParaMed Home
            Health in Northwest Ontario, Canada.
            <br />
            <br />
            Babajide also served as Health Director of Brokenhead Ojibway Nation
            in Scanterbury, Manitoba Canada. This role marked a significant step
            in his journey, as he contributed his expertise to the health and
            well-being of the community. In addition to his clinical expertise,
            Babajide has a passion for qualitative research with a focus on
            Grounded Theory. This unique combination of practical experience,
            health leadership, and interest in research allows Jide to approach
            healthcare challenges with a comprehensive perspective.
            <br />
            <br />
            Currently, Babajide continues to make a difference as a dedicated
            Home Health Nurse, utilizing his skills and insights to provide
            personalized care to individuals in need. Beyond the front lines, he
            also contributes to the healthcare community by serving on the
            Governing Board of a growing Home Health Organization. With a
            passion for excellence and a deep-rooted commitment to improving
            healthcare outcomes, Babajide is a driving force in the industry,
            exemplifying the qualities of leadership, compassion, expertise, and
            community engagement.
            <br />
            <br />
            <b>Areas of Expertise</b>
            <br />
            • Leadership and Management <br />
            • Chronic disease management <br />
            • Home Health
            <br />
            • Health education and promotion
            <br />
            • First Nation’s Health
            <br />
            • Accreditation of Health programs
            <br />
            • Pandemic Response
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

export default Jide;
