// import React from 'react'
import minimalist from "../assets/Minimalist.jpeg"

function Cartitem() {
  return (
    <>
    <div className="flex justify-between items-center">
            <div className="flex gap-5">
              <img className="w-[150px] h-[150px]" src={minimalist} alt="" />
              <div className="lex flex-col">
                <h2 className="text-[22px] leading-tight">Plane totebag</h2>
                <p className="text-sm text-black/60">thetotebag1500</p>
                <div className="mt-1 flex gap-0.5">
                  <span className="grid size-[22px] place-items-center rounded-sm bg-[#041414] text-xs text-yellow-400">
                    ★
                  </span>
                  <span className="grid size-[22px] place-items-center rounded-sm bg-[#041414] text-xs text-yellow-400">
                    ★
                  </span>
                  <span className="grid size-[22px] place-items-center rounded-sm bg-[#041414] text-xs text-yellow-400">
                    ★
                  </span>
                  <span className="relative grid size-[22px] place-items-center rounded-sm bg-[#041414] text-xs text-yellow-400">
                    ☆
                    <span className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
                      <span className="grid size-[22px] place-items-center">★</span>
                    </span>
                  </span>
                  <span className="grid size-[22px] place-items-center rounded-sm bg-[#041414] text-xs text-yellow-400">
                    ☆
                  </span>
                </div>
                <p className="mt-2 text-[15px]">
                  <span className="text-black/40">Color:</span> Cream
                </p>
              </div>
            </div>
            <div className="flex h-[34px] items-center justify-center gap-2 rounded border border-black/10 bg-white text-lg font-semibold">
              <button>+</button>
              <span className="rounded border border-black/20 px-1.5 text-[11px] font-normal text-black/60">
                1
              </span>
              <button>−</button>
            </div>
            <div>
              <p className="text-xl font-bold">₦4,000</p>
            </div>
            <div>
              <button
                aria-label="Remove"
                className="grid size-[38px] place-items-center bg-[#041414] text-white"
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
                  <path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v6M14 11v6" />
                </svg>
              </button>
            </div>
          </div>
    </>
  )
}

export default Cartitem
