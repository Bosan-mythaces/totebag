// import React from 'react'
import Woman1 from "../assets/Woman1.png"
import Woman2 from "../assets/Woman2.png"

function Hero() {
  return (
    <>
    <section className="max-w-screen-xl mx-auto px-5 mt-10 hidden md:block">
      <div className="max-w-[1318px]">
        <div>
          <p className="font-semibold text-[25px] font-Raleway">
            Shop your favourite totebag.
          </p>
          <p className="font-light font-montserrat text-[16px] text-[#333]">
            Select the totebag that matches your fashion.
          </p>
        </div>

        <div className="max-w-328 h-[454px] mt-5 rounded-[37px] bg-[#FFFFFF] border mx-auto relative overflow-hidden ">
          <div className="flex items-center justify-between h-full px-10">
            <div className="absolute top-8 left-10 flex gap-2">
              <div className="w-5 h-2 rounded-full bg-black"></div>
              <div className="w-10 h-2 rounded-full bg-gray-300"></div>
              <div className="w-5 h-2 rounded-full bg-black"></div>
              <div className="w-5 h-2 rounded-full bg-black"></div>
            </div>

            <div className="w-[300px] shrink-0">
              <p className="text-sm font-light tracking-wide text-[#333]">
                TRENDING TOTEBAGS
              </p>
              <p className="text-4xl font-medium text-[#001515] mt-1">
                Leather Totebags
              </p>
              <p className="text-sm font-light text-[#333] mt-3">
                Totebag’s made with leather fabric. This fabric is usually
                stronger than the others.{" "}
              </p>
            </div>

            <img className=" w-150 relative right-30 bottom-18" src={Woman1} alt="Woman1" />
            <img className="h-3/4 object-contain relative bottom-0 right-35 top-15" src={Woman2} alt="" />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero
