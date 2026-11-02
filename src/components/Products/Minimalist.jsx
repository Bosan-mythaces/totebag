// import React from 'react'
import minimalist from "../../assets/Minimalist.jpeg"
import { Link } from "react-router"

function Minimalist() {
  return (
    <>

     <Link to="/productdetail" >
    <div>
  <img
    className="aspect-square rounded-sm bg-[#c9bda5]"
    src={minimalist}
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

export default Minimalist
