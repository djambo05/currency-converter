export const Block = ({ value, currency, onChangeValue, onChangeCurrency }) => {
  const defaultCurrencies = ["RUB", "USD", "EUR", "GBP"];
  return (
    <div className="block">
      <ul className="currencies">{defaultCurrencies}</ul>
    </div>
  );
};
