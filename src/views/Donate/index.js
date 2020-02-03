import React, { useState } from 'react';
import { Styled } from './style';
import { Container } from '@material-ui/core';
import DonateStepOne from '../../components/DonateStepOne';
import DonateStepTwo from '../../components/DonateStepTwo';

const Donate = () => {
  const [step, setStep] = useState(1);
  return (
    <Styled.Donate
      className='page'
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Container>
        {step === 1 ? <DonateStepOne nextStep={setStep} /> : <DonateStepTwo />}
      </Container>
    </Styled.Donate>
  );
};

export default Donate;
