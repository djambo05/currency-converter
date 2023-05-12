export const Block = ({ value, currency, onChangeValue, onChangeCurrency }) => {
  const defaultCurrencies = ["RUB", "USD", "EUR", "GBP"];
  return (
    <div className="block">
      <ul className="currencies">
        {defaultCurrencies}
        <li>
          <svg>
            <rect></rect>
            <polygon></polygon>
          </svg>
        </li>
      </ul>
      <input type="number" placeholder={0}></input>
    </div>
  );
};
