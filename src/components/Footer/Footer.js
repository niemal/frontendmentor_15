import styled, { css } from "styled-components";
import { hoverSupported } from "../hoverSupported";
import { QUERIES } from "../constants";
import ClickableWrapper from "../ClickableWrapper";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-very-dark-blue);
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  padding: 32px 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
    padding: 40px 0px;
    gap: 48px;
  }
`;

const LogoAndNavWrapper = styled.div`
  display: flex;
  gap: 58px;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
`;

const NavWrapper = styled.nav`
  display: flex;
  gap: 46px;
  align-items: center;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
    gap: 32px;
  }
`;

const NavEntry = styled.a`
  text-decoration: none;
  color: white;
  font-size: ${13 / 16}rem;
  letter-spacing: 1.4px;
  transition: all 0.3s ease-in-out;

  border-radius: 4px;
  &:focus {
    outline: 2px solid white;
    outline-offset: 4px;
  }

  ${hoverSupported(css`
    &:hover {
      color: var(--color-soft-red);
    }
  `)}

  @media ${QUERIES.tabletAndSmaller} {
    font-size: ${16 / 16}rem;
  }
`;

const LogoContainer = styled.div`
  width: 148px;
  height: 25px;
`;

const SocialWrapper = styled.div`
  display: flex;
  gap: 40px;
`;

const SocialContainer = styled.div`
  width: 24px;
  height: 24px;

  transition: all 0.3s ease-in-out;
  &:focus {
    outline: 2px solid white;
    outline-offset: 6px;
  }

  &:hover ${Image} {
    filter: invert(55%) sepia(50%) saturate(5117%) hue-rotate(329deg)
      brightness(103%) contrast(96%);
  }
`;

function Footer() {
  return (
    <Wrapper>
      <Container>
        <LogoAndNavWrapper>
          <LogoContainer>
            <Image
              src={"/frontendmentor_15/logo-footer.svg"}
              alt={"footer logo"}
            />
          </LogoContainer>

          <NavWrapper aria-label={"footer menu navigation"}>
            <ClickableWrapper>
              <NavEntry href={"/"}>FEATURES</NavEntry>
            </ClickableWrapper>
            <ClickableWrapper>
              <NavEntry href={"/"}>PRICING</NavEntry>
            </ClickableWrapper>
            <ClickableWrapper>
              <NavEntry href={"/"}>CONTACT</NavEntry>
            </ClickableWrapper>
          </NavWrapper>
        </LogoAndNavWrapper>

        <SocialWrapper>
          <ClickableWrapper>
            <SocialContainer>
              <Image
                src={"/frontendmentor_15/icon-facebook.svg"}
                alt={"facebook logo"}
              />
            </SocialContainer>
          </ClickableWrapper>
          <ClickableWrapper>
            <SocialContainer>
              <Image
                src={"/frontendmentor_15/icon-twitter.svg"}
                alt={"facebook logo"}
              />
            </SocialContainer>
          </ClickableWrapper>
        </SocialWrapper>
      </Container>
    </Wrapper>
  );
}

export default Footer;
