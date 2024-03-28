import React from "react"
import image from "../assets/images/icon-complete.svg"

const Success = ({
  setError,
  setAllOk,
  setCardName,
  setCardNumber,
  setMonth,
  setYear,
  setCvc,
}) => {
  const handleClick = () => {
    setError({
      name: false,
      number: false,
      month: false,
      year: false,
      cvc: false,
    })
    setAllOk(false)
    setCardName("")
    setCardNumber("")
    setMonth("")
    setYear("")
    setCvc("")
  }
  return (
    <div className="flex flex-col w-[350px] h-[25rem] md:h-[40rem] justify-center items-center ">
      <img src={image} alt="success" className="h-[5rem] mb-8 md:h-[7rem]" />
      <p className="font-roboto text-2xl font-medium uppercase mb-2 md:text-4xl">
        Thank You!
      </p>
      <p className="font-light font-roboto md:text-lg">
        We've added your card details
      </p>
      <button
        className="h-[3rem] w-[89%] rounded-lg mt-8 bg-slate-900 text-white hover:bg-rose-500 focus-within:bg-rose-500 outline-none"
        type="submit"
        onClick={handleClick}
      >
        Continue
      </button>
    </div>
  )
}

export default Success
