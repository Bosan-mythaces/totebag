// import React from 'react'
import Monocle from './Products/Monocle'
import Mmq from './Products/Mmq'
import Happy from './Products/Happy'
import Peach from './Products/Peach'
import Minimalist from './Products/Minimalist'
import Angel from './Products/Angel'
import Zero from './Products/Zero'
import Blank from './Products/Blank'

function Other() {
  return (
   <>
   <section className="mt-10">
  <h2 className="text-2xl font-[Raleway] font-semibold ">Other Stock</h2>
  <p className="text-xl text-black/50">
    These totebags are currently out of stock
  </p>
  <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
    <Monocle />
    <Blank />
    <Mmq />
    <Happy/>
    <Peach />
    <Minimalist />
    <Angel/>
    <Zero />
    <Angel />
    <Peach />
    <Minimalist />
    <Zero />
  </div>
</section>

   </>
  )
}

export default Other
