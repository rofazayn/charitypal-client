import * as Yup from 'yup';
import valid from 'card-validator';

const vSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .test(
      'test-number',
      'Card number is invalid',
      value => valid.number(value).isValid
    )
    .required('Please make sure you entered a card number'),
  expMonth: Yup.string()
    .min(1, 'Please enter a valid expiry month')
    .max(2, 'Please enter a valid expiry month')
    .required('Please enter expiry month'),
  expYear: Yup.string()
    .min(1, 'Please enter a valid expiry year')
    .max(2, 'Please enter a valid expiry year')
    .required('Please enter expiry year'),
  cvc: Yup.string()
    .min(3, 'Please enter a valid CVC code')
    .max(3, 'Please enter a valid CVC code')
    .required('Please enter CVC code'),
  amount: Yup.string()
    .max(4, 'Donations from this form cannot be over $10000')
    .required('Please pick an amount to donate')
});

export default vSchema;
