import styled from 'styled-components'

export const ScHeader = styled.div`
  min-height: 100vh;
  background-color: #333;
  background: url(https://res.cloudinary.com/dov1pamgz/image/upload/v1547316989/road-to-zion-by-tyson-dudley.jpg)
    no-repeat center center fixed;
  background-size: cover;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .content {
    background: #3dc5ad;
    color: #fff;
    text-align: center;
    position: relative;
    z-index: 2;
    padding: 2.8em 0.5em;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1);
    h1 {
      margin-bottom: 0.3rem;
    }
    p {
      margin: 0;
      font-size: 1.2rem;
    }
  }

  svg {
    position: absolute;
    fill: #fff;
    bottom: 0;
    left: 50%;
    z-index: 1;
    width: 50px;
    margin-left: -25px;
    margin-bottom: 20px;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      fill: #3dc5ad;
    }
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.625),
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.625)
    );
  }
`
