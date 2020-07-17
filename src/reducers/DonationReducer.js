export const initialDonationState = {
  name: '',
  email: '',
  subscription: '',
  cardNumber: '4242424242424242',
  expMonth: '5',
  expYear: '2023',
  cvc: '123',
  amount: '',
};

const donationReducer = (state = initialDonationState, action) => {
  switch (action.type) {
    case 'UPDATE':
      return { state, ...action.payload };

    default:
      return state;
  }
};

export default donationReducer;
