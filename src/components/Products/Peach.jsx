// import React from 'react'
import peach from "../../assets/Peachbasket.jpeg"
import { Link } from "react-router"

function Peach() {
  return (
    <>
    <Link to="/productdetail" >
    <div>
  <img
    className="aspect-square rounded-sm bg-[#f4f0e6]"
    src={peach}
    alt=""
  />
  <div className="mt-1 flex justify-between text-sm">
    <span>Chinons</span>
    <span className="text-black/50">₦5,000</span>
  </div>
</div>
</Link>
    </>
  )
}

export default Peach
