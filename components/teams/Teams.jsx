import React from "react";
import Slider from "react-slick";

function Responsive() {
  let arr = [1, 2, 3, 5, 6, 7];
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container mx-auto max-w-screen-xl ">
      <Slider {...settings}>
        {arr.map((team, index) => {
          return (
            <div
              className="w-[300px] h-[250px] p-4 bg-rose-600 border-2 border-white "
              key={index}
            >
              {index}
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Responsive;
