import "tw-elements";
import UnderAnimation from "../UnderAnimation";
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
            data-bs-target="#carouselDarkVariant"
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
          {/* Single item */}
          <div className="carousel-item active relative float-left w-full max-h-[35rem]">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"
              className="block w-full"
              alt="image slider 1"
            />
            <div className="carousel-caption hidden md:block absolute text-center top-[50%]">
              {/* <h5 className="text-5xl bold text-blue-700">VitCare LLC</h5> */}
              <p className="text-3xl text-green-800">
                Healthcare professionals you can trust.
              </p>
            </div>
          </div>
          {/* Single item */}
          <div className="carousel-item relative float-left w-full max-h-[35rem]">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(20).webp"
              className="block w-full"
              alt="image slider 2"
            />
            <div className="carousel-caption hidden md:block absolute text-center top-[50%]">
              {/* <h5 className="text-5xl bold text-blue-700">VitCare LLC</h5> */}
              <p className="text-3xl semibold text-green-700">
                Playing a vital role on healthcare Professionals.
              </p>
            </div>
          </div>
          {/* Single item */}
          <div className="carousel-item relative float-left w-full max-h-[35rem]">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(21).webp"
              className="block w-full"
              alt="image slider 3"
            />
            <div className="carousel-caption hidden md:block absolute text-center top-[50%]">
              {/* <h5 className="text-5xl bold text-blue-700">VitCare LLC</h5> */}
              <p className="text-3xl semibold text-green-800">
                Fast, Effecient, Robust and Apt Helath care Professionals of
                repute
              </p>
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
    </>
  );
};

export default Carousel;
