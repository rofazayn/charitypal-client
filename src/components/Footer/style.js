import styled from 'styled-components';

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.grey[700]};
  .footer {
    &__inner {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    &__balance {
      display: flex;
      align-items: center;
      .value {
        color: ${({ theme }) => theme.palette.primary.main};
        font-family: 'Montserrat';
        letter-spacing: 1px;
        font-size: 2rem;
        font-weight: 700;
        margin-inline-end: ${({ theme }) => `${theme.spacing(2)}px`};
      }
    }
    &__sponsors {
      display: flex;
      align-items: center;
      p {
        margin-inline-end: ${({ theme }) => `${theme.spacing(2)}px`};
      }
    }
    &__legal {
      display: flex;
      align-items: center;
      ul {
        display: flex;
        list-style: none;
        li {
          a {
            padding: 1rem;
            &:hover {
              color: ${({ theme }) => theme.palette.primary.main};
            }
          }
        }
      }
    }
  }
`;

export const Styled = {
  Footer
};
