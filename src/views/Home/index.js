import React, { useState } from 'react';
import { Styled } from './style';
import { Container, Typography, Grid } from '@material-ui/core';
import { ReactComponent as PlayButtonIcon } from '../../assets/icons/play.svg';
import HomeHeroImage from '../../assets/images/home-hero.png';
import CPButton from '../../components/layout/CPButton/index';
import CPButtonIcon from '../../components/layout/CPIconButton';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import CPModal from '../../components/layout/CPModal';

const Home = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    setIsVideoPlaying(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsVideoPlaying(false);
  };

  return (
    <Styled.Home
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
              <img src={HomeHeroImage} alt='Children starving' />
            </div>
          </Grid>
          <Grid item md={6} className='hero'>
            <Typography variant='h4' className='hero__title'>
              We need your <span className='highlight'>help!</span>
            </Typography>
            <Typography variant='body1' className='hero__paragraph'>
              We’ve all got one. A thing we love doing, a thing we’ve always
              wanted to do or just a thing we could do. Whatever it is, when we
              do it, we can really make a difference. Do your thing and change
              people’s lives.
            </Typography>
            <div className='hero__buttons'>
              <Link to='/donate'>
                <CPButton variant='contained' color='primary'>
                  Donate now
                </CPButton>
              </Link>
              <CPButtonIcon variant='contained' onClick={handleOpen}>
                <PlayButtonIcon />
              </CPButtonIcon>
            </div>
            <Typography variant='caption' className='hero__caption'>
              $5/month, be a part of saving children's lives.
            </Typography>
          </Grid>
        </Grid>

        <CPModal
          aria-labelledby='simple-modal-title'
          aria-describedby='simple-modal-description'
          open={open}
          onClose={handleClose}
        >
          <div className='video-wrapper'>
            <ReactPlayer
              url='https://www.youtube.com/watch?v=E1xkXZs0cAQ'
              playing={isVideoPlaying}
              width='100%'
              height='100%'
            />
          </div>
        </CPModal>
      </Container>
    </Styled.Home>
  );
};

export default Home;
