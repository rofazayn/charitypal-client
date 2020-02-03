import React from 'react';
import { Styled } from './style';
import { Container, Typography, Grid } from '@material-ui/core';
import CPButton from '../../components/layout/CPButton';
// import { Link } from 'react-router-dom';
import { ReactComponent as SuccessSvg } from '../../assets/svg/undraw_celebration_0jvk.svg';
import { motion } from 'framer-motion';

const SuccessStories = () => {
  return (
    <Styled.SuccessStories
      className='page'
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Container>
        <Grid
          container
          spacing={10}
          alignItems='center'
          justify='space-between'
        >
          <Grid item md={6} className='image'>
            <div className='custom-image'>
              <motion.div
                initial={{ scale: 0.8 }}
                exit={{ scale: 0.8 }}
                animate={{ scale: 1 }}
              >
                <SuccessSvg />
              </motion.div>
            </div>
          </Grid>
          <Grid item md={6} className='hero'>
            <Typography variant='h4' className='hero__title'>
              Pals' success <span className='highlight'>stories!</span>
            </Typography>
            <Typography variant='body1' className='hero__paragraph'>
              We’ve all got one. A thing we love doing, a thing we’ve always
              wanted to do or just a thing we could do. Whatever it is, when we
              do it, we can really make a difference. Do your thing and change
              people’s lives, then tell your story.
            </Typography>
            <div className='hero__buttons'>
              {/* <Link to='/donate'> */}
              <CPButton variant='contained' color='primary'>
                Tell your story now
              </CPButton>
              {/* </Link> */}
            </div>
          </Grid>
        </Grid>
      </Container>
    </Styled.SuccessStories>
  );
};

export default SuccessStories;
