import styled from 'styled-components'

export const ScProjects = styled.section`
  padding: 6rem 0 8rem 0;
  color: #fff;
  background: #292f33;
  header {
    font-size: 1.4rem;
    text-align: center;
    &:before {
      content: '';
      display: inline-block;
      width: 6.5rem;
      height: 0.25rem;
      margin: 0 0 1.5rem 0;
      border-radius: 4px;
      background-color: #3dc5ad;
    }
  }
  .project {
    display: flex;
    align-items: center;
    margin-top: 5rem;
    h3 {
      transition: 0.2s;
      letter-spacing: 0.15rem;
      &:hover {
        color: #3dc5ad;
      }
    }
    li {
      display: inline-block;
      transform: skew(-10deg);
      background: rgba(0, 0, 0, 0.15);
      margin-right: 0.4rem;
      span {
        margin: 0.3rem;
        font-size: 0.65rem;
        color: #3dc5ad;
        display: block;
        text-decoration: none;
        padding: 0 0.5rem;
      }
    }
    img {
      margin: 0 3rem 0 0;
      max-width: 500px;
      border-radius: 4px;
      transition: 0.2s;
      @media only screen and (max-width: 1200px) {
        max-width: 400px;
      }
      &:hover {
        opacity: 0.8;
      }
    }
    .project-info {
      button {
        margin: 1rem 1rem 1rem 0;
        line-height: 2.6rem;
        padding: 0 1.6rem;
        &.secondary {
          box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.2);
        }
      }
    }
    &:nth-of-type(even) {
      flex-direction: row-reverse;
      img {
        margin: 0 0 0 3rem;
      }
    }
  }
`
