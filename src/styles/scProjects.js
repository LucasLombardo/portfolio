import styled from 'styled-components'

export const ScProjects = styled.section`
  padding: 5rem 0;
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
    margin-top: 3.5rem;

    img {
      margin: 0 3rem 0 0;
      max-width: 400px;
      border-radius: 4px;
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
