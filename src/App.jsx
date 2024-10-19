import "./App.css";
import Stepper from "./components/Stepper.jsx";
import FarAway from "./components/FarAway.jsx";
import Accordion from "./components/Accordion.jsx";
import RecordTransaction from "./components/RecordTransaction.jsx";

function App() {
  return (
    <div className="flex flex-col max-w-[480px] mx-auto gap-8">
      {/* <RecordTransaction title="Record your transaction" /> */}
      <Accordion title="Accordion using props" />
      <FarAway title="Mini app : Pack & track" />
      <Stepper title="React hook in practise" />
    </div>
  );
}

export default App;
