// import React from 'react'

import Angel from "./Products/Angel"
import Blank from "./Products/Blank"
import Jeans from "./Products/Jeans"
import Minimalist from "./Products/Minimalist"
import Mmq from "./Products/Mmq"
import Monocle from "./Products/Monocle"
import Peach from "./Products/Peach"
import Zero from "./Products/Zero"

function Extra() {
  return (
    <>
    <section className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 mt-9">
  <Monocle />
  <Blank />
  <Mmq />
  <Jeans />
  <Peach />
  <Angel />
  <Minimalist />
  <Zero />
</section>

    </>
  )
}

export default Extra
