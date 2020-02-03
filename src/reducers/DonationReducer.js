export const initialDonationState = {
  name: '',
  email: '',
  subscription: 1,
  cardNumber: null,
  expMonth: null,
  expYear: null,
  cvv: null
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
