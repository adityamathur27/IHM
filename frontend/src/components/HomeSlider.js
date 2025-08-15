import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import AdmissionStarburst from "./AdmissionButton"; // <-- import your button
import img1 from "../assets/images/home page photo/1(a).jpeg";
import img2 from "../assets/images/home page photo/2.jpeg";
import img3 from "../assets/images/home page photo/3.jpeg";
import img4 from "../assets/images/home page photo/4.jpeg";
import img5 from "../assets/images/Front_View.jpg";
import img6 from "../assets/images/Side_View.jpg";
import img7 from "../assets/images/lecture.jpg";
import img8 from "../assets/images/Mess.jpg";
import "./HomeSlider.css";

const images = [
  { src: img1, caption: "Campus View Front" },
  { src: img2, caption: "Campus View Side" },
  { src: img3, caption: "Lab Session 1" },
  { src: img4, caption: "Lab Session 2" },
  { src: img5, caption: "Lecture Hall" },
  { src: img6, caption: "Mess Hall" },
  { src: img7, caption: "Lecture Session" },
  { src: img8, caption: "Cafeteria" }
];

function HomeSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      5500
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-wrapper">
      {/* Starburst Button Overlay */}
      <AdmissionStarburst />

      <Carousel activeIndex={index} onSelect={setIndex} fade interval={null}>
        {images.map((img, idx) => (
          <Carousel.Item key={idx}>
            <div className="slider-image-wrapper">
              <img className="slider-image" src={img.src} alt={img.caption} />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default HomeSlider;
