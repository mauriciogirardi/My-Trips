import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --highlight: #29d;
    --background: #030518;
    --white: #eeeeee;

    --container: 100rem;
    --small:  1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body,
  html,
  #__next{
    height: 100%;
    background-color: var(--background);
    color: var(--white);
  }

  button,
  body,
  textarea,
  input {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  html {
    font-size: 62.5%;
  }

  a {
    text-decoration: none;
    color: var(--highlight);
  }

  p, a {
    font-size: 2rem;
    line-height: var(--medium);
  }

  /* @media (max-width: 1000px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  } */

`
