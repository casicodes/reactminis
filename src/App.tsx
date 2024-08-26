import "./App.css";
import Menu from "./components/Menu";
import Stepper from "./components/Stepper";

function App() {
  return (
    <div className="flex flex-col gap-14 max-w-[450px] mx-auto">
      <Menu title="Conditional rendering" />
      <Stepper title="React hook in practise" />
    </div>
  );
}

export default App;
