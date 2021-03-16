import styled, { keyframes } from 'styled-components'

const animationHeading = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100px);

  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const animationBody = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);

  }
  100% {
    opacity: 1;
    transform: translateY(0);
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
`

export const Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--large);
  animation: ${animationHeading} 1s;
`

export const Body = styled.div`
  animation: ${animationBody} 1s;

  p {
    font-size: 2.4rem;
    line-height: 3.5rem;
  }
`
