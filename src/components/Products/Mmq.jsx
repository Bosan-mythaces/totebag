// import React from 'react'
import mmq from "../../assets/MMQ-Tote-Bag.png"
import { Link } from "react-router"

function Mmq() {
  return (
    <>
    <Link to="/productdetail" >
    <div>
  <img
    className="aspect-square rounded-sm bg-[#eae5d8]"
    src={mmq}
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

export default Mmq
