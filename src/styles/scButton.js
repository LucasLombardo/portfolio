import styled from 'styled-components'

export const ScButton = styled.button`
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  background: #3dc5ad;
  color: #fff;
  display: inline-block;
  padding: 0 2.5rem;
  text-align: center;
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: 0.025rem;
  transition: 0.2s;
  &:hover {
    background: #51cbb5;
  }
  &.secondary {
    background: transparent;
    box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.1);
    color: inherit;
    &:hover {
      background: rgba(143, 143, 143, 0.075);
    }
  }
`
