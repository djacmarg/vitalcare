import React from "react";
import "tw-elements";

const Testimonial = () => {
  return (
    <div className="w-[100%] h-auto lg:min-h-[600px] pt-10 m-auto md:w-[90%] lg:w-[70%]">
      <section className="text-neutral-700 dark:text-neutral-300">
        <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
          <h3 className="mb-6 text-3xl font-bold">Testimonials</h3>
          {/* <p className="mb-6 pb-2 md:mb-12 md:pb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p> */}
        </div>
        {/*First Testimonial*/}
        <div className="grid gap-6 px-5 text-center md:grid-cols-3 ">
          <div>
            <div className="block rounded-none bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-none bg-green-200" />
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img src="/img/a.png" />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">Dayo Adegbenle</h4>
                <hr />
                <p className="mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="inline-block h-7 w-7 pr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  Awesome testimonial contents...
                </p>
              </div>
            </div>
          </div>
          {/*Second Testimonial*/}
          <div>
            <div className="block rounded-none bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-none bg-[#c6c6d3]" />
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img src="/img/a.png" />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">Henry Moore</h4>
                <hr />
                <p className="mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="inline-block h-7 w-7 pr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  Awesome testimonial contents...
                </p>
              </div>
            </div>
          </div>
          {/*Third Testimonial*/}
          <div>
            <div className="block rounded-none bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-none bg-green-200" />
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img src="/img/a.png" />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">Jane Yvester</h4>
                <hr />
                <p className="mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="inline-block h-7 w-7 pr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  Awesome testimonial contents...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
