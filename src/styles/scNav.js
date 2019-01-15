import styled from 'styled-components'

export const ScNav = styled.div`
  /* Baseline Styling */
  display: flex;
  transition: background-color 0.2s;
  a {
    display: inline-block;
    margin: 1rem 1.5rem 1rem 0;
    transition: color 0.3s;
    &:first-of-type {
      margin: 1rem auto 1rem 1.5rem;
      font-weight: bold;
      text-transform: uppercase;
    }
    &:hover {
      color: #3dc5ad;
    }
  }
  /* Fixed Position Styling */
  background-color: #fff;
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.125);
  position: fixed;
  color: #3f3f3f;
  z-index: 3;
  top: 0;
  right: 0;
  left: 0;
  /* Absolute Position Styling */
  &.home.absolute {
    z-index: 3;
    position: absolute;
    color: #fff;
    background-color: transparent;
    box-shadow: none;
  }
  /* Mobile Styling */
  @media screen and (max-width: 480px) {
    a[href='/#About'] {
      display: none;
    }
  }
  @media screen and (max-width: 410px) {
    .home-link {
      margin: 1rem auto 1rem 1rem;
    }
    a {
      margin: 1rem 1rem 1rem 0;
    }
  }
  @media screen and (max-width: 338px) {
    a[href='/#Work'] {
      display: none;
    }
  }
`
