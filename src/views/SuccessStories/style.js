import styled from 'styled-components';
import { motion } from 'framer-motion';

const SuccessStories = styled(motion.div)`
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
`;

export const Styled = {
  SuccessStories
};
