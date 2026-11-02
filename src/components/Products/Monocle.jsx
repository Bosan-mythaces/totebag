// import React from 'react'
import monocle from "../../assets/Monoclebag.jpg"
import { Link } from "react-router"
function Monocle() {
  return (
    <>
    <Link to="/productdetail" >
  <div>
  <img
    className="aspect-square w-full rounded-sm bg-[#4b5a43] object-cover"
    src={monocle}
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

export default Monocle
