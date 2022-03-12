import { createGlobalStyle, css } from 'styled-components';

const basicStyles = css`
  :root {
    /* colors */
    --clr-800: 217 28% 15%;
    --clr-700: 218 28% 13%;
    --clr-600: 216 53% 9%;
    --clr-500: 219 30% 18%;
    --clr-400: 176 68% 64%;
    --clr-300: 198 60% 50%;
    --clr-200: 0 100% 63%;
    --clr-100: 0 0% 100%;

    /* font-sizes */
    --fs-900: 5.6rem;
    --fs-800: 4rem;
    --fs-700: 2.4rem;
    --fs-600: 2rem;
    --fs-500: 1.8rem;
    --fs-400: 1.6rem;
    --fs-300: 1.4rem;
    --fs-200: 1.2rem;
    --fs-100: 1rem;

    --ff-primary: 'Open Sans', sans-serif;
    --ff-accent: 'Raleway', sans-serif;

    --max-width: 128rem;
  }

  /* Set core root defaults */
  html {
    box-sizing: border-box;
    font-size: 50%;
    text-rendering: optimizeSpeed;
    @media screen and (min-width: 45em) {
      font-size: 56.25%;
    }
    @media screen and (min-width: 75em) {
      font-size: 62.5%;
    }
    @media screen and (min-width: 112.5em) {
      font-size: 75%;
    }
    &,
    &:focus-within {
      scroll-behavior: smooth;
    }
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    font-family: var(--ff-primary);
    font-size: var(--fs-300);
    line-height: 1.5;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /*********** SCROLLBARS: DISABLED ************/
  *,
  html {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */

    &::-webkit-scrollbar {
      width: 0px;
      background: transparent; /* Chrome/Safari/Webkit */
    }
  }

  /* Make images easier to work with */
  /* :not([hidden]) selector fixes display issues */
  img,
  picture:not([hidden]) {
    height: auto;
    display: block;
    max-width: 100%;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Inherit fonts for inputs and buttons */
  button,
  input,
  select,
  textarea {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* TYPOGRAPHY */
  .fs-800 {
    font-size: var(--fs-800);
  }
  .fs-700 {
    font-size: var(--fs-700);
  }
  .fs-600 {
    font-size: var(--fs-600);
  }
  .fs-500 {
    font-size: var(--fs-500);
  }
  .fs-400 {
    font-size: var(--fs-400);
  }
  .fs-300 {
    font-size: var(--fs-300);
  }
  .fs-200 {
    font-size: var(--fs-200);
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  /* FLOW UTILITY */
  .flow > *:where(:not(:first-child)) {
    margin-block-start: var(--flow-space, 1.6rem);
  }

  .flow-space--small {
    --flow-space: 1rem;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${basicStyles}
`;

export { GlobalStyle };
