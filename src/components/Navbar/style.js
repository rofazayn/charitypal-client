import styled from 'styled-components';

const Navbar = styled.div`
  /* position: fixed; */
  top: 0;
  left: 0;
  width: 100%;
  background: pink;
  .navbar__inner {
    display: flex;
    background: papayawhip;
    height: 100%;
    padding: 1rem 0;
    justify-content: space-between;
    align-items: center;
  }
  .navbar__logo {
    a {
      padding: 1rem;
    }
  }
  .navbar__menu {
    ul {
      display: flex;
      list-style: none;
      li {
        a {
          padding: 1rem;
        }
      }
    }
  }
`;

export const Styled = {
  Navbar
};
