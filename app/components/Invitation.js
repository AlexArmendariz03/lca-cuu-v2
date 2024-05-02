import React from "react";


export default function Invitation(){
  return(
      <div
        className="relative float-left -mr-[100%] w-full h-[650px] transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
        data-twe-carousel-active
        data-twe-carousel-item
        style={{ backfaceVisibility: "hidden" }}>
        <img
          src="/nestylServicios.webp"
          className="block w-full h-full object-cover"
          alt="..."/>
      </div>
  )
}