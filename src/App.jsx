import React from "react"
import HeadLayout from "./components/Head/HeadLayout"
import CardForm from "./components/CardForm"
import { useState } from "react"

const App = () => {
  const [cardName, setCardName] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [cvc, setCvc] = useState("")
  return (
    <div className="w-[100%] font-SpaceGrotesk flex flex-col items-center md:flex-row  md:h-[100svh] md:items-center overflow-hidden">
      <HeadLayout
        cardName={cardName}
        cardNumber={cardNumber}
        month={month}
        year={year}
        cvc={cvc}
      />
      <CardForm
        cardName={cardName}
        cardNumber={cardNumber}
        month={month}
        year={year}
        cvc={cvc}
        setCardName={setCardName}
        setCardNumber={setCardNumber}
        setMonth={setMonth}
        setYear={setYear}
        setCvc={setCvc}
      />
    </div>
  )
}

export default App
