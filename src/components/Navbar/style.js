import styled from 'styled-components';

const Navbar = styled.div`
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0; */
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  background: white;
  z-index: 9999;
  overflow: hidden;
  hr {
    /* Vertical divider */
    height: 20px;
    margin: 0 1rem;
    display: flex;
  }
  .navbar {
    &__inner {
      /* background: papayawhip; */
      display: flex;
      height: 100%;
      padding: 1rem 0;
      justify-content: space-between;
      align-items: center;
    }
    &__logo {
      a {
        padding: 1rem;
        padding-inline-start: 0;
        font-weight: 700;
        font-family: 'Montserrat';
        /* letter-spacing: 0.5px; */
      }
    }
    &__menu {
      @media (max-width: 800px) {
        display: none;
      }
      ul {
        display: flex;
        list-style: none;
        height: 100%;
        /* background: red; */
        align-items: center;
        justify-content: flex-end;
        li {
          a {
            padding: 1rem;
            position: relative;
            font-weight: 500;
            font-family: 'Montserrat';
            color: ${({ theme }) => theme.palette.grey[700]};
            &::before {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              margin: 0 auto;
              width: 6px;
              height: 6px;
              border-radius: 100%;
              background-color: transparent;
            }
            &.active {
              color: ${({ theme }) => theme.palette.primary.main};
              &::before {
                background-color: ${({ theme }) => theme.palette.primary.main};
              }
            }
            &:hover {
              color: ${({ theme }) => theme.palette.primary.main};
              &::before {
                background-color: ${({ theme }) => theme.palette.primary.main};
              }
            }
          }
          &:last-of-type {
            a {
              padding-inline-end: 0;
            }
          }
        }
      }
    }
  }
`;

export const Styled = {
  Navbar
};
