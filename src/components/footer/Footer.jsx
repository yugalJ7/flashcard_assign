import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const faqData = [
  { id: 1, text: "Can education flashcards be used for all age groups?" },
  { id: 2, text: "How do education flashcards work?" },
  { id: 3, text: "Can education flashcards be used for test preparation" },
];

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };
  return (
    <section className="py-24">
      <div className="ml-1 sm:ml-14 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-4xl font-vietnam text-left font-bold  leading-[3.25rem]">
            FAQ
          </h2>
        </div>
        <div>
          {faqData.map((items) => {
            return (
              <div
                key={items.id}
                className="accordion mb-6 py-4 px-6 border-2 border-solid border-[#051883] transition-all duration-500 rounded-2xl w-3/4"
              >
                <button
                  onClick={() => handleClick(items.id)}
                  className="inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left"
                >
                  <h5>{items.text}</h5>
                  <KeyboardArrowDownIcon />
                </button>
                {items.id === activeIndex && (
                  <div className="w-full px-0" style={{ maxHeight: 250 }}>
                    <p className="text-base text-gray-900 leading-6">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Necessitatibus, neque?
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Footer;
