// import React from 'react'

import Angel from "./Products/Angel"
import Blank from "./Products/Blank"
import Colourful from "./Products/Colourful"
import Happy from "./Products/Happy"
import Jeans from "./Products/Jeans"
import Minimalist from "./Products/Minimalist"
import Monocle from "./Products/Monocle"
import Peach from "./Products/Peach"
import Zero from "./Products/Zero"

function Available() {
  return (
    <>
    <section className="mt-8">
  <h2 className="text-2xl font-semibold font-[Raleway]">Available Stock</h2>
  <p className="text-xl text-black/50">
    These totebags are currently available for sale
  </p>
  <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
    <Monocle />
    <Colourful />
    <Blank />
    <Happy />
    <Peach />
    <Minimalist />
    <Zero />
    <Angel />
    <Monocle />
    <Blank />
    <Jeans />
    <Happy />
  </div>
</section>

    </>
  )
}

export default Available
