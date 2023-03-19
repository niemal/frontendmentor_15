import styled from "styled-components";
import Button from "../Button/Button";
import { Image } from "../MainBody";
import { useRef, useState } from "react";
import { QUERIES } from "../constants";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 42px;
  justify-content: center;
  background-color: var(--color-soft-blue);

  @media ${QUERIES.tabletAndSmaller} {
    padding: 72px 32px;
    padding-bottom: 64px;
    gap: 16px;
  }
`;

const Intro = styled.h2`
  color: white;
  font-size: ${13 / 16}rem;
  font-weight: var(--font-weight-medium);
  letter-spacing: 5px;

  @media ${QUERIES.tabletAndSmaller} {
    text-align: center;
    letter-spacing: 4px;
    width: 100%;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: ${32 / 16}rem;
  line-height: ${38 / 16}rem;
  font-weight: var(--font-weight-medium);
  max-width: 444px;
  text-align: center;

  @media ${QUERIES.tabletAndSmaller} {
    font-size: ${24 / 16}rem;
    line-height: ${26 / 16}rem;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  max-width: 300px;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
    max-width: 400px;
    width: 100%;
    margin-top: 18px;
    gap: 16px;
  }
`;

const InputContainer = styled.div`
  position: relative;
  min-width: 100%;
`;

const Input = styled.input`
  outline: none;
  border: none;
  border-radius: 6px;
  padding: 12px;
  padding-left: 24px;
  font-size: ${14 / 16}rem;
  background-color: white;
  color: var(--color-very-dark-blue);
  min-width: 100%;
  transition: all 0.3s ease-in-out;

  border: 2px solid
    ${(p) => (p.error ? "var(--color-soft-red)" : "transparent")};

  &::placeholder {
    color: var(--color-gray-blue);
  }
`;

const ErrorImageContainer = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  right: 14px;
  top: 14px;
`;

const ErrorMessageContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: -24px;
  padding: 8px 12px;
  font-size: ${10 / 16}rem;
  font-weight: var(--font-weight-medium);
  font-style: italic;
  width: 100%;
  color: white;
  background-color: var(--color-soft-red);
  border-radius: 0px 0px 6px 6px;
`;

function FooterFiller() {
  const inputRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (input) => {
    if (
      !input.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      setErrorMessage("Whoops, make sure it's an email");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <Wrapper>
      <Intro>35,000+ ALREADY JOINED</Intro>
      <Title>Stay up-to-date with what we're doing</Title>
      <InputWrapper>
        <InputContainer>
          <Input
            error={errorMessage?.length > 0}
            ref={inputRef}
            placeholder={"Enter your email address"}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                validateEmail(inputRef.current.value);
              }
            }}
          />
          {errorMessage?.length > 0 ? (
            <>
              <ErrorImageContainer>
                <Image
                  src={"/frontendmentor_15/icon-error.svg"}
                  alt={"error icon image"}
                />
              </ErrorImageContainer>
              <ErrorMessageContainer>{errorMessage}</ErrorMessageContainer>
            </>
          ) : (
            ""
          )}
        </InputContainer>
        <Button
          color={"red"}
          style={{
            backgroundColor: "var(--color-soft-red)",
            fontSize: `${16 / 16}rem`,
            padding: "14px 24px",
            width: "100%",
          }}
          onClick={() => {
            validateEmail(inputRef.current.value);
          }}
        >
          Contact Us
        </Button>
      </InputWrapper>
    </Wrapper>
  );
}

export default FooterFiller;
