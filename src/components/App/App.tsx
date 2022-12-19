import { Header } from "../Header/Header";
import { RadioItem } from "../RadioItem/RadioItem";
import appStyles from "./App.module.css";

function App() {
  return (
    <div className={appStyles.page}>
      <Header />
      <RadioItem />
    </div>
  );
}

export default App;
