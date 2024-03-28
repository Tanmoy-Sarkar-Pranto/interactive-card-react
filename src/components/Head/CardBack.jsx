import React from "react"
import image from "../../assets/images/bg-card-back.png"

const CardBack = ({ cvc }) => {
  // console.log(cvc)
  return (
    <div className="w-[15rem] h-2/3 absolute top-8 left-20 md:w-[25rem] md:top-[23rem] md:left-[13rem]">
      <img src={image} alt="card-back" />
      <div className="relative text-white">
        <p className="absolute -top-[75px] right-8 text-[10px] font-light md:-top-[129px] md:text-[1.5rem] md:right-12">
          {cvc.length > 0 ? <span>{cvc}</span> : <span>000</span>}
        </p>
      </div>
    </div>
  )
}

export default CardBack
