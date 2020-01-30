import styled from 'styled-components';

const Donate = styled.div`
  .hero {
    /* max-width: 600px; */
    &__title {
      margin-bottom: ${({ theme }) => `${theme.spacing(3)}px`};
    }
    &__paragraph {
      margin-bottom: ${({ theme }) => `${theme.spacing(3)}px`};
    }
    &__caption {
      color: ${({ theme }) => theme.palette.grey[700]};
    }
  }
  .step-one {
    form {
      display: grid;
      grid-template-columns: 1fr;
      grid-row-gap: 1.33rem;
      .button-wrapper {
        text-align: right;
        button {
          width: 100%;
        }
        @media (max-width: 600px) {
          text-align: left;
          margin-top: 1.33rem;
          button {
            width: 100%;
          }
        }
      }
    }
  }
`;

export const Styled = {
  Donate
};
