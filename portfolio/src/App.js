import React from "react";
import styled from "styled-components";
import vid1 from "./video/1.mov";
import vid2 from "./video/2.mov";

const images = [];
for (let i = 1; i <= 35; i++) {
  images.push(require(`../public/img/${i}.png`));
}

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const MediaContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 15px;
`;

const Image = styled.img`
  width: 100%;
`;

const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
  max-width: 350px;
  max-height: 350px;
  cursor: pointer;

  @media (max-width: 600px) {
    max-width: 50%;
  }
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
            <MediaContainer key={index}>
              <Image src={src} alt={`img${index + 1}`} />
              {(index === 0 || index === 1) && (
                <Video
                  loop
                  muted
                  id={`video${index}`}
                  onClick={() => handleVideoClick(index)}
                >
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
