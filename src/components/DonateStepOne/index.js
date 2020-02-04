import React, { useEffect } from 'react';
import {
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress
} from '@material-ui/core';
import CPButton from '../layout/CPButton';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow-right.svg';
import { motion } from 'framer-motion';
import { ReactComponent as StepOneSvg } from '../../assets/svg/undraw_virtual_assistant_jjo2.svg';
import { Formik } from 'formik';

const DonateStepOne = ({ nextStep, data, dispatch }) => {
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <Grid container spacing={10} alignItems='center' justify='space-between'>
      <Grid item md={6} className='image'>
        <div className='custom-image'>
          <motion.div
            initial={{ scale: 0.8 }}
            exit={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >
            <StepOneSvg />
          </motion.div>
        </div>
      </Grid>
      <Grid item md={6} className='hero'>
        <Typography variant='h4' className='hero__title'>
          Children needs <span className='highlight'>you!</span>
        </Typography>
        <Typography variant='body1' className='hero__paragraph'>
          Help us draw a smile on the faces of underprivileged children, buy
          them food, or pay for their education.
        </Typography>
        <div className='step-one'>
          <Formik
            initialValues={data}
            onSubmit={values => {
              dispatch({ type: 'UPDATE', payload: values });
              setTimeout(() => {
                nextStep(2);
              }, 1000);
            }}
          >
            {({ handleSubmit, handleChange, values, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <TextField
                  variant='outlined'
                  name='name'
                  value={values.name}
                  label='Full name'
                  fullWidth
                  onChange={handleChange}
                />
                <TextField
                  variant='outlined'
                  name='email'
                  value={values.email}
                  label='Email'
                  fullWidth
                  onChange={handleChange}
                />

                <Grid
                  container
                  alignItems='center'
                  justify='space-between'
                  spacing={2}
                >
                  <Grid item xs={12} sm={7} md={6} lg={8}>
                    <FormControl variant='outlined' fullWidth>
                      <InputLabel
                        ref={inputLabel}
                        id='demo-controlled-open-select-label'
                      >
                        Subscription
                      </InputLabel>
                      <Select
                        labelId='demo-controlled-open-select-label'
                        name='subscription'
                        id='demo-controlled-open-select'
                        value={values.subscription}
                        onChange={handleChange}
                        labelWidth={labelWidth}
                        fullWidth
                      >
                        <MenuItem value={1}>Donate once</MenuItem>
                        <MenuItem value={2} disabled>
                          Donate monthly (Coming soon)
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={5}
                    md={6}
                    lg={4}
                    className='button-wrapper'
                  >
                    <CPButton
                      variant='contained'
                      color='primary'
                      size='large'
                      endIcon={
                        isSubmitting ? (
                          <CircularProgress color='primary' size={22} />
                        ) : (
                          <ArrowRight />
                        )
                      }
                      type='submit'
                    >
                      Proceed
                    </CPButton>
                  </Grid>
                </Grid>

                <Typography variant='caption' className='hero__caption'>
                  Your donation can be cancelled within 24 hours.
                </Typography>
              </form>
            )}
          </Formik>
        </div>
      </Grid>
    </Grid>
  );
};

export default DonateStepOne;
