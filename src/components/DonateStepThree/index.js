import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';
import { ReactComponent as StepThreeSvg } from '../../assets/svg/undraw_festivities_tvvj.svg';

const DonateStepThree = ({ nextStep, data, dispatch }) => {
  return (
    <Grid container spacing={10} alignItems='center' justify='space-between'>
      <Grid item md={6} className='image'>
        <div className='custom-image'>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            exit={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <StepThreeSvg />
          </motion.div>
        </div>
      </Grid>
      <Grid item md={6} className='hero'>
        <motion.div
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Typography variant='h4' className='hero__title'>
            Thank you for <br />
            your generosity!
          </Typography>
          <Typography variant='body1' className='hero__paragraph'>
            Your donation is being processed, your credit card will be charged
            shortly and a receipt will be sent to your email.
          </Typography>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default DonateStepThree;
