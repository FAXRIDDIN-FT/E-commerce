import React from "react";
import frist from "@/assets/1.png";
import two from "@/assets/2.png";
import three from "@/assets/3.png";
const Sorting = () => {
  return (
    <div>
      <div>
        <section className="container mx-auto mt-[50px] px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px]">
            <div className="flex flex-col items-center gap-[10px]">
              <div>
                <img src={frist} alt="" className="w-full h-auto object-contain" />
              </div>
              <div>
                <p className="text-[#000] text-[20px] font-black">Dining</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-[10px]">
              <div>
                <img src={two} alt="" className="w-full h-auto object-contain" />
              </div>
              <div>
                <p className="text-[#000] text-[20px] font-black">Living</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-[10px]">
              <div>
                <img src={three} alt="" className="w-full h-auto object-contain" />
              </div>
              <div>
                <p className="text-[#000] text-[20px] font-black">Bedroom</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sorting;

