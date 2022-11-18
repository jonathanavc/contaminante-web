import React from "react";

// eslint-disable-next-line react/prop-types
function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {/* eslint-disable-next-line react/prop-types */}
      {sliderImage.map((slide, index) => (
        <div key={index} className={index === activeIndex ? "slides active" : "inactive"}>
          <img className="slide-image" src={slide.urls} alt="" id={slide.id} />
          <h2 className="slide-title" id="titulo_1">
            {slide.title}
          </h2>
          <p className="slide-text" id="texto1">
            {slide.text}
          </p>
          <h3 className="slide-title" id="titulo_2">
            {slide.h2}
          </h3>
          <h4 className="slide-title" id="titulo_3">
            {slide.h3}
          </h4>
          <h5 className="slide-text" id="texto2">
            {slide.h4}
          </h5>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
