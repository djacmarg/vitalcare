import "tw-elements";
import UnderAnimation from "../UnderAnimation";
import WhyChooseVitalCare from "../WhyChooseVitalCare";
// import Services from "../Services";
import Hero from "../Hero";
const Carousel = () => {
  return (
    <>
      <div
        id="carouselDarkVariant"
        className="carousel slide carousel-fade carousel-dark relative"
        data-bs-ride="carousel"
      >
        {/* Indicators */}
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />

          <button
            data-bs-target="#carouselLightVariant"
            data-bs-slide-to={1}
            aria-label="Slide 1"
          />
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to={2}
            aria-label="Slide 1"
          />
        </div>
        {/* Inner */}
        <div className="carousel-inner relative w-full overflow-hidden">
          {/* Single item one*/}
          <div className="carousel-item active relative float-left w-full max-h-[40rem]">
            <img
              src="/svgs/1.svg"
              className="block w-full"
              alt="image slider 1"
            />
            {/* <div className="carousel-caption  md:block absolute text-center top-auto md:top-[50%]"> */}
            <div className="carousel-caption  md:block absolute text-center top-auto md:top-[50%] lg:w-[500px] lg:top-[20%]">
              <h5 className="mb-2 text-2xl md:text-4xl lg:text-5xl bold text-gray-100">
                Qualified & Compassionate Healthcare Professionals
              </h5>
              {/* <p className="text-xl md:text-2xl lg:text-3xl semibold text-gray-100">
                VitalCare specializes in providing qualified and compassionate
                healthcare professionals to various healthcare facilities
                more...
              </p> */}
            </div>
          </div>
          {/* Single item two*/}
          <div className="carousel-item relative float-left w-full max-h-[40rem]">
            <img
              src="/svgs/2.svg"
              className="block w-full"
              alt="image slider 2"
            />
            <div className="carousel-caption  md:block absolute text-center top-auto md:top-[50%] lg:w-[500px] lg:top-[20%]">
              <h5 className="text-2xl md:text-4xl lg:text-5xl bold text-gray-100">
                Healthcare Services In The Familiarity & Comfort Of Your Own
                Homes
              </h5>
            </div>
          </div>
          {/* Single item three*/}

          <div className="carousel-item relative float-left w-full max-h-[40rem]">
            <img
              src="/svgs/3.svg"
              className="block w-full"
              alt="image slider 3"
            />
            {/* <div className="carousel-caption  md:block absolute text-center top-auto md:top-[50%]"> */}
            <div className="carousel-caption  md:block absolute text-center top-auto md:top-[50%] lg:w-[500px] lg:top-[20%]">
              <h5 className="text-2xl md:text-4xl lg:text-5xl bold text-green-500">
                Fast, Effecient, Robust & Apt Health Care Professionals Of
                Repute
              </h5>
            </div>
          </div>
        </div>
        {/* Inner */}
        {/* Controls */}
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="text-white bold carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <UnderAnimation />
      <WhyChooseVitalCare />
      {/* <Services /> */}
      <Hero />
    </>
  );
};

export default Carousel;
