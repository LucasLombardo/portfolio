import styled from 'styled-components'

export const ScNav = styled.div`
  position: fixed;
  background: #fff;
  color: #3f3f3f;
  z-index: 2;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: left;
  padding: 1rem 1.5rem;
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.125);
  a {
    margin: 0 0 0 1.5rem;
    transition: 0.3s;
  }
  a:first-of-type {
    margin: 0 auto 0 0;
    font-weight: bold;
    text-transform: uppercase;
  }
  a:hover {
    color: #3dc5ad;
  }
  &.home {
    position: absolute;
    color: #fff;
    background: transparent;
    box-shadow: none;
  }
`
