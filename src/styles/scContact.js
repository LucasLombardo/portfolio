import styled from 'styled-components'

export const ScContact = styled.section`
  background: #fff;
  background: url(https://res.cloudinary.com/dov1pamgz/image/upload/v1547316989/bg.jpg)
    no-repeat center center fixed;
  background-size: cover;
  padding: 6rem 0 5rem 0;
  text-align: center;
  color: #3f3f3f;
  form {
    max-width: 900px;
    margin: 0 auto;
  }
  header {
    color: #3f3f3f;
    text-align: center;
    margin-bottom: 3rem;
    h3 {
      font-size: 1.4rem;
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
  input,
  textarea {
    border: 2px solid #e4e4e4;
    border-radius: 6px;
    padding: 0.8rem 1rem;
    margin-bottom: 2rem;
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-style: italic;
    color: #b2aaaa;
    box-shadow: none;
    &::placeholder {
      color: #b2aaaa;
    }
  }
  .name-email {
    display: flex;
    input {
      flex: 1;
      &:first-of-type {
        margin-right: 2rem;
      }
    }
  }
  .btn {
    margin-right: 1.2rem;
  }
`
