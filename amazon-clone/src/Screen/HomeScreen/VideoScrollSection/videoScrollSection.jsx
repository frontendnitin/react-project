import React, { useRef } from "react";
import videoData from "./videoScrollData.json";
import "./videoScrollSection.css";

const VideoScrollSection = () => {
  return (
    <div className="videoScrollMain">
      {videoData.map((item, index) => (
        <div className="videoScrollSection" key={index}>
          <div className="videoScrollHeading">
            <div className="videoScrollTitle">{item.title}</div>
            <div className="videoscollSeeMore">{item.seeMore}</div>
          </div>

          <div className="videoScrollContent">
            {/* Video container */}
            <div className="scrollContainer">
              <VideoPlayer src={item.videoSrc} poster={item.poster} />
            </div>

            {/* Images */}
            <div className="videoscrollImages">
              {item.products.map((details, i) => (
                <div className="productCard" key={i}>
                  <img
                    src={details.src}
                    className="scrollImg"
                    alt={details.name}
                  />
                  <div className="productdetails">{details.name}</div>
                  <div className="productPrice">
                    <span className="newPrice">{details.price}</span>
                    <span className="oldPrice">{details.oldprice}</span>
                  </div>
                </div>
              ))}
            </div>
            <ScrollArrow direction="right" />
          </div>
        </div>
      ))}
    </div>
  );
};

const VideoPlayer = ({ src, poster }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => videoRef.current.play();
  const handleMouseLeave = () => videoRef.current.pause();

  return (
    <div className="scrollContainer">
      <span className="liveBadge">LIVE</span>
      <video
        ref={videoRef}
        className="hoverVideo"
        src={src}
        poster={poster}
        muted
        autoPlay
        controls
        loop
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>

    // <video
    //   ref={videoRef}
    //   className="hoverVideo"
    //   src={src}
    //   poster={poster}
    //   muted
    //   loop
    //   controls
    //   onMouseEnter={handleMouseEnter}
    //   onMouseLeave={handleMouseLeave}
    // />
  );
};

const ScrollArrow = ({ direction }) => {
  return (
    <div className={`srollArrow ${direction}`}>
      {direction === "left" ? "‹" : "›"}
    </div>
  );
};

export default VideoScrollSection;
