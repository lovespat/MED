import React from "react";
import Slider from "react-slick";

import LeftArrow from "./left-arrow.svg"
import RightArrow from "./right-arrow.svg"

const cardsArray5 = [
  { title: "Bibendum at",  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis gravida neque convallis a cras semper. In dictum non consectetur a." },
  { title: "Bibendum at",  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis gravida neque convallis a cras semper. In dictum non consectetur a." },
  { title: "Bibendum at",  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis gravida neque convallis a cras semper. In dictum non consectetur a." },
  { title: "Bibendum at",  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis gravida neque convallis a cras semper. In dictum non consectetur a." },
  { title: "Bibendum at",  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis gravida neque convallis a cras semper. In dictum non consectetur a." },
  { title: "Bibendum at",  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis gravida neque convallis a cras semper. In dictum non consectetur a." }
]



export default function Card({ title, data }) {

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  return (
    <div className="card__container">
      <h1>{title}</h1>
      <Slider {...settings} className="card__container--inner">
        {data.map((item, index) => {
          return (
            <div
              className="card__container--inner--card"
              key={index}>
              <img src={item.url} alt="hero_img" />
              {/* <div className="card__container--inner--card--date_time">
                  <img src="https" alt="time" />
                  <p>4D-5D</p>

                  <img src="h" alt="location" style={{marginLeft:10}}/>
                  <p>Delhi</p>
                </div> */}

                
              <h2>{item.name}</h2>
              <h3>{item.description}</h3>
            </div>
          );
        })}
      </Slider>
    </div>

  );
}
