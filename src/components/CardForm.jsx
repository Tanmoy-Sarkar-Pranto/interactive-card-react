import React from "react"
import { useState } from "react"
import Success from "./Success"

const CardForm = ({
  cardName,
  cardNumber,
  month,
  year,
  cvc,
  setCardName,
  setCardNumber,
  setMonth,
  setYear,
  setCvc,
}) => {
  const [error, setError] = useState({
    name: false,
    number: false,
    month: false,
    year: false,
    cvc: false,
  })

  const [allOk, setAllOk] = useState(false)

  const handleNumberChange = (event) => {
    const input = event.target.value.replace(/\D/g, "") // Remove non-numeric characters
    let formattedInput = ""
    for (let i = 0; i < input.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedInput += " " // Add space after every 4 characters
      }
      formattedInput += input[i]
    }
    setCardNumber(formattedInput.trim()) // Remove leading/trailing spaces
  }

  const handleSubmit = () => {
    // console.log(cardName.length)
    if (cardName.length < 1) {
      setError((prevState) => ({ ...prevState, name: true }))
    } else {
      setError((prevState) => ({ ...prevState, name: false }))
    }
    if (cardNumber.length < 1 || cardNumber.length != 19) {
      setError((prevState) => ({ ...prevState, number: true }))
    } else {
      setError((prevState) => ({ ...prevState, number: false }))
    }
    if (month.length < 1 || parseInt(month) > 12) {
      setError((prevState) => ({ ...prevState, month: true }))
    } else {
      setError((prevState) => ({ ...prevState, month: false }))
    }
    if (year.length < 1) {
      setError((prevState) => ({ ...prevState, year: true }))
    } else {
      setError((prevState) => ({ ...prevState, year: false }))
    }
    if (cvc.length < 1) {
      setError((prevState) => ({ ...prevState, cvc: true }))
    } else {
      setError((prevState) => ({ ...prevState, cvc: false }))
    }
    setAllOk(true)
  }

  if (
    error.name == false &&
    error.number == false &&
    error.month == false &&
    error.year == false &&
    error.cvc == false &&
    allOk == true
  ) {
    return (
      <div className="md:pl-96 md:w-[50rem] pb-12 pt-4">
        <Success
          setError={setError}
          setAllOk={setAllOk}
          setCardName={setCardName}
          setCardNumber={setCardNumber}
          setMonth={setMonth}
          setYear={setYear}
          setCvc={setCvc}
        />
      </div>
    )
  }
  return (
    <div className="pt-20 w-[350px] pl-4 z-50 md:pl-96 md:w-[50rem] pb-12">
      <form>
        <div>
          <label htmlFor="name" className="uppercase font-medium text-sm">
            cardholder name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={cardName}
            maxLength={20}
            onChange={(e) => setCardName(e.target.value)}
            placeholder="e.g. Jane Appleseed"
            className="outline-none border pl-3 pt-1 pb-1 pr-3 border-zinc-200 w-[90%]"
          />
          {error.name && (
            <p className="text-xs text-rose-500">can't be blank</p>
          )}
        </div>
        <div className="mt-8">
          <label htmlFor="num" className="uppercase font-medium text-sm">
            card number
          </label>
          <input
            type="text"
            name="number"
            id="num"
            placeholder="e.g. 1234 5678 9012 3456"
            value={cardNumber}
            onChange={handleNumberChange}
            maxLength={19} // Allow maximum of 16 digits and 3 spaces
            className="style-reset outline-none border pl-3 pt-1 pb-1 pr-3 border-zinc-200 w-[90%]"
          />
          {error.number && (
            <p className="text-xs text-rose-500">can't be blank</p>
          )}
        </div>
        <div className="mt-8 flex">
          <div className="flex flex-col gap-y-2">
            <label htmlFor="date" className="uppercase font-medium text-sm">
              exp. date (mm/yy)
            </label>
            <div>
              <input
                type="text"
                pattern="\d*"
                maxLength={2}
                name="date"
                id="date"
                placeholder="MM"
                value={month}
                onChange={(e) => {
                  const input = e.target.value.replace(/\D/g, "") // Remove non-numeric characters
                  if (input.length <= 2 && input <= 12) {
                    // Limit input to 2 digits
                    setMonth(input)
                  }
                }}
                className="style-reset outline-none border pl-3 pt-1 pb-1 pr-3 border-zinc-200 w-[45%]"
              />

              <input
                type="text"
                pattern="\d*"
                maxLength={2}
                name="year"
                id="year"
                placeholder="YY"
                value={year}
                onChange={(e) => {
                  const input = e.target.value.replace(/\D/g, "") // Remove non-numeric characters
                  if (input.length <= 2) {
                    // Limit input to 2 digits
                    setYear(input)
                  }
                }}
                className="style-reset outline-none border pl-3 pt-1 pb-1 pr-3 border-zinc-200 w-[45%]"
              />
            </div>
            {(error.month || error.year) && (
              <p className="text-xs text-rose-500">can't be blank</p>
            )}
          </div>
          <div className="flex flex-col gap-y-2 mr-20">
            <label htmlFor="cvc" className="uppercase font-medium text-sm">
              cvc
            </label>
            <input
              type="text"
              pattern="\d*"
              maxLength={3}
              name="cvc"
              id="cvc"
              placeholder="e.g. 123"
              value={cvc}
              onChange={(e) => {
                const input = e.target.value.replace(/\D/g, "") // Remove non-numeric characters
                if (input.length <= 3) {
                  // Limit input to 2 digits
                  setCvc(input)
                }
              }}
              className="style-reset outline-none border pl-3 pt-1 pb-1 pr-3 border-zinc-200 w-[150%]"
            />
            {error.cvc && (
              <p className="text-xs text-rose-500">can't be blank</p>
            )}
          </div>
        </div>
      </form>
      <button
        className="h-[3rem] w-[89%] rounded-lg mt-8 bg-slate-900 text-white hover:bg-rose-500 focus-within:bg-rose-500 outline-none"
        type="submit"
        onClick={handleSubmit}
      >
        Confirm
      </button>
    </div>
  )
}

export default CardForm
