import React from "react"
import image from "../../assets/images/bg-card-front.png"
import cardLogo from "../../assets/images/card-logo.svg"

const CardFront = ({ cardName, cardNumber, month, year }) => {
  return (
    <div className="w-[15rem] h-2/3 absolute top-[6.5rem] left-4 md:top-[6.5rem] md:left-28 md:w-[25rem]">
      <img src={image} alt="card-back" />
      <div className="absolute">
        <div className=" relative -top-[7rem] left-4 md:-top-[12rem] md:left-8">
          <img src={cardLogo} alt="" className="h-[20px] md:h-[39px]" />
          <p className="text-white pt-[1.8rem] tracking-[0.2em] font-extralight text-sm md:text-2xl md:pt-[3.5rem]">
            {cardNumber ? (
              <span>{cardNumber}</span>
            ) : (
              <span>0000 0000 0000 0000</span>
            )}
          </p>
          <div className="flex justify-between w-[11.5rem] md:w-[21rem] text-white mt-3">
            <p className="text-xs font-roboto font-extralight md:text-lg">
              {cardName ? cardName : "Jane Appleseed"}
            </p>
            <p className="text-xs font-roboto font-extralight md:text-lg">
              <span>{month ? month : "00"}</span>/
              <span>{year ? year : "00"}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardFront
