import styled from "styled-components";
import NavBar from "../NavBar";
import TopSection from "../TopSection";
import MidSection from "../MidSection";
import BottomSection from "../BottomSection";
import FAQSection from "../FAQSection";
import FooterFiller from "../FooterFiller";
import Footer from "../Footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;

function MainBody() {
  return (
    <Wrapper role={"main"}>
      <NavBar />
      <TopSection />
      <MidSection />
      <BottomSection />
      <FAQSection />
      <FooterFiller />
      <Footer />
    </Wrapper>
  );
}

export default MainBody;
