import React, { useState } from "react";
import styled from "styled-components";
import vid1 from "./video/1.mp4";
import vid2 from "./video/2.mp4";
import th1 from "./th1.jpg";
import th2 from "./th2.jpg";

const images = [];
for (let i = 4; i <= 35; i++) {
  images.push(require(`../public/img/${i}.jpg`));
}

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const MediaContainer = styled.div`
  position: relative;
  width: calc(100% - 100px);
  margin: ${(props) => (props.noMargin ? "0 250px" : "0px 250px")};
  overflow: hidden;
  ${(props) =>
    (props.noMargin && props.index >= 17 && props.index <= 21) ||
    (!props.noMargin && props.index >= 22 && props.index <= 24)
      ? "line-height: 0;"
      : ""};
`;

const Image = styled.img`
  width: 100%;
`;

const Video = styled.video`
  position: absolute;
  top: 46%;
  left: 49.5%;
  transform: translate(-50%, -50%);
  width: 55%;
  height: 47%;
  cursor: pointer;
`;

const Thumbnail = styled.img`
  position: absolute;
  top: 46%;
  left: 49.5%;
  transform: translate(-50%, -50%);
  width: 25%;
  height: 47%;
  cursor: pointer;
  opacity: ${(props) => (props.isHidden ? 0 : 1)};
`;

function App() {
  const [thumbnailStates, setThumbnailStates] = useState([false, false]);

  const handleVideoClick = (index) => {
    const video = document.getElementById(`video${index}`);
    if (video) {
      const updatedStates = [...thumbnailStates];
      updatedStates[index === 29 ? 0 : 1] =
        !thumbnailStates[index === 29 ? 0 : 1];
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
                (index >= 17 && index <= 21) || (index >= 22 && index <= 24)
              }
              index={index}
            >
              <Image src={src} alt={`img${index + 1}`} />
              {(index === 29 || index === 30) && (
                <>
                  <Video loop muted={false} id={`video${index}`}>
                    <source src={index === 29 ? vid1 : vid2} type="video/mp4" />
                  </Video>
                  <Thumbnail
                    src={index === 29 ? th1 : th2}
                    alt={`thumbnail${index + 1}`}
                    isHidden={thumbnailStates[index === 29 ? 0 : 1]}
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
