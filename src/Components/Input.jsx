  import React from "react";
  import { useId } from "react";
  const Input = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
  }) => {
    const amountInputId=useId();
    return (
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-1/2">
          <label className="text-black-/40 mb-2 inline-block" htmlFor={amountInputId}>{label}</label>
          <input
            className="outline-none w-full bg-transparent py-1.5"
            type="number"
            placeholder="Amount"
            disabled={amountDisable}
            value={amount} 
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
            id={amountInputId}
          />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="w-full text-40-black/40 mb-2">Currency Type</p>
          <select
            className="rounded-lg px-1 py-1 bg-gray bg-gray-100 cursor-pointer outline none"
            value={selectCurrency}
            onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisable}
          >
            {currencyOption.map((currency)=>(
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>
      </div>
    );
  };
  export default Input;
