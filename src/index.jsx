import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./KmkCarousel.scss";

// Possibly color detection ...?
// const colorSchemas = [
//   {
//     Vibrant: "#7a4426",
//     Muted: "#7b9eae",
//     DarkVibrant: "#348945",
//     DarkMuted: "#141414",
//     LightVibrant: "#f3ccb4"
//   }
// ];

const propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.shape({
        image: PropTypes.string,
        header: PropTypes.string,
        description: PropTypes.string,
        href: PropTypes.string,
        github: PropTypes.string
      })
    })
  )
};

const defaultProps = {
  items: [
    {
      image: "",
      header: "",
      description: "",
      github: "",
      href: ""
    }
  ]
};

const slidePropTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    header: PropTypes.string,
    description: PropTypes.string
  }),
  slideNo: PropTypes.number,
  slideWidth: PropTypes.number,
  maxSlides: PropTypes.number,
  buttonStyle: PropTypes.object
};

const slideDefaultProps = {
  data: {
    image: "",
    header: "",
    description: "",
    href: "",
    github: ""
  },
  slideNo: 0,
  slideWidth: 0,
  maxSlides: 0,
  buttonStyle: { backgroundColor: "#FF3333", color: "white" }
};

const KmkCarouselSlide = ({
  data,
  slideNo,
  activeSlideIdx,
  slideWidth,
  maxSlides,
  buttonStyle
}) => {
  const checkActive = () => {
    // THE slide
    if (activeSlideIdx === slideNo) {
      return 4;
    }
    // active is 0
    if (activeSlideIdx === 0) {
      if (slideNo === 1) {
        return 2;
      }
      if (slideNo === maxSlides) {
        return 1;
      }
    }
    if (activeSlideIdx === maxSlides && slideNo === 0) {
      return 2;
    }
    if (activeSlideIdx - 1 === slideNo || activeSlideIdx + 1 === slideNo)
      return 1;
    return 0;
  };

  const handleLink = e => {
    window.open(e.target.getAttribute("link"));
  };
  return (
    <div
      className="kmkcarousel-slide"
      id={`slide-${slideNo}`}
      style={{
        zIndex: `${checkActive()}`,
        height: "100%",
        transform: `translateX(${
          (activeSlideIdx + maxSlides) % (maxSlides + 1) === slideNo
            ? -1 * (slideNo + 1) * slideWidth
            : slideNo < activeSlideIdx
            ? (maxSlides - activeSlideIdx + 1) * slideWidth
            : -1 * activeSlideIdx * slideWidth
        }px)`,
        transition: "transform ease-out 0.45s"
      }}
    >
      <section className="kmkcarousel-slide-content-wrapper">
        <section className="kmkcarousel-slide-content">
          <h4>{data.header}</h4>
          <p>{data.description}</p>
          <span className="kmkcarousel-slide-content-meta">{data.meta}</span>
          <section className="kmkcarousel-slide-content-links">
            {data.href ? (
              <span link={data.href} onClick={handleLink} style={buttonStyle}>
                Link
              </span>
            ) : null}
            {data.github ? (
              <span link={data.github} onClick={handleLink} style={buttonStyle}>
                Github
              </span>
            ) : null}
          </section>
        </section>
      </section>
      <aside className="kmkcarousel-slide-overlay" />
      <figure
        className="kmkcarousel-slide-background"
        style={{
          backgroundImage: `url(${data.image})`
        }}
      />
    </div>
  );
};

const KmkCarousel = props => {
  // console.log(document.getElementsByClassName("kmkcarousel-slide").length);
  const [initSlideLength, setInitSlideLength] = useState(0);
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  useEffect(() => {
    // Component did mount
    setInitSlideLength(
      document.getElementsByClassName("kmkcarousel-slide").length - 1
    );
    setSlideWidth(getSlideWidth());
    window.addEventListener("resize", onSlideResize);
    // Component did unmount
    return () => {
      window.removeEventListener("resize", onSlideResize);
    };
  }, []);

  const onSlideResize = () => {
    setSlideWidth(getSlideWidth());
  };

  const getSlideWidth = () => {
    return document.querySelector(".kmkcarousel-slide").getBoundingClientRect()
      .width;
  };

  const handleLeftNav = e => {
    if (activeSlideIdx === 0) {
      // Reset to the end
      setActiveSlideIdx(initSlideLength);
    } else {
      // Shift left
      setActiveSlideIdx(activeSlideIdx - 1);
    }
  };
  const handleRightNav = e => {
    if (activeSlideIdx === initSlideLength) {
      // Reset
      setActiveSlideIdx(0);
    } else {
      // Shift Right
      setActiveSlideIdx(activeSlideIdx + 1);
    }
  };

  return (
    <section className="kmkcarousel-container kmkcarousel-container-lg">
      <span className="kmkcarousel-left" onClick={handleLeftNav}>
        <span className="transition-left">
          <div className="kmkArrowLeft" />
        </span>
      </span>
      <section className="kmkcarousel-contents">
        {props.items.map((item, index) => {
          return (
            <KmkCarouselSlide
              key={index}
              activeSlideIdx={activeSlideIdx}
              maxSlides={initSlideLength}
              slideWidth={slideWidth}
              slideNo={index}
              data={item}
            />
          );
        })}
      </section>
      <span className="kmkcarousel-right" onClick={handleRightNav}>
        <span className="transition-right">
          <div className="kmkArrowRight" />
        </span>
      </span>
    </section>
  );
};

KmkCarouselSlide.slidePropTypes = slidePropTypes;
KmkCarouselSlide.defaultProps = slideDefaultProps;

KmkCarousel.propTypes = propTypes;
KmkCarousel.defaultProps = defaultProps;

export default KmkCarousel;
