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
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1);
    display: relative;
    img {
      width: 100%;
      border-radius: 4px 4px 0 0;
    }
    .post-text {
      padding: 2rem 3rem;
      .post-content {
        padding-bottom: 1.5rem;
      }
      .button {
        display: block;
        width: fit-content;
        margin: 1rem auto;
        line-height: 2.6rem;
        padding: 0 1.6rem;
        .svg-inline--fa.fa-w-14 {
          margin-right: 0.4rem;
        }
      }
    }
  }
`
