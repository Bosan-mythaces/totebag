// import React from 'react'
import Woman1 from "../assets/Woman1.jpeg"
import Woman2 from "../assets/Woman2.png"

function Hero() {
  return (
    <>
    <section className="relative h-[600px] overflow-hidden rounded-[40px] border border-[#cfe0e0] bg-white">
  <div className="absolute top-14 left-6 flex gap-2.5 lg:left-[100px]">
    <span className="h-5 w-9 rounded-full bg-[#2b2b2b]" />
    <span className="h-5 w-20 rounded-full bg-[#dcdcdc]" />
    <span className="h-5 w-9 rounded-full bg-[#2b2b2b]" />
    <span className="h-5 w-9 rounded-full bg-[#2b2b2b]" />
  </div>
  <div className="absolute z-20 bottom-24 left-6 max-w-[520px] lg:left-[100px]">
    <p className="font-[Raleway] text-[26px] font-light tracking-wide text-[#333] uppercase">
      Trending Totebags
    </p>
    <h2 className="mt-1 font-[Montserrat] text-[56px] leading-tight font-medium">
      Leather Totebags
    </h2>
    <p className="mt-5 font-[Raleway] text-2xl leading-9 text-[#222]">
      Totebag's made with leather fabric. This fabric is usually stronger than
      the others.
    </p>
  </div>
  <img
    className="absolute inset-y-0 left-[35%]  hidden  lg:block"
    src={Woman1}
    alt=""
  />
  <img
    className="absolute top-[22%] bottom-[60%] left-[62%] hidden  lg:block"
    src={Woman2}
    alt=""
  />
</section>

    </>
  )
}

export default Hero
