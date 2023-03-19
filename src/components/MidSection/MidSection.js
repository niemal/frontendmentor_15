import styled, { keyframes, css } from "styled-components";
import { useState, useEffect } from "react";
import { BoxDecor } from "../TopSection";
import { Image } from "../MainBody";
import Button from "../Button";
import { hoverSupported } from "../hoverSupported";
import { QUERIES } from "../constants";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Container = styled.section`
  padding-top: 210px;
  position: relative;
  margin: 0 auto;
  max-width: 1100px;
  width: 100%;

  @media ${QUERIES.tabletAndSmaller} {
    padding-top: 142px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 12px;
  }
`;

const Title = styled.h1`
  font-size: ${32 / 16}rem;
  line-height: ${36 / 16}rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-very-dark-blue);

  @media ${QUERIES.tabletAndSmaller} {
    font-size: ${24 / 16}rem;
  }
`;

const Desc = styled.span`
  color: var(--color-gray-blue);
  line-height: ${27 / 16}rem;
  text-align: center;

  @media ${QUERIES.tabletAndSmaller} {
    font-size: ${16 / 16}rem;
    line-height: ${24 / 16}rem;
    padding: 0px 24px;
  }
`;

const TabsWrapper = styled.div`
  width: max-content;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 44px;
  z-index: 3;
  border-bottom: 1px solid var(--color-gray-blue);

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
    border-bottom: none;
    width: 100%;
    padding: 0px 24px;
    align-items: center;
    max-width: 450px;
  }
`;

const TabWrapper = styled.div`
  width: max-content;

  @media ${QUERIES.tabletAndSmaller} {
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid var(--color-gray-blue);

    ${(p) => (p.first ? "border-top: 1px solid var(--color-gray-blue);" : "")}
  }
`;

const Tab = styled.div`
  text-align: center;
  padding: 28px 58px;
  transition: all 0.3s ease-in-out;
  color: var(--color-gray-two);
  ${(p) => (p.active ? "color: var(--color-very-dark-blue);" : "")}
  border-bottom: 4px solid ${(p) =>
    p.active ? "var(--color-soft-red)" : "transparent"};
  cursor: pointer;
  font-size: ${16 / 16}rem;
  z-index: 4;

  ${hoverSupported(css`
    &:hover {
      ${(p) => (!p.active ? "color: var(--color-soft-red);" : "")}
    }
  `)}

  @media ${QUERIES.tabletAndSmaller} {
    padding: 18px 0px;
    width: max-content;
  }
`;

const data = [
  {
    title: "Bookmark in one click",
    desc: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    title: "Intelligent search",
    desc: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    title: "Share your bookmarks",
    desc: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];

const TabContent = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 72px;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
  }
`;

const MyBoxDecor = styled(BoxDecor)`
  right: auto;
  top: auto;
  left: -258px;
  bottom: -88px;
  width: 900px;

  @media ${QUERIES.tabletAndSmaller} {
    height: 400px;
    bottom: -260px;
    left: -350px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    width: 120%;
    height: 18%;
    left: -38%;
    bottom: 26%;
  }
`;

const easeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-40px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const easeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(40px);
  }
`;

const IllustrationContainer = styled.div`
  width: 536px;
  height: 346px;
  z-index: 2;

  animation: ${(p) => (p.active ? easeIn : easeOut)} 0.3s forwards;

  @media ${QUERIES.tabletAndSmaller} {
    width: calc(100% - 64px);
  }
`;

const CardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  z-index: 2;
  max-width: 444px;
  margin-right: -4px;

  animation: ${(p) => (p.active ? easeIn : easeOut)} 0.3s forwards;

  @media ${QUERIES.tabletAndSmaller} {
    margin-top: -120px;
    align-items: center;
    background-color: var(--color-gray-one-faded);
    padding: 24px;
    border-radius: 12px;
  }
  @media ${QUERIES.phoneAndSmaller} {
    margin-top: -64px;
    align-items: center;
    gap: 18px;
  }
`;

const CardTitle = styled.h1`
  font-size: ${32 / 16}rem;
  color: var(--color-very-dark-blue);
  font-weight: var(--font-weight-medium);

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${24 / 16}rem;
  }
`;

const CardDesc = styled.span`
  line-height: ${28 / 16}rem;
  color: var(--color-gray-blue);

  @media ${QUERIES.tabletAndSmaller} {
    font-size: ${15 / 16}rem;
    line-height: ${26 / 16}rem;
    text-align: center;
    max-width: 310px;
  }
`;

function MidSection() {
  const [prevTab, setPrevTab] = useState(0);
  const [tab, setTab] = useState(0);
  const [trigger, setTrigger] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTrigger(true);
    }, 320);

    return () => clearTimeout(timer);
  }, [tab]);

  return (
    <Wrapper>
      <Container>
        <TextWrapper>
          <Title>Features</Title>
          <Desc>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync betweem your devices so you
            can access them on the go.
          </Desc>
        </TextWrapper>

        <TabsWrapper>
          <TabWrapper first={true}>
            <Tab
              active={tab === 0}
              onClick={() => {
                setTrigger(false);
                setPrevTab(tab);
                setTab(0);
              }}
            >
              Simple Bookmarking
            </Tab>
          </TabWrapper>
          <TabWrapper>
            <Tab
              active={tab === 1}
              onClick={() => {
                setTrigger(false);
                setPrevTab(tab);
                setTab(1);
              }}
            >
              Speedy Searching
            </Tab>
          </TabWrapper>
          <TabWrapper>
            <Tab
              active={tab === 2}
              onClick={() => {
                setTrigger(false);
                setPrevTab(tab);
                setTab(2);
              }}
            >
              Easy Sharing
            </Tab>
          </TabWrapper>
        </TabsWrapper>
      </Container>

      <TabContent>
        {trigger ? (
          <IllustrationContainer active={trigger}>
            <Image
              src={`/frontendmentor_15/illustration-features-tab-${
                tab + 1
              }.svg`}
              alt={"illustration tab image"}
            />
          </IllustrationContainer>
        ) : (
          ""
        )}

        {!trigger ? (
          <IllustrationContainer active={trigger}>
            <Image
              src={`/frontendmentor_15/illustration-features-tab-${
                prevTab + 1
              }.svg`}
              alt={"illustration tab image"}
            />
          </IllustrationContainer>
        ) : (
          ""
        )}

        {trigger ? (
          <CardTextWrapper active={trigger}>
            <CardTitle>{data[tab].title}</CardTitle>
            <CardDesc>{data[tab].desc}</CardDesc>
            <Button color={"blue"} style={{ width: "max-content" }}>
              More Info
            </Button>
          </CardTextWrapper>
        ) : (
          ""
        )}

        {!trigger ? (
          <CardTextWrapper active={trigger}>
            <CardTitle>{data[prevTab].title}</CardTitle>
            <CardDesc>{data[prevTab].desc}</CardDesc>
            <Button color={"blue"} style={{ width: "max-content" }}>
              More Info
            </Button>
          </CardTextWrapper>
        ) : (
          ""
        )}
      </TabContent>
      <MyBoxDecor />
    </Wrapper>
  );
}

export default MidSection;
