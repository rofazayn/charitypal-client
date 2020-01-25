import styled from 'styled-components';

const Navbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem 0;
  /* background: pink; */
  hr {
    /* Vertical divider */
    height: 20px;
    margin: 0 1rem;
    display: flex;
  }
  .navbar__inner {
    /* background: papayawhip; */
    display: flex;
    height: 100%;
    padding: 1rem 0;
    justify-content: space-between;
    align-items: center;
  }
  .navbar__logo {
    a {
      padding: 1rem;
      font-weight: 500;
    }
  }
  .navbar__menu {
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
            color: red;
            &::before {
              background-color: red;
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
