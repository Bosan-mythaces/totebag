// import React from 'react'

function Footer() {
  return (
    <>
    <footer className="bg-black px-6 pt-24 pb-10 text-white lg:px-[68px] lg:pt-52">
  <div className="grid gap-14 lg:grid-cols-[1fr_280px_390px] lg:gap-0">
    <div>
      <p className="text-[19px] leading-8">
        We provide comfy tote bags that won't
        <br />
        mess up your style and have plenty of space for all your stuff.
      </p>
      <p className="mt-12 text-6xl font-light tracking-wide lg:text-[64px]">
        thetotebagshop<sup className="align-super text-2xl">®</sup>
      </p>
      <div className="mt-9 flex gap-7">
        <a href="#" aria-label="TikTok">
          <svg className="size-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48Z" />
          </svg>
        </a>
        <a href="#" aria-label="Instagram">
          <svg
            className="size-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <rect x={3} y={3} width={18} height={18} rx={5} />
            <circle cx={12} cy={12} r={4} />
            <circle
              cx="17.5"
              cy="6.5"
              r={1}
              fill="currentColor"
              stroke="none"
            />
          </svg>
        </a>
      </div>
    </div>
    <div>
      <h3 className="text-[28px] font-bold">Quick links</h3>
      <ul className="mt-8 flex flex-col gap-5 text-lg">
        <li>
          <a href="#">Terms &amp; Conditions</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Terms of Service</a>
        </li>
        <li>
          <a href="#">Refund policy</a>
        </li>
      </ul>
    </div>
    <div>
      <h3 className="text-[28px] font-bold">Connect with Us</h3>
      <p className="mt-6 text-lg leading-7">
        Subscribe to our Newsletter to be the first to be aware of recent
        production and other production offers.
      </p>
      <form className="mt-14 flex h-[72px] items-center rounded-xl bg-[#333] pr-4 pl-6">
        <input
          type="email"
          placeholder="Enter email address"
          className="w-full bg-transparent text-base outline-none placeholder:text-white/50"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#0f1f1f]"
        >
          <svg
            className="size-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14m-5-5 5 5-5 5" />
          </svg>
        </button>
      </form>
    </div>
  </div>
  <p className="mt-24 text-right text-sm lg:mt-40">
    © thetotebagshop <strong className="font-bold">2024.</strong>
  </p>
</footer>

    </>
  )
}

export default Footer
