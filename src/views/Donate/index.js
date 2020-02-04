import React, { useState, useReducer } from 'react';
import { Styled } from './style';
import { Container } from '@material-ui/core';
import DonateStepOne from '../../components/DonateStepOne';
import DonateStepTwo from '../../components/DonateStepTwo';
import DonateStepThree from '../../components/DonateStepThree';
import donationReducer, {
  initialDonationState
} from '../../reducers/DonationReducer';
import { useScrollToTopWithoutRouteChange } from '../../hooks/useScrollToTop';

const Donate = () => {
  const [step, setStep] = useState(1);

  const nextStep = step => {
    setStep(step);
    window.scrollTo(0, 0);
  };

  const { app } = useScrollToTopWithoutRouteChange(step);

  const [donationState, donationDispatch] = useReducer(
    donationReducer,
    initialDonationState
  );

  return (
    <Styled.Donate
      ref={app}
      className='page'
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Container>
        {step === 1 ? (
          <DonateStepOne
            nextStep={nextStep}
            data={donationState}
            dispatch={donationDispatch}
          />
        ) : step === 2 ? (
          <DonateStepTwo
            nextStep={nextStep}
            data={donationState}
            dispatch={donationDispatch}
          />
        ) : step === 3 ? (
          <DonateStepThree
            nextStep={nextStep}
            data={donationState}
            dispatch={donationDispatch}
          />
        ) : (
          <DonateStepOne
            nextStep={nextStep}
            data={donationState}
            dispatch={donationDispatch}
          />
        )}
      </Container>
    </Styled.Donate>
  );
};

export default Donate;
