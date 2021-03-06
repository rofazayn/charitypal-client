import React from 'react';
import {
  Grid,
  Typography,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
  CircularProgress,
  FormHelperText,
} from '@material-ui/core';
import CPButton from '../layout/CPButton';
import { ReactComponent as DollarSignIcon } from '../../assets/icons/dollar-sign.svg';
import { ReactComponent as CreditCardIcon } from '../../assets/icons/credit-card.svg';
import { ReactComponent as CalendarIcon } from '../../assets/icons/calendar.svg';
import { ReactComponent as KeyIcon } from '../../assets/icons/key.svg';
import { ReactComponent as AlertIcon } from '../../assets/icons/alert-circle.svg';
import { ReactComponent as CheckIcon } from '../../assets/icons/check.svg';
import { motion } from 'framer-motion';
import { ReactComponent as StepTwoSvg } from '../../assets/svg/undraw_credit_card_payment_yb88.svg';
import { Formik } from 'formik';
// import Axios from 'axios';
import vSchema from './validationSchema';
// import Axios from 'axios';

const DonateStepTwo = ({ nextStep, data, dispatch }) => {
  return (
    <Grid container spacing={10} alignItems='center' justify='space-between'>
      <Grid item md={6} className='image'>
        <div className='custom-image'>
          <StepTwoSvg />
        </div>
      </Grid>
      <Grid item md={6} className='hero'>
        <motion.div
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Typography variant='h4' className='hero__title'>
            One more <span className='highlight'>step.</span>
          </Typography>
          <Typography variant='body1' className='hero__paragraph'>
            Help us draw a smile on the faces of underprivileged children, buy
            them breakfast, or pay for their education.
          </Typography>
          <div className='step-one'>
            <Formik
              initialValues={data}
              validationSchema={vSchema}
              onSubmit={(values) => {
                setTimeout(() => {
                  nextStep(3);
                }, 1000);

                // Need a spark plan on Firebase for this one to work online
                // Axios.post(
                //   'http://localhost:5000/charitypal-d3b98/europe-west1/tokenize',
                //   {
                //     number: values.cardNumber,
                //     exp_month: values.expMonth,
                //     exp_year: values.expYear,
                //     cvc: values.cvv,
                //     name: data.name
                //   }
                // )
                //   .then(res => {
                //     Axios.post(
                //       'http://localhost:5000/charitypal-d3b98/europe-west1/charge',
                //       {
                //         token: res.data.id,
                //         amount: values.amount,
                //         receipt_email: data.email
                //       }
                //     )
                //       .then(data => {
                //         console.log(data);
                //         nextStep(3);
                //       })
                //       .catch(err => console.log(err.response));
                //   })
                //   .catch(err => console.log(err.response));
              }}
            >
              {({
                handleSubmit,
                handleChange,
                values,
                isSubmitting,
                touched,
                errors,
              }) => (
                <form onSubmit={handleSubmit}>
                  <FormControl fullWidth variant='outlined'>
                    <InputLabel
                      htmlFor='outlined-adornment-year'
                      error={touched.cardNumber && errors.cardNumber && true}
                    >
                      Card number
                    </InputLabel>
                    <OutlinedInput
                      variant='outlined'
                      label='Card number'
                      value={values.cardNumber}
                      onChange={handleChange}
                      name='cardNumber'
                      placeholder="Please enter your card's number"
                      error={
                        touched.cardNumber && errors.cardNumber ? true : false
                      }
                      endAdornment={
                        <InputAdornment position='end'>
                          <CreditCardIcon
                            style={{ color: 'gray', width: 18 }}
                          />
                        </InputAdornment>
                      }
                    />
                    <FormHelperText error>
                      {touched.cardNumber && errors.cardNumber
                        ? errors.cardNumber
                        : ''}
                    </FormHelperText>
                  </FormControl>

                  <Grid
                    container
                    alignItems='center'
                    justify='space-between'
                    spacing={2}
                  >
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                      <Grid
                        container
                        alignItems='center'
                        justify='space-between'
                        spacing={2}
                      >
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                          <FormControl fullWidth variant='outlined'>
                            <InputLabel
                              htmlFor='outlined-adornment-month'
                              error={
                                touched.expMonth && errors.expMonth
                                  ? true
                                  : false
                              }
                            >
                              MM
                            </InputLabel>
                            <OutlinedInput
                              variant='outlined'
                              placeholder='Exp MM'
                              label='MM'
                              fullWidth
                              value={values.expMonth}
                              onChange={handleChange}
                              name='expMonth'
                              error={
                                touched.expMonth && errors.expMonth
                                  ? true
                                  : false
                              }
                              endAdornment={
                                <InputAdornment position='end'>
                                  <CalendarIcon
                                    style={{ color: 'gray', width: 18 }}
                                  />
                                </InputAdornment>
                              }
                            />
                          </FormControl>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                          <FormControl fullWidth variant='outlined'>
                            <InputLabel
                              htmlFor='outlined-adornment-year'
                              error={
                                touched.expYear && errors.expYear ? true : false
                              }
                            >
                              YY
                            </InputLabel>
                            <OutlinedInput
                              variant='outlined'
                              placeholder='Exp YY'
                              label='YY'
                              value={values.expYear}
                              onChange={handleChange}
                              name='expYear'
                              fullWidth
                              error={
                                touched.expYear && errors.expYear ? true : false
                              }
                              endAdornment={
                                <InputAdornment position='end'>
                                  <CalendarIcon
                                    style={{ color: 'gray', width: 18 }}
                                  />
                                </InputAdornment>
                              }
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                      <FormControl fullWidth variant='outlined'>
                        <InputLabel
                          htmlFor='outlined-adornment-year'
                          error={touched.cvc && errors.cvc ? true : false}
                        >
                          Code (CVC)
                        </InputLabel>
                        <OutlinedInput
                          variant='outlined'
                          label='Code (CVV)'
                          placeholder='Card code'
                          value={values.cvc}
                          name='cvc'
                          onChange={handleChange}
                          error={touched.cvc && errors.cvc ? true : false}
                          endAdornment={
                            <InputAdornment position='end'>
                              <KeyIcon style={{ color: 'gray', width: 18 }} />
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    alignItems={
                      touched.amount && errors.amount ? 'flex-start' : 'center'
                    }
                    justify='space-between'
                    spacing={2}
                  >
                    <Grid item xs={12} sm={7} md={6} lg={8}>
                      <FormControl fullWidth variant='outlined'>
                        <InputLabel
                          htmlFor='outlined-adornment-year'
                          error={touched.amount && errors.amount ? true : false}
                        >
                          Amount
                        </InputLabel>
                        <OutlinedInput
                          variant='outlined'
                          label='Amount'
                          value={values.amount}
                          onChange={handleChange}
                          name='amount'
                          placeholder='Choose an amount in USD'
                          error={touched.amount && errors.amount ? true : false}
                          endAdornment={
                            <InputAdornment position='end'>
                              <DollarSignIcon
                                style={{ color: 'gray', width: 18 }}
                              />
                            </InputAdornment>
                          }
                        />
                        <FormHelperText error>
                          {touched.amount && errors.amount ? errors.amount : ''}
                        </FormHelperText>
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
                            <CheckIcon />
                          )
                        }
                        type='submit'
                        disabled={isSubmitting}
                      >
                        Donate
                      </CPButton>
                    </Grid>
                  </Grid>

                  <Typography variant='caption' className='hero__caption'>
                    <AlertIcon style={{ color: 'gray', width: 18 }} />
                    No worries, your card information is secured and never
                    saved.
                  </Typography>
                </form>
              )}
            </Formik>
          </div>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default DonateStepTwo;
