import React from "react"
import CardBack from "./CardBack"
import CardFront from "./CardFront"
import "./HeadLayout.css"

const HeadLayout = ({ cardName, cardNumber, month, year, cvc }) => {
  return (
    <div className=" w-[350px] h-[200px] bg-image relative md:h-[100svh] md:w-[400px]">
      <CardBack cvc={cvc} />
      <CardFront
        cardName={cardName}
        cardNumber={cardNumber}
        month={month}
        year={year}
      />
    </div>
  )
}

export default HeadLayout
