import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
const CPButtonIcon = styled(IconButton)`
  /* padding: 0.8rem 1.5rem; */
  color: ${({ theme }) => theme.palette.primary.main};
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
`;

export default CPButtonIcon;
