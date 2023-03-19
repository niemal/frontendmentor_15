import styled, { css } from "styled-components";
import { hoverSupported } from "../hoverSupported";
import { QUERIES } from "../constants";

const Wrapper = styled.div`
  padding: 14px 33px;
  text-align: center;
  ${(p) => (p.letterspacing ? "letter-spacing: 1.4px;" : "")}
  font-size: ${13 / 16}rem;
  background-color: ${(p) =>
    p.color === "red" ? "var(--color-soft-red)" : "var(--color-soft-blue)"};
  font-weight: var(--font-weight-medium);
  color: white;
  border-radius: 4px;
  user-select: none;
  cursor: pointer;
  white-space: nowrap;

  ${(p) =>
    p.color === "gray"
      ? `
  background-color: var(--color-gray-one);
  color: var(--color-gray-two);
  box-shadow: 0px 3px 5px var(--color-gray-blue);
  `
      : ""}

  border: 2px solid transparent;
  transition: all 0.3s ease-in-out;

  ${hoverSupported(css`
    &:hover {
      background-color: white !important;

      ${(p) =>
        p.color === "red"
          ? `
        border-color: var(--color-soft-red);
        color: var(--color-soft-red);
      `
          : ""}

      ${(p) =>
        p.color === "blue"
          ? `
        border-color: var(--color-soft-blue);
        color: var(--color-soft-blue);
      `
          : ""}

      ${(p) =>
        p.color === "gray"
          ? `
        border-color: var(--color-very-dark-blue);
        color: var(--color-very-dark-blue);
      `
          : ""}
    }
  `)}

  @media ${QUERIES.tabletAndSmaller} {
    padding: 14px !important;
  }
`;

function Button({ color, spacing, children, ...props }) {
  return (
    <Wrapper color={color} letterspacing={spacing} {...props}>
      {children}
    </Wrapper>
  );
}

export default Button;
