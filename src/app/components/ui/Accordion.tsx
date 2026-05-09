"use client";
import { useState } from "react";

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export default function Accordion({ items }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="mx-auto grid w-full max-w-2xl grid-cols-1 gap-3 p-2 md:max-w-5xl md:grid-cols-2 md:gap-4 md:items-start lg:w-[75%]">
      {items.map((item, index) => (
        <div
          key={index}
          className="min-w-0 rounded-xl border border-[#dceae7] bg-white shadow-sm"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex items-center justify-between px-4 py-5 md:py-6 md:px-6 transition-colors rounded-xl group focus:outline-none"
            aria-expanded={open === index}
            aria-controls={`accordion-content-${index}`}
          >
            <span className={`text-base md:text-lg font-semibold transition-colors text-start flex-1 ${open === index ? "text-[#46B2A7]" : "text-[#0f2e2c]"}`}>
              {item.title}
            </span>
            <span
              className={`ml-5 min-w-[3.2rem] flex items-center justify-center rounded-full
                transition-all duration-300 text-2xl md:text-3xl font-bold
                ${open === index
                  ? "text-[#46B2A7]"
                  : "text-[#0f2e2c]"
                }
                group-hover:text-[#46B2A7]
              `}
            >
              {open === index ? "−" : "+"}
            </span>
          </button>
          <div
            id={`accordion-content-${index}`}
            className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none ${
              open === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
            aria-hidden={open !== index}
          >
            <div className="min-h-0 overflow-hidden">
              <div
                className={`px-4 pb-4 pt-1 text-start text-sm leading-relaxed text-[#6b7a7a] md:px-6 md:pb-6 md:pt-2 md:text-base ${
                  open === index ? "bg-[#f8fbfa]" : ""
                }`}
              >
                {item.content}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
