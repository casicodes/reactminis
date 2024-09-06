import "./App.css";
import Stepper from "./components/Stepper";
import FarAway from "./components/FarAway";

function App() {
  return (
    <div className="flex flex-col max-w-[480px] mx-auto gap-8">
      <FarAway title="Mini app : Pack & track" />
      <Stepper title="React hook in practise" />
    </div>
  );
}

export default App;
