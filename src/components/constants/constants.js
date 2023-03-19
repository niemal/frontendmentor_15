export const COLORS = {
  soft_blue: "hsl(231, 69%, 60%)",
  soft_red: "hsl(0, 94%, 66%)",
  gray_blue: "hsl(229, 8%, 60%)",
  very_dark_blue: "hsl(229, 31%, 21%)",
  very_dark_blue_faded: "hsla(229, 31%, 21%, 0.9)",
  gray_1: "hsl(0, 0%, 97%)",
  gray_1_faded: "hsla(0, 0%, 97%, 0.8)",
  gray_2: "hsl(240,7%,33%)",
};

export const BREAKPOINTS = {
  phone: 600,
  tablet: 1080,
  exclusiveWidth1: 1320,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  exclusiveWidth1: `(max-width: ${BREAKPOINTS.exclusiveWidth1 / 16}rem)`,
};
