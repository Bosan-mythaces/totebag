// import React from 'react'
import happy from "../../assets/Happybag.jpg";
import { Link } from "react-router"


function Happy() {
  return (
    <>
    <Link to="/productdetail" >
    <div>
  <img
    className="aspect-square w-full rounded-sm bg-[#4b5a43] object-cover"
    src={happy}
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

export default Happy
