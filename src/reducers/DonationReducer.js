export const initialDonationState = {
  name: '',
  email: '',
  subscription: '',
  cardNumber: '',
  expMonth: '',
  expYear: '',
  cvv: '',
  amount: ''
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
