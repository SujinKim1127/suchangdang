import "./App.css";
import styled from "styled-components";
import first from "./images/001.png";
import second from "./images/002.png";
import third from "./images/003.png";
import fourth from "./images/004.png";
import six from "./images/006.png";
import Map from "./Map";
import { Container as MapDiv, NavermapsProvider } from "react-naver-maps";
import { Icon } from "@iconify/react/dist/iconify.js";

function App() {
  return (
    <NavermapsProvider ncpClientId={process.env.REACT_APP_NAVER_CLIENT_ID}>
      <Wrapper>
        <Img src={first} />
        <Img src={second} />
        <Img src={third} />
        <Img src={fourth} />
        <FunctionWrapper>
          <CallBox>
            <CallTitle>전화 문의</CallTitle>
            <TelAtag href="tel:02-6953-7550">02-6953-7550</TelAtag>
          </CallBox>
          <ReserveBox>
            <ReserveTitle>온라인 예약</ReserveTitle>
            <ReserveBtn>바로가기</ReserveBtn>
          </ReserveBox>
        </FunctionWrapper>
        <WhiteBox>
          <Headline1>
            <Icon
              icon="gis:poi-alt"
              width="28"
              height="28"
              style={{ color: "#19a8f1", marginBottom: "5px" }}
            />
            오시는 길
          </Headline1>
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

const FunctionWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  width: 90%;
  padding-bottom: 20px;
  @media screen and (min-width: 780px) {
    width: 700px;
  }
`;

const CallBox = styled.div`
  background-color: #a1e1ff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 5px;
  width: 40%;
  height: 44px;
`;

const CallTitle = styled.span`
  font-weight: 700;
  display: flex;
  justify-content: center;
`;

const TelAtag = styled.a`
  font-weight: 700;
  display: flex;
  justify-content: center;
  margin-top: 5px;
  text-decoration: none;
  color: black;
`;

const ReserveBox = styled.div`
  background-color: #2cbcff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  width: 40%;
  justify-content: center;
  align-items: center;
  height: 44px;
`;

const ReserveTitle = styled.span`
  color: white;
  font-weight: 700;
  display: flex;
  justify-content: center;
`;

const ReserveBtn = styled.button`
  color: white;
  background-color: transparent;
  border: 2px solid white;
  padding: 2px 6px;
  font-weight: 700;
  width: 80px;
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;

const Headline1 = styled.h1`
  color: #19a8f1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
