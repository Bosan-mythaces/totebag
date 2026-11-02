// import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Zero from "../components/Products/Zero";
import Monocle from "../components/Products/Monocle";
import Peach from "../components/Products/Peach";
import Minimalist from "../components/Products/Minimalist";
import Angel from "../components/Products/Angel";
import Blank from "../components/Products/Blank";
import minimalist from "../assets/Minimalist.jpeg"
import Review from "../components/Review";

export default function ProductDetails() {
    
  return (

    <>
    <div class="bg-[#fcfeff] font-sans text-ink sm: max-w-full max-w-auto lg:max-w-7xl mx-auto over">
    <Header />
    <main className="bg-[#fcfeff] px-4 py-6 font-[Raleway] text-[#222] lg:px-1">
  <h1 className="text-[32px] leading-none font-semibold text-black">
    Your Cart.
  </h1>
  <p className="mt-1 text-xs">
    Review and manage the items in your shopping cart.
  </p>
  <div className="mt-4 grid gap-3 lg:grid-cols-2">
    <div>
      <img
        className="aspect-[347/295] w-full border border-black/10 bg-[#efefef] "
        src={minimalist}
        alt=""
      />
      <div className="mt-4 flex justify-center gap-[11px]">
        <div className="text-center text-xs">
          <img className="size-[67px] bg-[#efefef]" src={minimalist} alt="" />
          <p className="mt-2">WHITE</p>
        </div>
        <div className="text-center text-xs">
          <img className="size-[67px] bg-[#efefef]" src={minimalist} alt="" />
          <p className="mt-2">BLACK</p>
        </div>
        <div className="text-center text-xs">
          <img className="size-[67px] bg-[#efefef]" src={minimalist} alt="" />
          <p className="mt-2">GREY</p>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 border border-black/10 bg-white px-3 py-2 text-[11px]">
        <button className="flex items-center gap-1">
          <svg
            className="size-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx={12} cy={12} r={9} />
            <path d="m8 12 3 3 5-6" />
          </svg>
          Zip
        </button>
        <button className="flex items-center gap-1">
          <svg
            className="size-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx={12} cy={12} r={9} />
            <path d="m8 12 3 3 5-6" />
          </svg>
          Button
        </button>
        <button className="flex items-center gap-1">
          <svg
            className="size-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx={12} cy={12} r={9} />
            <path d="m8 12 3 3 5-6" />
          </svg>
          Zip or Button
        </button>
        <button className="flex items-center gap-1">
          <svg
            className="size-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx={12} cy={12} r={9} />
            <path d="m8 12 3 3 5-6" />
          </svg>
          None
        </button>
      </div>
      <p className="mt-1 text-center text-[10px] text-black/60">
        Zip cost ₦1,000.00 extra while button cost ₦500.00
      </p>
    </div>
    <div className="max-w-[640px]">
      <p className="text-[15px]">Product</p>
      <div className="mt-4 flex w-fit items-center gap-3 rounded-md border border-[#bcd3d1] bg-[#e8f1f0] px-5 py-2.5 text-[18px]">
        <svg
          className="size-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
        >
          <circle cx={6} cy={17} r={3} />
          <circle cx={18} cy={17} r={3} />
          <path d="M9 17h6l-2-9h-3" />
        </svg>
        Delivery fee
        <span className="rounded bg-[#0a1f1f] px-3 py-1 text-[13px] text-white">
          1500
        </span>
      </div>
      <h2 className="mt-7 text-[26px] font-medium">Cream colored totebag</h2>
      <div className="mt-5 flex items-center gap-3">
        <div className="flex gap-1.5">
          <span className="grid size-8 place-items-center rounded-sm bg-[#0a1f1f] text-lg text-yellow-400">
            ★
          </span>
          <span className="grid size-8 place-items-center rounded-sm bg-[#0a1f1f] text-lg text-yellow-400">
            ★
          </span>
          <span className="grid size-8 place-items-center rounded-sm bg-[#0a1f1f] text-lg text-yellow-400">
            ★
          </span>
          <span className="grid size-8 place-items-center rounded-sm bg-[#0a1f1f] text-lg text-yellow-400">
            ★
          </span>
          <span className="grid size-8 place-items-center rounded-sm bg-[#0a1f1f] text-lg text-yellow-400">
            ☆
          </span>
        </div>
        <span className="rounded border border-black/10 bg-white px-3 py-1.5 text-base">
          2.4
        </span>
      </div>
      <div className="mt-8 flex items-center text-lg">
        <span>Price:</span>
        <span className="ml-4 rounded border border-black/10 bg-white px-6 py-3 text-[18px] font-semibold">
          ₦ 4,000
        </span>
        <span className="mx-6 h-12 w-px bg-black/20" />
        <span>Quantity:</span>
        <button className="ml-4 px-3 text-xl">+</button>
        <span className="mx-3 rounded border border-black/20 bg-white px-4 py-1.5 text-sm">
          1
        </span>
        <button className="px-3 text-xl">−</button>
      </div>
      <p className="mt-8 text-[15px] leading-7 text-black/60">
        The Cream-Colored Totebag is a blend of elegance and functionality.
        Crafted from luxurious fabric, its spacious interior accommodates daily
        essentials. Lightweight and stylish.
      </p>
      <div className="mt-8 space-y-4">
        <button className="h-[60px] w-[500px]  rounded border border-black/30 bg-white text-[16px] font-medium">
          Buy Now
        </button>
        <button className="block h-[60px] w-[500px] rounded-md bg-[#041414] text-[16px] font-medium text-white">
          Add to cart
        </button>
      </div>
      <button className="mt-8 flex h-[70px] w-full items-center justify-between rounded-lg border border-[#6fb5b0] bg-[#dfe6e5] px-6 text-xl text-[#0f5b57]">
        Select your location
        <svg
          className="size-6 text-black"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </div>
  </div>
  <section className="mt-5">
    <h3 className="text-2xl font-semibold text-black">Description</h3>
    <p className="mt-1 text-xl leading- text-black/60">
      The Cream-Colored Totebag is a blend of elegance and functionality.
      Crafted from luxurious fabric, its spacious interior accommodates daily
      essentials. Lightweight and stylish, it's perfect for any occasion,
      offering comfort and sophistication. The tote features sturdy, reinforced
      handles for added durability, ensuring it can carry heavier items without
      compromising on style. Inside, multiple pockets provide organized storage,
      making it easy to find your keys, phone, or wallet. The classic cream
      color pairs effortlessly with any outfit, making it a versatile accessory
      for both casual and formal settings. Whether you're heading to work,
      running errands, or enjoying a night out, this tote bag elevates your look
      while providing practical storage solutions.
    </p>
  </section>
  <section className="pl-126 mt-5">
    <div>
        <h1 className="font-bold text-3xl">Customers Review</h1>
        <p>Testimonies from our Customers</p>
    </div>
  <Review />
  <Review />
  <Review />
  <Review />
  </section>
  <section className="mt-10">
    <h2 className="text-2xl font-[Raleway] font-semibold ">
      Totebags you may like
    </h2>
    <p className="text-xl text-black/50">
      Similar totebags like the one you selected
    </p>
    <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      <Zero/>
      <Angel />
      <Zero />
      <Angel />
      <Peach />
      <Minimalist />
      <Monocle />
      <Blank />
    </div>
  </section>
</main>
<Footer />
</div>
    </>
  )
}
