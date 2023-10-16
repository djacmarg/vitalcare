import "./team.css";
import { Link } from "react-router-dom";
import TeamProfile from "./team-profile";
const Team = () => {
  const TeamImageURL = "team/";
  return (
    <div className="flex w-full h-auto lg:h-[100vh] justify-center content-center items-center bg-white pt-3 pb-10 clear-both transition-all duration-700">
      <section className="h-auto lg:h-100vh grid justify-center gap-10">
        <h2 className="text-xl">The Core Team Behind Vital Care LLC</h2>
        <div className="grid lg:flex gap-10">
          {/* card starts here */}
          {TeamProfile.map((team) => {
            return (
              <>
                <div key={team.id} className="team-container">
                  <div className="content">
                    <div className="card h-[590px]">
                      <div className="card-content">
                        <div className="image">
                          <img
                            src={TeamImageURL + team.image_name}
                            alt={team.url}
                          />
                        </div>
                        {/* <div className="social-media">
                          <i className="fa-brands fa-facebook">
                            <BsFacebook />
                          </i>
                          <i className="fa-brands fa-twitter">
                            <BsTwitter />
                          </i>
                        </div> */}

                        <div className="name-profession">
                          <span className="name">{team.name}</span>
                          <span className="profession">{team.prof}</span>
                        </div>
                        <div className="rating">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                        </div>
                        <div className="link">
                          {/* <button className="aboutMe">Learn More...</button> */}
                          <Link
                            className="link"
                            key={team.id}
                            to={`/${team.link}`}
                          >
                            Read Full Bio
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Team;
