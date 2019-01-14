import styled from 'styled-components'

export const ScAbout = styled.section`
  background: #fff;
  background: url(https://res.cloudinary.com/dov1pamgz/image/upload/v1547316989/bg.jpg)
    no-repeat center center fixed;
  background-size: cover;
  padding: 7rem 0 8rem 0;
  min-height: 100vh;
  text-align: center;
  color: #3f3f3f;
  .about-header:before {
    content: '';
    display: inline-block;
    width: 6.5rem;
    height: 0.25rem;
    margin: 0 0 1.5rem 0;
    border-radius: 4px;
    background-color: #3dc5ad;
  }
  h2 {
    font-size: 2.3rem;
  }
  .svg-inline--fa.fa-w-14,
  .svg-inline--fa.fa-w-16 {
    margin-left: 0.4rem;
  }
`
