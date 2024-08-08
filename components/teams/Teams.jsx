import React from "react";
import Slider from "react-slick";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";
import teamImage from "../../asserts/upasana.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const teamMembers = [
  { name: "Bella Robbertson", role: "Manager" },
  { name: "David Wilson", role: "Designer" },
  { name: "Amanda Smith", role: "Team Leader" },
  { name: "Chao Kang", role: "Developer" },
  { name: "Sarah Culan", role: "Marketing" },
];

function Responsive() {
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
    <div className="py-12 max-w-screen-xl">
      <h2 className="text-center text-3xl font-bold mb-8">Our Team</h2>
      <h3 className="text-center text-xl font-semibold text-gray-600 mb-12">
        The Best Team
      </h3>
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index} className="px-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg text-center">
              <Image
                src={teamImage}
                alt={member.name}
                className="w-full h-80 min-w-full  p-2 object-contain"
              />
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">{member.name}</h3>
                <p className="text-gray-600 ">{member.role}</p>
                {/* <div className="flex justify-center space-x-4">
                  <FaFacebookF className="text-gray-600" />
                  <FaTwitter className="text-gray-600" />
                  <FaLinkedinIn className="text-gray-600" />
                  <FaInstagram className="text-gray-600" />
                  <FaYoutube className="text-gray-600" />
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Responsive;
