// import React from 'react'

import { Link } from "react-router"

function Header() {
  return (
   <>
    <header className="bg-[#fcfeff] px-6 font-[Raleway] lg:px-16 mt-14">
  <div className="grid grid-cols-[1fr_auto_1fr] items-center">
    <nav className="hidden gap-10 text-xl uppercase sm:flex">
      <Link to="/" className="pb-2">
        Home
      </Link>
      <a href="#" className="relative pb-2">
        SHOP
        <span className="absolute bottom-0 left-0 h-1.5 w-6 rounded-full bg-[#0a3636]" />
      </a>
    </nav>
    <Link to="/" className="col-start-2 text-[34px] font-light tracking-wide">
      thetotebagshop<sup className="align-super text-base">®</sup>
    </Link>
    <div className="flex items-center justify-end gap-8">
      <button aria-label="Account">
        <svg
          className="size-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        >
          <circle cx={12} cy="7.5" r={4} />
          <path d="M4 21c.8-4.4 4-6.5 8-6.5s7.2 2.1 8 6.5" />
        </svg>
      </button>
      <Link to= "/cart" className="relative">
        <svg
          className="size-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 3h3l2.5 12h11L21 7H6" />
          <circle cx={9} cy={20} r="1.2" />
          <circle cx={18} cy={20} r="1.2" />
        </svg>
        <span className="absolute -top-2 -right-2 grid size-4 place-items-center rounded-full bg-black text-[10px] text-white">
          0
        </span>
      </Link>
    </div>
  </div>
  <form className="mx-auto mt-16 flex h-[61px] max-w-[727px] overflow-hidden rounded-md bg-white shadow-[0_1px_6px_rgba(0,0,0,0.08)]">
    <span className="grid w-[63px] shrink-0 place-items-center bg-[#0a1f1f] text-white">
      <svg
        className="size-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      >
        <circle cx={11} cy={11} r={7} />
        <path d="m20 20-4-4" />
      </svg>
    </span>
    <input
      type="search"
      placeholder="search for your favourite totebag, colour, design patterns"
      className="w-full bg-transparent px-6 text-xl outline-none placeholder:text-black/40"
    />
  </form>
  <div className="mt-10 flex flex-wrap justify-center gap-[15px] pb-12 text-xl">
    <a className="flex h-[57px] items-center gap-2 rounded-full bg-[#0a1f1f] px-6 text-white">
      <svg
        className="size-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      >
        <path d="M3 7h8M17 7h4M3 17h3M12 17h9" />
        <circle cx={14} cy={7} r="2.5" />
        <circle cx={9} cy={17} r="2.5" />
      </svg>
      All
    </a>
    <a className="h-[57px] rounded-full display: flex items-center border border-black/15 px-6">
      Corduroy
    </a>
    <a className="h-[57px] rounded-full display: flex items-center border border-black/15 px-6">
      Denim
    </a>
    <a className="h-[57px] rounded-full display: flex items-center border border-black/15 px-6">
      Adire
    </a>
    <a className="h-[57px] rounded-full display: flex items-center border border-black/15 px-6">
      Leather
    </a>
  </div>
</header>
   </>
  )
}

export default Header
