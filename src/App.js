import { Block } from "./Block";
import "./index.scss";

function App() {
  return (
    <div className="App">
      <Block
        value={0}
        currency="RUB"
        onChangeCurrency={(cur) => console.log(cur)}
      ></Block>
      <Block value={0} currency="USD"></Block>
    </div>
  );
}

export default App;
