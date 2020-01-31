import styled from 'styled-components';

const News = styled.div`
  .hero {
    /* max-width: 600px; */
    &__title {
      margin-bottom: ${({ theme }) => `${theme.spacing(3)}px`};
    }
    &__paragraph {
      margin-bottom: ${({ theme }) => `${theme.spacing(3)}px`};
    }
    &__buttons {
      button:first-of-type {
        margin-inline-end: ${({ theme }) => `${theme.spacing(2)}px`};
      }
      margin-bottom: ${({ theme }) => `${theme.spacing(3)}px`};
    }
    &__caption {
      color: ${({ theme }) => theme.palette.grey[700]};
    }
  }
  .news {
    /* padding-top: ${({ theme }) => `${theme.spacing(15)}px`};
    padding-bottom: ${({ theme }) => `${theme.spacing(15)}px`}; */

    &__loader {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 100px;
      width: 100%;
      /* background: papayawhip; */
      border-radius: 20px;
    }
  }
`;

export const Styled = {
  News
};
