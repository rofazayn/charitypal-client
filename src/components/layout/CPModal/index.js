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
    margin: 0 auto;
  }
  .video-wrapper {
    margin: 0 auto;
    padding: 0;
    width: 80vw;
    height: calc(80vw / 1.77777777778);
    border-radius: 20px;
    overflow: hidden;
    @media (max-width: 700px) {
      width: 92vw;
      height: calc(92vw / 1.77777777778);
    }
  }
`;

export default CPModal;
