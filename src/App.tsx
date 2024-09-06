import "./App.css";
import Stepper from "./components/Stepper";
import FarAway from "./components/FarAway";

function App() {
  return (
    <div className="flex flex-col gap-14 max-w-[450px] mx-auto">
      <FarAway title="Mini app : Pack & track" />
      <Stepper title="React hook in practise" />
    </div>
  );
}

export default App;
