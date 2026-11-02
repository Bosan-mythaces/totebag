// import React from 'react'

const CheckoutModal = ({ isOpen, onClose }) => {

    if (!isOpen) return null
  return (
    <>
    <div className="min-h-screen bg-gray-200 font-body text-[#021718]">
  <main className="relative min-h-screen overflow-hidden">
    <div className="p-8 opacity-40 blur-[2px] select-none" aria-hidden="true">
      <div className="flex h-12 max-w-3xl items-center gap-4 rounded bg-gray-300 px-4">
        <span className="h-5 w-5 rounded-full border-2 border-[#021718]" />
        <span className="text-sm">Search products</span>
      </div>
      
      <div className="mt-16 grid max-w-5xl gap-10 md:grid-cols-[1fr_280px]">
        <div className="space-y-10">
          <p className="font-heading text-sm">
            Review your bag and checkout with ease.
          </p>
          <div className="flex items-center justify-between">
            <span className="font-heading text-2xl">Shopping bag</span>
            <span className="text-3xl font-light">₦4,000</span>
            <span className="h-12 w-12 rounded bg-gray-300" />
          </div>
          <div className="flex items-center justify-between">
            <span className="font-heading text-2xl">Shopping bag</span>
            <span className="text-3xl font-light">₦4,000</span>
            <span className="h-12 w-12 rounded bg-gray-300" />
          </div>
        </div>
        <aside className="space-y-5 text-lg">
          <h2 className="font-heading text-2xl">Order Summary</h2>
          <p>Subtotal</p>
          <p>Delivery</p>
          <p>Zip</p>
          <p>Total</p>
        </aside>
      </div>
    </div>
    <div className="fixed inset-0 flex items-center justify-center bg-[#ecf1f1]/90 p-4">
      <section className="w-full max-w-[520px]">
        <header className="text-center">
          <h1 className="font-heading text-4xl font-bold">Payment Method.</h1>
          <p className="mt-3 font-heading text-[15px]">
            Effortlessly manage your purchases and checkout with ease.
          </p>
          <ul className="mt-4 flex items-center justify-center gap-6">
            <li className="text-xl font-extrabold italic tracking-tight">
              VISA
            </li>
            <li className="text-lg font-extrabold tracking-tight">stripe</li>
            <li>
              <button
                type="button"
                className="flex h-10 w-[68px] flex-col items-center justify-center rounded-md bg-[#021718]"
                aria-label="Mastercard"
                aria-pressed="true"
              >
                <span className="flex">
                  <span className="h-5 w-5 rounded-full bg-red-500" />
                  <span className="-ml-2 h-5 w-5 rounded-full bg-orange-400/90" />
                </span>
                <span className="mt-0.5 text-[6px] leading-none text-white">
                  mastercard
                </span>
              </button>
            </li>
            <li>
              <svg
                className="h-7 w-7"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-label="PayPal"
              >
                <path d="M7.5 21 9 12h4.2c3.3 0 5.3-1.7 5.3-4.6C18.5 4.8 16.700 3 13.700 3H7.600L5 21h2.500Z" />
              </svg>
            </li>
            <li>
              <svg
                className="h-7 w-7"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-label="Apple Pay"
              >
                <path d="M16.700 12.600c0-2.200 1.800-3.200 1.900-3.300-1-1.500-2.600-1.700-3.200-1.700-1.400-.1-2.600.8-3.300.8s-1.700-.8-2.800-.8c-1.400 0-2.800.9-3.500 2.200-1.500 2.600-.4 6.500 1.100 8.600.7 1 1.600 2.200 2.700 2.200 1.100 0 1.500-.7 2.800-.7s1.700.7 2.800.7 1.900-1 2.600-2.100c.8-1.200 1.100-2.300 1.200-2.400-.1 0-2.300-.9-2.300-3.500ZM14.600 6.200c.6-.7 1-1.700.9-2.700-.9 0-1.900.6-2.500 1.300-.6.600-1 1.600-.9 2.600 1 .1 1.900-.5 2.500-1.200Z" />
              </svg>
            </li>
          </ul>
        </header>
        <form onSubmit={(e) => e.preventDefault()} className="mt-10 space-y-6" onsubmit="return false">
          <div>
            <label htmlFor="card" className="font-heading text-xl">
              Card Number
            </label>
            <div className="relative mt-3">
              <input
                id="card"
                type="text"
                inputMode="numeric"
                placeholder="5355 0348 5945 5045"
                className="h-[66px] w-full rounded-md border border-gray-300 bg-[#f0ffff] px-5 pr-16 text-[17px] font-light placeholder:text-gray-400 focus:border-[#021718] focus:outline-none"
              />
              <span className="pointer-events-none absolute right-5 top-1/2 flex -translate-y-1/2">
                <span className="h-5 w-5 rounded-full bg-red-500" />
                <span className="-ml-2 h-5 w-5 rounded-full bg-orange-400/90" />
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="cvv" className="font-heading text-xl">
                CVV
              </label>
              <input
                id="cvv"
                type="text"
                inputMode="numeric"
                className="mt-3 h-[66px] w-full rounded-md border border-gray-300 bg-[#f0ffff] px-6 text-[17px] font-light placeholder:text-gray-400 focus:border-[#021718] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="expires" className="font-heading text-xl">
                Expires
              </label>
              <input
                id="expires"
                type="text"
                placeholder="07/06/2024"
                className="mt-3 h-[66px] w-full rounded-md border border-gray-300 bg-[#f0ffff] px-6 text-[17px] font-light placeholder:text-gray-400 focus:border-[#021718] focus:outline-none"
              />
            </div>
          </div>
          <label className="flex cursor-pointer items-center gap-2 text-[17px] font-light text-gray-500">
            <input
              type="checkbox"
              defaultChecked=""
              className="h-5 w-5 accent-[#021718]"
            />
            save my debit card information
          </label>
          <button
            type="submit"
            className="mt-4 h-[62px] w-full rounded-md bg-[#021718] font-heading text-lg font-medium text-white transition hover:bg-black"
          >
            Checkout
          </button>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close checkout"
            className="absolute right-4 top-4 text-xl text-gray-500 hover:text-black"
          >
            &times; 
          </button>
        </form>
      </section>
    </div>
  </main>
</div>

    </>
  )
}
export default CheckoutModal