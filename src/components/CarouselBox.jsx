import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/carouselImages/teenie_1.png";
import image2 from "../assets/carouselImages/teenie_2.png";
import image3 from "../assets/carouselImages/teenie_3.png";
import image4 from "../assets/carouselImages/teenie_4.png";

export default function CarouselBox() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    customPaging: (i) => (
      <div
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          cursor: "pointer",
          backgroundColor: "#d1d1d1",
          transition: "0.5s ease-in-out",
        }}
      />
    ),
    appendDots: (dots) => (
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "6px",
          padding: 0,
          listStyle: "none",
        }}
      >
        {dots.map((dot, index) => (
          <li
            onClick={() => sliderRef.current.slickGoTo(index)}
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: dot.props.className.includes("slick-active")
                  ? "8px"
                  : "6px",
                height: dot.props.className.includes("slick-active")
                  ? "8px"
                  : "6px",
                borderRadius: "50%",
                cursor: "pointer",
                backgroundColor: dot.props.className.includes("slick-active")
                  ? "#FFBEEF"
                  : "#FFE2F8",
                transition: "background-color 0.3s ease",
              }}
            />
          </li>
        ))}
      </ul>
    ),
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 6500,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <Slider {...settings} ref={sliderRef} className="min-h-">
      <div className="mb-1">
        <img className="w-full lg:h-144 object-cover" src={image1} alt="" />
      </div>
      <div>
        <img className="w-full lg:h-144 object-cover" src={image2} alt="" />
      </div>
      <div>
        <img className="w-full lg:h-144 object-cover" src={image3} alt="" />
      </div>
      <div>
        <img className="w-full lg:h-144 object-cover" src={image4} alt="" />
      </div>
    </Slider>
  );
}
