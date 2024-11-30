import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <Slider {...settings} ref={sliderRef}>
      <div className="mb-1">
        <img
          className="w-full lg:h-144 object-cover"
          src="https://images.pexels.com/photos/26537680/pexels-photo-26537680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div>
        <img
          className="w-full lg:h-144 object-cover"
          src="https://images.pexels.com/photos/20267145/pexels-photo-20267145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div>
        <img
          className="w-full lg:h-144 object-cover"
          src="https://images.pexels.com/photos/28588388/pexels-photo-28588388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div>
        <img
          className="w-full lg:h-144 object-cover"
          src="https://images.pexels.com/photos/29207369/pexels-photo-29207369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div>
        <img
          className="w-full lg:h-144 object-cover"
          src="https://images.pexels.com/photos/23656764/pexels-photo-23656764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </Slider>
  );
}
