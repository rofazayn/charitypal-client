import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const NewsList = styled(Grid)`
  padding-top: ${({ theme }) => `${theme.spacing(15)}px`};
  padding-bottom: ${({ theme }) => `${theme.spacing(15)}px`};
`;

export const Styled = {
  NewsList
};
