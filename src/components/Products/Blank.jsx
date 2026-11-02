// import React from 'react'
import { Link } from "react-router"
import image from "../../assets/Images (1).jpeg"

function Blank() {
  return (
    <>
    <Link to="/productdetail" >
    <div>
  <img
    className="aspect-square rounded-sm bg-[#f1ecdf]"
    src={image}
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

export default Blank
