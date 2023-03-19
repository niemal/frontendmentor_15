import styled, { css, keyframes } from "styled-components";
import { Image } from "../MainBody";
import Button from "../Button/Button";
import { hoverSupported } from "../hoverSupported";
import { QUERIES } from "../constants";
import { useState, useRef } from "react";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 0 auto;
  max-width: 1100px;
  width: 100%;
  padding: 48px 0px;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 40px 32px;
  }
`;

const LogoContainer = styled.div`
  width: 148px;
  height: 25px;
  z-index: 11;
`;

const slideIn = keyframes`
    0% {
      opacity: 0;
      transform: translateY(-200%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  `;

const slideOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 0;
    transform: translateY(-200%);
  }
  `;

const burgerIn = css`
  animation: 0.3s ${slideIn} ease-in-out forwards;
`;

const burgerOut = css`
  animation: 0.3s ${slideOut} ease-in-out forwards;
`;

const BurgerIconContainer = styled.div`
  width: 18px;
  height: 15px;
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: block;
    z-index: 11;

    ${(p) => (p.open ? burgerIn : burgerOut)}
  }
`;

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 44px;
  margin-left: 4px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: var(--color-very-dark-blue);
  font-weight: var(--font-weight-regular);
  font-size: ${13 / 16}rem;
  letter-spacing: 1.4px;
  padding: 2px;
  transition: all 0.3s ease-in-out;

  ${hoverSupported(css`
    &:hover {
      color: var(--color-soft-red);
    }
  `)}
`;

const slideOpen = keyframes`
  0% {
    opacity: 0;
    transform: translateX(200%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const slideClose = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0%);
  }
  99% {
    opacity: 0;
    transform: translateX(200%);
  }
  100% {
    visibility: hidden;
  }
`;

const menuOpen = css`
  animation: 0.45s ${slideOpen} ease-in-out forwards;
`;

const menuClose = css`
  animation: 0.45s ${slideClose} ease-in-out forwards;
`;

const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  display: none;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  padding-bottom: 60px;
  padding-top: 106px;
  background-color: var(--color-very-dark-blue-faded);
  z-index: 10;

  ${(p) => (p.open ? menuOpen : menuClose)}

  @media ${QUERIES.tabletAndSmaller} {
    display: ${(p) => (p.firstRender ? "none" : "flex")};
  }
`;

const MobileMenuEntry = styled.a`
  text-decoration: none;
  color: white;
  width: 100%;
  ${(p) => (p.first ? "border-top: 1px solid var(--color-gray-blue);" : "")}
  border-bottom: 1px solid var(--color-gray-blue);
  font-size: ${21 / 16}rem;
  padding: 22px 0px;
  letter-spacing: 2.2px;
  text-align: center;
`;

const MenuLoginButton = styled.div`
  border: 2px solid white;
  border-radius: 4px;
  padding: 12px;
  font-size: ${20 / 16}rem;
  text-align: center;
  font-weight: var(--font-weight-medium);
  color: white;
  width: 100%;
  letter-spacing: 2.2px;
  margin-top: 24px;
`;

const SocialMenuWrapper = styled.div`
  margin-top: auto;
  display: flex;
  gap: 40px;
`;

const SocialContainer = styled.div`
  width: 24px;
  height: 24px;
`;

function useFirstRender() {
  const ref = useRef(true);
  const firstRender = ref.current;
  ref.current = false;
  return firstRender;
}

function NavBar() {
  const render = useFirstRender();
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <LogoContainer>
        <Image
          src={
            open
              ? "/frontendmentor_15/logo-mobile-nav.svg"
              : "/frontendmentor_15/logo-bookmark.svg"
          }
          alt={"logo image"}
        />
      </LogoContainer>

      <NavWrapper>
        <Link href={"/"}>FEATURES</Link>
        <Link href={"/"}>PRICING</Link>
        <Link href={"/"}>CONTACT</Link>
        <Button style={{ marginRight: "-4px" }} color={"red"} spacing={true}>
          LOGIN
        </Button>
      </NavWrapper>

      {!open ? (
        <>
          <BurgerIconContainer
            onClick={() => {
              setOpen(true);
            }}
            open={true}
          >
            <Image
              src={"/frontendmentor_15/icon-hamburger.svg"}
              alt={"hamburger icon"}
            />
          </BurgerIconContainer>
          <MobileMenuWrapper firstRender={render}>
            <MobileMenuEntry first={true}>FEATURES</MobileMenuEntry>
            <MobileMenuEntry>PRICING</MobileMenuEntry>
            <MobileMenuEntry>CONTACT</MobileMenuEntry>
            <MenuLoginButton>LOGIN</MenuLoginButton>

            <SocialMenuWrapper>
              <SocialContainer>
                <Image
                  src={"/frontendmentor_15/icon-facebook.svg"}
                  alt={"facebook icon"}
                />
              </SocialContainer>

              <SocialContainer>
                <Image
                  src={"/frontendmentor_15/icon-twitter.svg"}
                  alt={"twitter icon"}
                />
              </SocialContainer>
            </SocialMenuWrapper>
          </MobileMenuWrapper>
        </>
      ) : (
        ""
      )}

      {open ? (
        <>
          <BurgerIconContainer
            onClick={() => {
              setOpen(false);
            }}
            open={true}
          >
            <Image
              src={"/frontendmentor_15/icon-close.svg"}
              alt={"hamburger close icon"}
            />
          </BurgerIconContainer>
          <MobileMenuWrapper open={true}>
            <MobileMenuEntry first={true}>FEATURES</MobileMenuEntry>
            <MobileMenuEntry>PRICING</MobileMenuEntry>
            <MobileMenuEntry>CONTACT</MobileMenuEntry>
            <MenuLoginButton>LOGIN</MenuLoginButton>

            <SocialMenuWrapper>
              <SocialContainer>
                <Image
                  src={"/frontendmentor_15/icon-facebook.svg"}
                  alt={"facebook icon"}
                />
              </SocialContainer>

              <SocialContainer>
                <Image
                  src={"/frontendmentor_15/icon-twitter.svg"}
                  alt={"twitter icon"}
                />
              </SocialContainer>
            </SocialMenuWrapper>
          </MobileMenuWrapper>
        </>
      ) : (
        ""
      )}
    </Wrapper>
  );
}

export default NavBar;
