import "./App.css";
import Menu from "./components/Menu";
import Stepper from "./components/Stepper";
import FarAway from "./components/FarAway";

function App() {
  return (
    <div className="flex flex-col gap-14 max-w-[450px] mx-auto">
      <Menu title="Conditional rendering" />
      <Stepper title="React hook in practise" />
      <FarAway title="Mini App" />
    </div>
  );
}

export default App;
