import styled from 'styled-components'

export const ScCard = styled.div`
  background: #fff;
  margin-top: 3rem;
  display: flex;
  border-radius: 4px;
  align-items: center;
  text-align: left;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1);
  img {
    max-height: 400px;
    border-radius: 4px 0 0 4px;
  }
  .content {
    padding: 0.5rem 3rem;
    h3 {
      font-size: 1.1rem;
    }
    p {
      font-size: 0.9rem;
      line-height: 1.5rem;
    }
    .card-footer {
      button {
        margin-top: 2.5rem;
        margin-right: 1rem;
      }
    }
  }
  &.right {
    flex-direction: row-reverse;
    img {
      border-radius: 0 4px 4px 0;
    }
  }
`
