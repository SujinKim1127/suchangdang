import "./App.css";
import styled from "styled-components";
import first from "./images/001.png";
import second from "./images/002.png";
import third from "./images/003.png";
import fourth from "./images/004.png";

function App() {
  return (
    <Wrapper>
      <Img src={first} />
      <Img src={second} />
      <Img src={third} />
      <Img src={fourth} />
    </Wrapper>
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

export default App;
