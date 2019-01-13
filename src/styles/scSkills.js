import styled from 'styled-components'

export const ScSkills = styled.section`
  padding: 5rem 0;
  header {
    font-size: 1.4rem;
    color: #3f3f3f;
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
  .skills-wrapper {
    display: flex;
    margin: 0 -1rem;
    & > div {
      flex: 1;
      text-align: center;
      padding: 1rem 2rem;
      h3 {
        margin: 1rem 0;
        font-size: 1.1rem;
      }
      p {
        font-size: 0.9rem;
      }
      img {
        max-width: 150px;
        border-radius: 50%;
      }
    }
  }
`
