import styled from 'styled-components'

export const Wrapper = styled.div`
  cursor: pointer;
  color: var(--white);
  position: fixed;
  z-index: 1100;
  top: var(--medium);
  right: var(--medium);

  svg {
    transition: color 0.3s ease-in-out;
  }

  &:hover {
    svg {
      color: var(--highlight);
    }
  }
`
