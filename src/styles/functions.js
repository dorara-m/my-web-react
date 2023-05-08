const breakpoints = {
  xs: 370,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const mq = (key) => `@media (min-width: ${breakpoints[key]}px)`;
