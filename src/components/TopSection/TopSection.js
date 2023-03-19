import styled from "styled-components";
import Button from "../Button/Button";
import { Image } from "../MainBody";
import { QUERIES } from "../constants";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const IllustrationHeroContainer = styled(motion.div)`
  position: absolute;
  right: 54px;
  top: 56px;
  width: 657px;
  height: 466px;
  filter: drop-shadow(0px 2px 4px var(--color-very-dark-blue));

  @media ${QUERIES.tabletAndSmaller} {
    margin-top: 32px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    right: auto;
    top: auto;
    width: calc(100% - 24px);
  }
`;

export const BoxDecor = styled(motion.div)`
  position: absolute;
  background-color: var(--color-soft-blue);
  height: 350px;
  top: 200px;
  width: 700px;
  right: -180px;
  border-radius: 5000px;

  @media ${QUERIES.phoneAndSmaller} {
    width: 120%;
    height: 20%;
    right: -40%;
    top: 9%;
  }
`;

const Container = styled.section`
  padding-top: 140px;
  position: relative;
  margin: 0 auto;
  max-width: 1100px;
  width: 100%;

  @media ${QUERIES.phoneAndSmaller} {
    margin-top: -42%;
    padding: 0px 24px;
  }
`;

const TextWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 28px;
  max-width: 500px;
  margin-left: -4px;

  @media ${QUERIES.tabletAndSmaller} {
    margin: 0 auto;
    align-items: center;
  }

  @media ${QUERIES.phoneAndSmaller} {
    margin: 0;
    align-items: start;
  }
`;

const Title = styled.h1`
  font-size: ${48 / 16}rem;
  line-height: ${50 / 16}rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-very-dark-blue);

  @media ${QUERIES.phoneAndSmaller} {
    text-align: center;
    font-size: ${30 / 16}rem;
    line-height: ${40 / 16}rem;
  }
`;

const Desc = styled.span`
  color: var(--color-gray-blue);
  line-height: ${27 / 16}rem;

  @media ${QUERIES.phoneAndSmaller} {
    text-align: center;
    font-size: ${16 / 16}rem;
    line-height: ${24 / 16}rem;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 4px;

  @media ${QUERIES.phoneAndSmaller} {
    justify-content: center;
  }
`;

const boxDecorVariants = {
  hidden: { rotate: -25, scale: 0 },
  visible: { rotate: 0, scale: 1 },
};

const illustrationHeroVariants = {
  hidden: { rotate: 25, scale: 0 },
  visible: { rotate: 0, scale: 1 },
};

const textWrapperVariants = {
  hidden: { x: -200, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

function TopSection() {
  return (
    <Wrapper>
      <BoxDecor
        variants={boxDecorVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <IllustrationHeroContainer
        variants={illustrationHeroVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src={"/frontendmentor_15/illustration-hero.svg"}
          alt={"hero image"}
        />
      </IllustrationHeroContainer>
      <Container>
        <TextWrapper
          variants={textWrapperVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Title>A Simple Bookmark Manager</Title>
          <Desc>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </Desc>
          <ButtonRow>
            <Button
              color={"blue"}
              style={{ padding: "18px 25px", fontSize: `${14 / 16}rem` }}
            >
              Get it on Chrome
            </Button>
            <Button
              color={"gray"}
              style={{ padding: "18px 25px", fontSize: `${14 / 16}rem` }}
            >
              Get it on Firefox
            </Button>
          </ButtonRow>
        </TextWrapper>
      </Container>
    </Wrapper>
  );
}

export default TopSection;
