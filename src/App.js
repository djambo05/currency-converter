import { useEffect, useState } from "react";
import { Block } from "./Block";
import "./index.scss";

function App() {
  const [fromCurrency, setFromCurrency] = useState("RUB");
  const [toCurrency, setToCurrency] = useState("USD");
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);
  const [rates, setRates] = useState({});

  const onChangeFromPrice = (value) => {
    setFromPrice(value);
  };

  const onChangeToPrice = (value) => {
    setToPrice(value);
  };

  // useEffect(() => {
  //   fetch("https://cdn.cur.su/api/latest.json")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setRates(json.rates);
  //       console.log(json.rates);
  //     })
  //     .catch((err) => {
  //       console.warn(err);
  //       alert("Не удалось получить информацию");
  //     });
  // });
  return (
    <div className="App">
      <Block
        value={fromPrice}
        currency={fromCurrency}
        onChangeValue={onChangeFromPrice}
        onChangeCurrency={setFromCurrency}
      />
      <Block
        value={toPrice}
        currency={toCurrency}
        onChangeValue={onChangeToPrice}
        onChangeCurrency={setToCurrency}
      />
    </div>
  );
}

export default App;
