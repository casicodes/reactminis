import React, { useState } from "react";

function Stepper({ title }) {
  const content = [
    "Learn react, tailwind and framer motion 💎",
    "Apply for design engineer role 👨‍💻",
    "Earn and grow 🌳",
  ];
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleBack() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <div className="flex flex-col gap-4 text-left bg-white p-4 rounded-md">
      <p className="uppercase text-xs tracking-wider text-gray-400">{title}</p>
      <button
        className="border py-2 px-3 rounded-full hover:bg-slate-50"
        onClick={() => setIsOpen((is) => !is)}
      >
        {isOpen ? "Hide" : "Show"}
      </button>
      {isOpen && (
        <>
          <div className="flex flex-col">
            <div className="flex flex-row justify-start gap-4">
              <div
                className={`${
                  step >= 1 ? "bg-green-600 text-white" : " "
                } h-6 w-6 rounded-full text-center`}
              >
                1
              </div>
              <div
                className={`${
                  step >= 2 ? "bg-green-600 text-white" : " "
                } h-6 w-6 rounded-full text-center`}
              >
                2
              </div>
              <div
                className={`${
                  step >= 3 ? "bg-green-600 text-white" : " "
                } h-6 w-6 rounded-full text-center`}
              >
                3
              </div>
            </div>
            <div className="flex items-center justify-center my-2 border rounded-lg min-h-40">
              <span className="font-mono text-sm">{content[step - 1]}</span>
            </div>
            <div className="flex flex-row justify-between">
              <button
                className="border py-2 px-4 rounded-full hover:bg-slate-50"
                onClick={handleBack}
              >
                Back
              </button>
              <button
                className="border py-2 px-4 rounded-full hover:bg-slate-50"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Stepper;
