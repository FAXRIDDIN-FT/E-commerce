import React from "react";
import hero from "../../assets/hero.png";

const Hero = () => {
  return (
    <>
      <div className="bg-[#efecec]">
        <section className="container mx-auto px-4">
          <div
            className="flex flex-col md:flex-row justify-end items-center h-auto md:h-[500px] bg-cover bg-center rounded-xl"
            style={{ backgroundImage: `url(${hero})` }}
          >
            <div className="bg-[#fffb] px-6 md:px-9 py-6 md:py-8 rounded-md mr-0 md:mr-10 mt-5 md:mt-0 text-center md:text-left max-w-full md:max-w-md">
              <p className="text-gray-500 font-semibold mb-2 text-sm md:text-base">
                New Arrival
              </p>
              <h1 className="text-[32px] md:text-[50px] font-black mb-4 text-[#B88E2F] leading-snug md:leading-[60px]">
                Discover Our <br /> New Collection
              </h1>
              <p className="text-gray-600 text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing. <br />
                Ut elit tellus, luctus nec ullamcorper mattis.
              </p>
              <br />
              <button className="bg-[#B88E2F] text-white px-6 md:px-10 py-2 md:py-3 text-sm md:text-base">
                Buy Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
