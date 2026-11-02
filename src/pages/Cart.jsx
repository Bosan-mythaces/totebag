import Footer from "../components/Footer";
import { useState } from "react";
import Header from "../components/Header";
import Cartitem from "../components/Cartitem";
import Modal from "../components/Modal"

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false)
  return (
   <>
   <div class="bg-[#fcfeff] font-sans text-ink sm: max-w-full max-w-auto lg:max-w-7xl mx-auto over">
   <Header />
   <main className="px-4 pt-4 lg:px-[52px]">
  <h1 className="text-[34px] leading-tight font-medium">Shopping Cart.</h1>
  <p className="text-sm font-light">
    Effortlessly manage your purchases and checkout with ease.
  </p>
  <div className="flex justify-between gap-20 mt-8">
    <div className="w-full flex flex-col gap-5">

      <Cartitem />
      <Cartitem />
      <Cartitem />
      <Cartitem />
    </div>
    <aside className="self-start">
      <div className="rounded-lg border border-black/10 bg-white/60 p-3">
        <h2 className="mt-3 text-xl font-semibold text-black/70">
          Order Summary
        </h2>
        <dl className="mt-5 space-y-[22px] px-0.5 text-[15px]">
          <div className="flex justify-between">
            <dt className="text-black/70">Subtotal</dt>
            <dd className="font-bold">₦4,000.00</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-black/70">Delivery</dt>
            <dd className="font-bold">₦1,500.00</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-black/70">Zip</dt>
            <dd className="font-bold">₦1,000.00</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-black/70">Front &amp; Back Designs</dt>
            <dd className="font-bold">₦1,000.00</dd>
          </div>
        </dl>
        <div className="mx-1 mt-5 flex items-center justify-between border-y border-black/15 px-1 py-4 text-xl font-bold">
          <span>Total</span>
          <span className="text-[15px]">₦7,500.00</span>
        </div>
        <div className="mx-1 mt-5 mb-1 flex gap-1.5 rounded-lg border border-black/10 bg-white px-2 py-2 text-[13px] leading-5">
          <svg
            className="mt-0.5 size-4 shrink-0 text-black/50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          >
            <circle cx={12} cy={12} r={9} />
            <path d="M12 8v5M12 16.5v.01" />
          </svg>
          Please your totebag will be delivered in three to five working days.
        </div>
      </div>
      <button onClick={() => setIsOpen(true)} className="mt-4 flex h-[43px] w-full items-center gap-2 rounded-lg bg-[#041414] px-3 text-sm text-white">
        Payment options
        <svg
          className="size-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <rect x={2} y={5} width={20} height={14} rx={2} />
          <path d="M2 10h20" />
        </svg>
      </button>
    </aside>
  </div>
  <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)} />
</main>
<Footer />
</div>
   </>
  );
}
