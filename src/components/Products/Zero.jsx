// import React from 'react'
import zero from "../../assets/Zero-waste.png"
import { Link } from "react-router"

function Zero() {
  return (
    <>
    <Link to="/productdetail" >
    <div>
  <img
    className="aspect-square rounded-sm bg-[#eae5d8]"
    src={zero}
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

export default Zero
