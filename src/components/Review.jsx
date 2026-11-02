// import React from 'react'
import bag from '../assets/Zero-waste.png';  
import yusuf from '../assets/Yusuf.jpeg';

function Review() {
  return (
    <>
        <div className="rounded-lg p-5 w-full flex gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
              <img
                src={yusuf}
                alt="Yusuf"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div>
                  <p className="font-medium">Yusuf</p>
                  <p className="text-sm text-gray-500">May 15, 2024</p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.363 1.118l1.286 3.958c.3.922-.755 1.688-1.539 1.118l-3.367-2.446a1 1 0 00-1.175 0l-3.367 2.446c-.783.57-1.838-.196-1.538-1.118l1.285-3.958a1 1 0 00-.363-1.118L2.075 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.274-3.958z" />
                  </svg>
                ))}
              </div>

              <p className="text-sm text-gray-600 mb-4">
                Size: 16g | Color: Cream | Design element: Cream
              </p>

              <div className="flex items-start gap-4 mb-4">
                <div className="w-32 h-32 rounded-lg overflow-hidden shrink-0">
                  <img src={bag} alt="Product" className="w-full h-full object-cover" />
                </div>
                <div className="w-32 h-32 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">
                    <path fill="#9ca3af" d="M11 13h-2v2H7v-2H5v-2h2V9h2v2h2zm6" />
                  </svg>
                </div>
              </div>

              <p className="text-l text-gray-500 leading-relaxed font-raleway font-normal ">
                My tote bag exceeded my expectations in every way. The design matched my description perfectly, showcasing outstanding quality and craftsmanship. The exceptional service ensured that I received exactly what I envisioned. I am thoroughly impressed with the stylish and durable tote bag, which has quickly become my go-to accessory for both everyday use and special occasions.
              </p>
            </div>
          </div>
    </>
  )
}

export default Review;