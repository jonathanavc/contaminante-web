import React from "react";

// eslint-disable-next-line react/prop-types
function Dots({ activeIndex, onclick, sliderImage }) {
  return (
    <div className="all-dots">
      {/* eslint-disable-next-line react/prop-types */}
      {sliderImage.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
}

export default Dots;
