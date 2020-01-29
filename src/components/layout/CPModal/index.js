import styled from 'styled-components';
import { Modal } from '@material-ui/core';

const CPModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  div {
    outline: none;
    padding: 0;
    margin: 0;
  }
  .video-wrapper {
    margin: 0;
    padding: 0;
    width: 80vw;
    height: calc(80vw / 1.77777777778);
  }
`;

export default CPModal;
