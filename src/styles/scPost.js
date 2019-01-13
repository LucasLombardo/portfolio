import styled from 'styled-components'

export const ScPost = styled.main`
  padding: 68px 0 3rem 0;
  background: #fff;
  background: url(https://res.cloudinary.com/dov1pamgz/image/upload/v1547316989/bg.jpg)
    no-repeat center center fixed;
  background-size: cover;
  box-sizing: border-box;
  color: #3f3f3f;
  header {
    text-align: center;
    margin-top: 5.5rem;
    margin-bottom: 2rem;
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
  .post-body {
    background: #fff;
    padding: 2rem 3rem;
    border-radius: 4px;
    .post-content {
      padding-bottom: 1.5rem;
    }
    button {
      display: block;
      margin: 1rem auto;
      line-height: 2.6rem;
      padding: 0 1.6rem;
      .svg-inline--fa.fa-w-14 {
        margin-right: 0.4rem;
      }
    }
  }
`
