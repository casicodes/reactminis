import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
const faqs = [
  {
    question: "What is unique about Australia's wildlife?",
    answer:
      "Australia is home to some of the most distinctive wildlife in the world, including the platypus and echidna, which are the only mammals that lay eggs.",
  },
  {
    question: "How large is Australia compared to other countries?",
    answer:
      "Australia is approximately 7.7 million square kilometers, making it the sixth largest country in the world.",
  },
  {
    question: "What are some fun facts about Australian geography?",
    answer:
      "Australia has the world's longest golf course, the Nullarbor Links, which stretches over 1,365 kilometers (850 miles). ",
  },
];

function AccordionContent({ question, answer, num }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="flex justify-between gap-2 hover:cursor-pointer py-3 border-b last:border-b-0"
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className="flex gap-2">
        <p>{num + 1}</p>
        <div>
          <h3>{question}</h3>
          {open && <p className="text-gray-500 pt-1">{answer}</p>}
        </div>
      </div>

      <div>
        {open ? (
          <ChevronUp strokeWidth={1.25} size={24} className="text-gray-400" />
        ) : (
          <ChevronDown strokeWidth={1.25} size={24} className="text-gray-400" />
        )}
      </div>
    </div>
  );
}

function AccordionItem({ data }) {
  return data.map((el, i) => (
    <AccordionContent question={el.question} answer={el.answer} num={i} />
  ));
}

function Accordion({ title }) {
  return (
    <div className="flex flex-col gap-4 text-left bg-white p-4 rounded-md">
      <p className="uppercase text-xs tracking-wider text-gray-400">{title}</p>
      <div>
        <AccordionItem data={faqs} />
      </div>
    </div>
  );
}

export default Accordion;
