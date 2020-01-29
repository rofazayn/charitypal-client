import React, { useState, useEffect } from 'react';
import { Styled } from './style';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from '@material-ui/core';
import { ReactComponent as StepOneSvg } from '../../assets/svg/undraw_virtual_assistant_jjo2.svg';
import CPButton from '../../components/layout/CPButton';

const Donate = () => {
  const [subscription, setSubscription] = useState('');
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setSubscription(event.target.value);
  };
  return (
    <Styled.Donate className='page'>
      <Container>
        <Grid
          container
          spacing={10}
          alignItems='center'
          justify='space-between'
        >
          <Grid item md={6} className='image'>
            <div className='custom-image'>
              <StepOneSvg />
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
              <form>
                <TextField variant='outlined' label='Full name' fullWidth />
                <TextField variant='outlined' label='Email' fullWidth />

                <Grid container alignItems='center' justify='space-between'>
                  <Grid item xs={8}>
                    <FormControl variant='outlined' fullWidth>
                      <InputLabel
                        ref={inputLabel}
                        id='demo-controlled-open-select-label'
                      >
                        Subscription
                      </InputLabel>
                      <Select
                        labelId='demo-controlled-open-select-label'
                        id='demo-controlled-open-select'
                        value={subscription}
                        onChange={handleChange}
                        labelWidth={labelWidth}
                      >
                        <MenuItem value={1}>Donate once</MenuItem>
                        <MenuItem value={2}>Donate monthly</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={4} className='button-container'>
                    <CPButton variant='contained' color='primary'>
                      Proceed
                    </CPButton>
                  </Grid>
                </Grid>

                <Typography variant='caption' className='hero__caption'>
                  Your donation can be cancelled within 24 hours.
                </Typography>
              </form>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Styled.Donate>
  );
};

export default Donate;
