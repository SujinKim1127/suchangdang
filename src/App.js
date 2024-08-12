import "./App.css";
import styled from "styled-components";
import first from "./images/001.png";
import second from "./images/002.png";
import third from "./images/003.png";
import fourth from "./images/004.png";
import six from "./images/006.png";
import Map from "./Map";
import { Container as MapDiv, NavermapsProvider } from "react-naver-maps";

function App() {
  return (
    <NavermapsProvider ncpClientId={process.env.REACT_APP_NAVER_CLIENT_ID}>
      <Wrapper>
        <Img src={first} />
        <Img src={second} />
        <Img src={third} />
        <Img src={fourth} />
        <WhiteBox>
          <MapWrapper>
            <MapDiv
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <Map />
            </MapDiv>
          </MapWrapper>
          <PosText>서울 강남구 학동로82길 17 금은빌딩 1층</PosText>
        </WhiteBox>
        <Img src={six} />
      </Wrapper>
    </NavermapsProvider>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #b8e9ff;
  width: 100%;
`;

const Img = styled.img`
  @media screen and (min-width: 780px) {
    width: 700px;
  }

  width: 90%;
`;

const WhiteBox = styled.div`
  background-color: white;
  @media screen and (min-width: 780px) {
    width: 700px;
  }
  padding-bottom: 30px;
  width: 90%;
`;

const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media screen and (min-width: 780px) {
    width: 400px;
    height: 300px;
  }

  width: 60%;
  height: 150px;
`;

const PosText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-weight: 600;
`;

export default App;
