import styled from "styled-components";
import { Image } from "../MainBody";
import Button from "../Button";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
import { QUERIES } from "../constants";

const Wrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 250px;
  margin: 0 auto;

  @media ${QUERIES.tabletAndSmaller} {
    padding-top: 320px;
    align-items: center;
  }
  @media ${QUERIES.phoneAndSmaller} {
    padding-top: 84px;
  }
`;

const TextWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 16px;
  }
`;

const Title = styled.h1`
  font-size: ${32 / 16}rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-very-dark-blue);

  @media ${QUERIES.tabletAndSmaller} {
    font-size: ${24 / 16}rem;
  }
`;

const Desc = styled.span`
  line-height: ${20 / 16}rem;
  color: var(--color-gray-blue);
  max-width: 540px;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 0px 24px;
    font-size: ${16 / 16}rem;
    line-height: ${24 / 16}rem;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
  padding-top: 54px;
  padding-bottom: 154px;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
  }
`;

const CardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  box-shadow: 0px 10px 10px var(--color-gray-blue);
  width: 280px;
  height: max-content;
  ${(p) => (p.number === 2 ? `margin-top: 32px;` : "")}
  ${(p) => (p.number === 3 ? `margin-top: 66px;` : "")}

  @media ${QUERIES.tabletAndSmaller} {
    margin-top: 0px;
  }
`;

const TopCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 52px;
  background-image: linear-gradient(
    to right,
    var(--color-gray-blue) 20%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 14px 3px;
  background-repeat: repeat-x;
`;

const BrowserContainer = styled.div`
  width: 96px;
  height: 100px;
`;

const CardTitle = styled(Title)`
  font-size: ${20 / 16}rem;
  line-height: ${20 / 16}rem;
`;

const CardDesc = styled.span`
  font-size: ${14 / 16}rem;
  color: var(--color-gray-blue);
`;

const BottomCard = styled.div`
  padding: 24px;
`;

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 1, duration: 0.8, ease: "easeInOut" },
  }),
  hidden: { opacity: 0, y: 50 },
};

function BottomSection() {
  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (visible) => {
    if (visible) {
      setIsVisible(true);
    }
  };

  return (
    <Wrapper>
      <TextWrapper>
        <Title>Download the extension</Title>
        <Desc>
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </Desc>
      </TextWrapper>

      <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
        <CardsWrapper>
          <CardContainer
            custom={0}
            initial="initial"
            animate={isVisible ? "visible" : "hidden"}
            variants={cardVariants}
          >
            <TopCard>
              <BrowserContainer>
                <Image
                  src={"/frontendmentor_15/logo-chrome.svg"}
                  alt={"chrome logo"}
                />
              </BrowserContainer>
              <CardTitle>Add to Chrome</CardTitle>
              <CardDesc>Minimum version 62</CardDesc>
            </TopCard>
            <BottomCard>
              <Button
                color={"blue"}
                style={{
                  fontSize: `${14 / 16}rem`,
                  paddingTop: "18px",
                  paddingBottom: "18px",
                }}
              >
                Add & Install Extension
              </Button>
            </BottomCard>
          </CardContainer>

          <CardContainer
            custom={1}
            initial="initial"
            animate={isVisible ? "visible" : "hidden"}
            variants={cardVariants}
            number={2}
          >
            <TopCard>
              <BrowserContainer>
                <Image
                  src={"/frontendmentor_15/logo-firefox.svg"}
                  alt={"firefox logo"}
                />
              </BrowserContainer>
              <CardTitle>Add to Firefox</CardTitle>
              <CardDesc>Minimum version 55</CardDesc>
            </TopCard>
            <BottomCard>
              <Button
                color={"blue"}
                style={{
                  fontSize: `${14 / 16}rem`,
                  paddingTop: "18px",
                  paddingBottom: "18px",
                }}
              >
                Add & Install Extension
              </Button>
            </BottomCard>
          </CardContainer>

          <CardContainer
            custom={2}
            initial="initial"
            animate={isVisible ? "visible" : "hidden"}
            variants={cardVariants}
            number={3}
          >
            <TopCard>
              <BrowserContainer>
                <Image
                  src={"/frontendmentor_15/logo-opera.svg"}
                  alt={"opera logo"}
                />
              </BrowserContainer>
              <CardTitle>Add to Opera</CardTitle>
              <CardDesc>Minimum version 46</CardDesc>
            </TopCard>
            <BottomCard>
              <Button
                color={"blue"}
                style={{
                  fontSize: `${14 / 16}rem`,
                  paddingTop: "18px",
                  paddingBottom: "18px",
                }}
              >
                Add & Install Extension
              </Button>
            </BottomCard>
          </CardContainer>
        </CardsWrapper>
      </VisibilitySensor>
    </Wrapper>
  );
}

export default BottomSection;
