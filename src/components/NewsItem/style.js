import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const NewsItem = styled(Grid)`
  .inner {
    /* background: red; */
    .thumbnail {
      /* width: 100%; */
      img {
        width: 100%;
        height: auto;
        border-radius: 20px;
      }
    }
    .info {
      &__title {
        margin-bottom: ${({ theme }) => `${theme.spacing(3)}px`};
      }
      &__paragraph {
        margin-bottom: ${({ theme }) => `${theme.spacing(3)}px`};
      }
    }
  }
`;

export const Styled = {
  NewsItem
};
