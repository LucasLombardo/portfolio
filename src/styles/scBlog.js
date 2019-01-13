import styled from 'styled-components'

export const ScBlog = styled.main`
  padding-top: 68px;
  padding-bottom: 3rem;
  text-align: center;
  background: #fff;
  background: url(https://res.cloudinary.com/dov1pamgz/image/upload/v1547316989/bg.jpg)
    no-repeat center center fixed;
  background-size: cover;
  header {
    margin-top: 5.5rem;
    h1 {
      font-size: 3.2rem;
      color: #3f3f3f;
    }
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
`
