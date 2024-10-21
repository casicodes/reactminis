import "./App.css";
import Stepper from "./components/Stepper.jsx";
import FarAway from "./components/FarAway.jsx";
import Accordion from "./components/Accordion.jsx";
import RecordTransaction from "./components/RecordTransaction.jsx";

function App() {
  return (
    <div className="flex flex-col max-w-[540px] mx-auto gap-10">
      <RecordTransaction title="Record your transaction" />
      <FarAway title="Mini app : Pack & track" />
      <Stepper title="React hook in practise" />
      <Accordion title="Accordion using props" />
    </div>
  );
}

export default App;
