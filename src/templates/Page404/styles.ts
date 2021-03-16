import styled, { keyframes } from 'styled-components'

const animationHeading = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);

  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  max-width: var(--container);
  margin: auto;
  animation: ${animationHeading} 1s;
  padding: 0 3rem;

  img {
    width: min(40rem, 100%);
    margin-top: 5rem;
  }

  a {
    padding-top: 3rem;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.9;
    }
  }
`

export const Heading = styled.h1`
  font-size: 3.5rem;
`
