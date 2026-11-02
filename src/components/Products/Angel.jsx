// import React from 'react'
import { Link } from "react-router"
import angel from "../../assets/Angel.jpeg"

function Angel() {
  return (
    <>
    <Link to="/productdetail" >
    <div>
  <img
    className="aspect-square rounded-sm bg-[#2f3b45]"
    src={angel}
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

export default Angel
