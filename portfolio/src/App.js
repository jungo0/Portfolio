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

  @media (min-width: 600px) {
    width: 100%;
  }

  @media (min-width: 900px) {
    width: 100%;
  }

  @media (min-width: 1200px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
  width: 380px;
  height: 400px; /* 세로가 긴 동영상을 위해 height를 설정 */
  object-fit: cover; /* 비율 유지하지 않음 */
`;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageContainer>
          {images.map((src, index) => (
            <MediaContainer key={index}>
              <Image src={src} alt={`img${index + 1}`} />
              {index === 0 && <Video autoPlay loop muted src={vid1} />}
              {index === 1 && <Video autoPlay loop muted src={vid2} />}
            </MediaContainer>
          ))}
        </ImageContainer>
      </header>
    </div>
  );
}

export default App;
