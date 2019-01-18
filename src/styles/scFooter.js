import styled from 'styled-components'

export const ScFooter = styled.footer`
  padding: 3rem 0;
  color: #bfbfbf;
  text-align: center;
  p {
    font-size: 0.65rem;
  }
  .svg-inline--fa.fa-w-16,
  .svg-inline--fa.fa-w-14 {
    width: 26px;
    height: 26px;
    margin: 0.5rem 1.2rem;
    transition: 0.2s;
    &:hover {
      color: #3dc5ad;
    }
  }
  .email {
    display: inline;
    position: relative;
    div {
      position: absolute;
      left: -24px;
      top: 0;
      margin-top: 20px;
      input {
        width: 120px;
        box-sizing: border-box;
      }
      .button {
        line-height: 1.8rem;
        padding: 0;
        width: 120px;
        margin-top: 5px;
      }
    }
  }
`
