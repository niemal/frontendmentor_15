import styled, { css } from "styled-components";
import { Image } from "../MainBody";
import { useState } from "react";
import Button from "../Button/Button";
import { hoverSupported } from "../hoverSupported";
import { QUERIES } from "../constants";
import ClickableWrapper from "../ClickableWrapper";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  padding-top: 4px;
  padding-bottom: 148px;

  @media ${QUERIES.tabletAndSmaller} {
    margin-top: -16px;
    gap: 20px;
    padding-bottom: 114px;
  }
`;

const Title = styled.h1`
  font-weight: var(--font-weight-medium);
  font-size: ${32 / 16}rem;
  color: var(--color-very-dark-blue);

  @media ${QUERIES.tabletAndSmaller} {
    text-align: center;
    font-size: ${24 / 16}rem;
    line-height: ${28 / 16}rem;
    max-width: 250px;
  }
`;

const Desc = styled.span`
  color: var(--color-gray-blue);
  line-height: ${28 / 16}rem;
  text-align: center;
  max-width: 500px;

  @media ${QUERIES.tabletAndSmaller} {
    text-align: center;
    font-size: ${15 / 16}rem;
    line-height: ${26 / 16}rem;
    padding: 0px 24px;
  }
`;

const FAQWrapper = styled.section`
  margin-top: 26px;
  width: 550px;
  padding: 12px 0px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--color-gray-blue);
  border-bottom: 1px solid var(--color-gray-blue);

  @media ${QUERIES.tabletAndSmaller} {
    padding: 12px 32px;
    width: 100%;
    border-top: none;
    border-bottom: none;
  }
`;

const Entry = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const EntryNameWrapper = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
  padding-right: 26px;
  padding-bottom: 24px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:focus {
    outline: 2px solid var(--color-soft-blue);
    outline-offset: 3px;
  }

  ${(p) =>
    p.last
      ? p.isOpen
        ? "padding-bottom: 24px;"
        : `padding-bottom: 12px;`
      : ""}
  ${(p) =>
    !p.last && !p.isOpen
      ? "border-bottom: 1px solid var(--color-gray-blue);"
      : ""}
  ${(p) => (!p.first ? "padding-top: 24px;" : "")}

  @media ${QUERIES.tabletAndSmaller} {
    padding-right: 0px;
    border-bottom: 1px solid var(--color-gray-blue);
    ${(p) => (p.last ? "padding-bottom: 24px;" : "")}
  }
`;

const EntryName = styled.span`
  color: var(--color-very-dark-blue);
  transition: all 0.3s ease-in-out;

  ${hoverSupported(css`
    ${EntryNameWrapper}:hover & {
      color: var(--color-soft-red);
    }
  `)}

  @media ${QUERIES.tabletAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;

const ArrowContainer = styled.div`
  position: relative;
  width: 18px;
  height: 12px;
  transition: all 0.3s ease-in-out;

  ${(p) => (p.isOpen ? "transform: rotate(180deg);" : "")}

  ${(p) =>
    p.isOpen
      ? `
    & ${Image} {
      filter: invert(55%) sepia(50%) saturate(5117%) hue-rotate(329deg) brightness(103%) contrast(96%);
    }
  `
      : ""}
`;

const EntryContainer = styled.span`
  max-height: ${(p) => (p.isOpen ? "500px" : "0px")};
  overflow: hidden;
  transition: all ${(p) => (p.isOpen ? "0.7" : "0.45")}s ease-in-out;
  opacity: ${(p) => (p.isOpen ? "1" : "0")};
  color: var(--color-very-dark-blue);
  line-height: ${32 / 16}rem;
`;

function FAQSection() {
  const [open, setOpen] = useState(-1);

  return (
    <Wrapper>
      <Title>Frequently Asked Questions</Title>
      <Desc>
        Here are some of our FAQs. If you have any other questions you'd like
        answered please feel free to email us.
      </Desc>

      <FAQWrapper aria-label={"Frequently Answered Questions"}>
        <Entry>
          <ClickableWrapper
            aria-controls={"what-is-bookmark"}
            aria-expanded={open === 0}
            onClick={() => {
              if (open === 0) {
                setOpen(-1);
              } else {
                setOpen(0);
              }
            }}
          >
            <EntryNameWrapper first={true} isOpen={open === 0}>
              <EntryName>What is Bookmark?</EntryName>
              <ArrowContainer isOpen={open === 0}>
                <Image
                  src={"/frontendmentor_15/icon-arrow.svg"}
                  alt={"arrow image"}
                />
              </ArrowContainer>
            </EntryNameWrapper>
          </ClickableWrapper>
          <EntryContainer
            id={"what-is-bookmark"}
            role={"region"}
            aria-labelledby={"what-is-bookmark"}
            isOpen={open === 0}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </EntryContainer>
        </Entry>

        <Entry>
          <ClickableWrapper
            aria-controls={"how-can-new-browser"}
            aria-expanded={open === 1}
            onClick={() => {
              if (open === 1) {
                setOpen(-1);
              } else {
                setOpen(1);
              }
            }}
          >
            <EntryNameWrapper isOpen={open === 1}>
              <EntryName>How can I request a new browser?</EntryName>
              <ArrowContainer isOpen={open === 1}>
                <Image
                  src={"/frontendmentor_15/icon-arrow.svg"}
                  alt={"arrow image"}
                />
              </ArrowContainer>
            </EntryNameWrapper>
          </ClickableWrapper>
          <EntryContainer
            id={"how-can-new-browser"}
            role={"region"}
            aria-labelledby={"how-can-new-browser"}
            isOpen={open === 1}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </EntryContainer>
        </Entry>

        <Entry>
          <ClickableWrapper
            aria-controls={"is-there-mobile-app"}
            aria-expanded={open === 2}
            onClick={() => {
              if (open === 2) {
                setOpen(-1);
              } else {
                setOpen(2);
              }
            }}
          >
            <EntryNameWrapper isOpen={open === 2}>
              <EntryName>Is there a mobile app?</EntryName>
              <ArrowContainer isOpen={open === 2}>
                <Image
                  src={"/frontendmentor_15/icon-arrow.svg"}
                  alt={"arrow image"}
                />
              </ArrowContainer>
            </EntryNameWrapper>
          </ClickableWrapper>
          <EntryContainer
            id={"is-there-mobile-app"}
            role={"region"}
            aria-labelledby={"is-there-mobile-app"}
            isOpen={open === 2}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </EntryContainer>
        </Entry>

        <Entry>
          <ClickableWrapper
            aria-controls={"what-about-other"}
            aria-expanded={open === 3}
            onClick={() => {
              if (open === 3) {
                setOpen(-1);
              } else {
                setOpen(3);
              }
            }}
          >
            <EntryNameWrapper last={true} isOpen={open === 3}>
              <EntryName>What about other Chromium browsers?</EntryName>
              <ArrowContainer isOpen={open === 3}>
                <Image
                  src={"/frontendmentor_15/icon-arrow.svg"}
                  alt={"arrow image"}
                />
              </ArrowContainer>
            </EntryNameWrapper>
          </ClickableWrapper>
          <EntryContainer
            id={"what-about-other"}
            role={"region"}
            aria-labelledby={"what-about-other"}
            isOpen={open === 3}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </EntryContainer>
        </Entry>
      </FAQWrapper>

      <Button
        color={"blue"}
        style={{
          fontSize: `${14 / 16}rem`,
          padding: "16px 24px",
          marginTop: "28px",
        }}
      >
        More Info
      </Button>
    </Wrapper>
  );
}

export default FAQSection;
