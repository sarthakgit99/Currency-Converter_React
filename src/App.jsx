import { useState } from "react";
import Input from "./Components/input";
import useCurrency from "./Hooks/currencyInfo";
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convAmount, setConvAmount] = useState(0);
  const currencyInfo = useCurrency(from);
  const options = Object.keys(currencyInfo);
  const Swap = () => {
    setFrom(to);
    setTo(from);
    setConvAmount(amount);
    setAmount(convAmount);
  };
  const Convert = () => {
    setConvAmount(currencyInfo[to] * amount);
  };
  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VycmVuY3l8ZW58MHx8MHx8fDA%3D")`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-xl p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                Convert();
              }}
            >
              <div className="w-full mb-1">
                <Input
                  label="From"
                  amount={amount}
                  currencyOption={options}
                  onCurrencyChange={(currency) => setAmount(amount)}
                  onAmountChange={(amount)=>{setAmount(amount)}}
                  selectCurrency={from}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-500 text-white px-4 py-2 hover:font-semibold hover:text-orange-100  hover:bg-purple-900"
                  onClick={Swap}
                >
                  Swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <Input
                  label="To"
                  amount={convAmount}
                  currencyOption={options}
                  onCurrencyChange={(currency)=>setTo(currency)}
                  selectCurrency={from}
                  amountDisable
                />
                <button className="w-full bg-blue-500 text-white px-4 py-3.5 rounded-lg mt-3 hover:font-semibold hover:text-orange-100 hover:bg-purple-900">Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
