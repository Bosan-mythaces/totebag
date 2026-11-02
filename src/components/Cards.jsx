// import React from 'react'
// import React from 'react'
// import explore from "../../assets/Explore.jpg"

import branded from "../assets/Branded.jpg";
import office from "../assets/Office-totes.png"
import shop from "../assets/Shop.jpg"

function Cards() {
  return (
    <>
    <section className="mt-9 grid gap-5 font-[Raleway] text-white lg:h-[553px] lg:grid-cols-[2.07fr_1fr_1fr]">
  <article
    className="relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[28px] bg-neutral-500 bg-contain bg-center bg-no-repeat p-[22px] lg:pb-[78px]"
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${shop})`,
      backgroundSize: "100% 100%, cover"
    }}
  >
    <h2 className="text-4xl">Explore the totebag fashion</h2>
    <p className="mt-3 max-w-[490px] text-xl leading-[26px]">
      Totes are reliable carriage that adds to the details of your dress fashion
      with contradicting your fashion sense.
    </p>
    <a
      href="#"
      className="mt-5 inline-grid h-[70px] w-[162px] place-items-center rounded-full bg-white text-xl font-medium text-black"
    >
      Shop now
    </a>
  </article>
  
  {/* Other articles remain the same */}
  <article
  className="relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[28px] bg-neutral-500 bg-contain bg-center bg-no-repeat p-[22px] lg:pb-[78px]"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${branded})`,
    backgroundSize: "100% 100%, cover"
  }}
>
    <h2 className="text-[28px] leading-tight">Branded Collections</h2>
    <p className="mt-1 text-[15px] leading-[19px]">
      Customize your style and brands here on thetotebagshop.
    </p>
  </article>
  
  <article
    className="relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[28px] bg-neutral-500 bg-contain bg-center bg-no-repeat p-[22px] lg:pb-[78px]"
    style={{
      backgroundImage:
        `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${office})`,
      backgroundSize: "100% 100%, contain"
    }}
  >
    <h2 className="text-[28px] leading-tight">Totes as Office wears.</h2>
    <p className="mt-1 text-[15px] leading-[19px]">
      Totes can be worn to workspaces and to the office likewise.
    </p>
  </article>
</section>
    </>
  )
}

export default Cards