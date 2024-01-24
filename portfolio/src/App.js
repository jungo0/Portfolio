import React, { useState } from "react";
import styled from "styled-components";
import vid1 from "./video/1.mp4";
import vid2 from "./video/2.mp4";
import th from "./th.png";
const images = [];
for (let i = 1; i <= 35; i++) {
  images.push(require(`../public/img/${i}.jpg`));
}

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const MediaContainer = styled.div`
  position: relative;
  width: calc(100% - 20px);
  margin: ${(props) =>
    props.noMargin
      ? "0px 20px"
      : props.index >= 17 && props.index <= 18
      ? "0px 20px"
      : props.index >= 19 && props.index <= 20
      ? "0px 20px"
      : props.index >= 22 && props.index <= 23
      ? "0px 20px"
      : "0px 20px"};
  overflow: hidden;
  ${(props) =>
    (props.noMargin && props.index >= 17 && props.index <= 18) ||
    (props.noMargin && props.index >= 19 && props.index <= 20) ||
    (props.noMargin && props.index >= 22 && props.index <= 23)
      ? "line-height: 0;"
      : ""};
`;

const Image = styled.img`
  width: 100%;
`;

const Video = styled.video`
  position: absolute;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24%;
  left: 49.5%;
  height: 100%;
  cursor: pointer;

  @media only screen and (max-width: 1768px) {
    width: 24%;
    left: 49.5%;
    height: auto;
  }
`;

const Thumbnail = styled.img`
  position: absolute;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10%;
  height: auto;

  @media only screen and (max-width: 768px) {
    width: 10%;
  }
`;

function App() {
  const [thumbnailStates, setThumbnailStates] = useState([false, false]);

  const handleVideoClick = (index) => {
    const video = document.getElementById(`video${index}`);
    if (video) {
      const updatedStates = [...thumbnailStates];
      updatedStates[index === 32 ? 0 : 1] =
        !thumbnailStates[index === 32 ? 0 : 1];
      setThumbnailStates(updatedStates);

      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <ImageContainer>
          {images.map((src, index) => (
            <MediaContainer
              key={index}
              onClick={() => handleVideoClick(index)}
              noMargin={
                (index >= 19 && index < 20) ||
                (index >= 22 && index < 23) ||
                (index >= 17 && index < 18)
              }
              index={index}
            >
              <Image src={src} alt={`img${index + 1}`} />
              {(index === 32 || index === 33) && (
                <>
                  <Video loop muted={false} id={`video${index}`}>
                    <source src={index === 32 ? vid1 : vid2} type="video/mp4" />
                  </Video>
                  <Thumbnail
                    src={index === 32 ? th : th}
                    alt={`thumbnail${index + 1}`}
                    isHidden={thumbnailStates[index === 32 ? 0 : 1]}
                  />
                </>
              )}
            </MediaContainer>
          ))}
        </ImageContainer>
      </header>
    </div>
  );
}

export default App;
