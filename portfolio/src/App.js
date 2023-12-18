import React from "react";
import styled from "styled-components";
import vid1 from "./video/1.mp4";
import vid2 from "./video/2.mp4";

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
  margin: 0px 250px;
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
function App() {
  const handleVideoClick = (index) => {
    const video = document.getElementById(`video${index}`);
    if (video) {
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
            <MediaContainer key={index} onClick={() => handleVideoClick(index)}>
              <Image src={src} alt={`img${index + 1}`} />
              {(index === 29 || index === 30) && (
                <Video loop muted id={`video${index}`}>
                  <source src={index === 0 ? vid1 : vid2} type="video/mp4" />
                </Video>
              )}
            </MediaContainer>
          ))}
        </ImageContainer>
      </header>
    </div>
  );
}

export default App;
