import styled from 'styled-components'

export const ScMessageBox = styled.div`
  padding: 8rem 0 4rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  background: url(https://res.cloudinary.com/dov1pamgz/image/upload/v1547316989/bg.jpg)
    no-repeat center center fixed;
  background-size: cover;
  .box {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1);
    background: #fff;
    padding: 3rem;
    text-align: center;
    opacity: 0;
    animation-name: box-fade-in;
    animation-duration: 0.3s;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
    button {
      margin-top: 1rem;
      .svg-inline--fa.fa-w-14 {
        margin-right: 0.4rem;
      }
    }
    @keyframes box-fade-in {
      0% {
        opacity: 0;
        padding: 2rem;
      }
      100% {
        opacity: 1;
        padding: 3rem;
      }
    }
  }
`
